<template>
  <v-container class="home-container">
    <v-row>
      <v-col>
        <AlertNotifications />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="5" class="mx-5">
            <InfoAdmin />
          </v-col>
          <v-col v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN')">
            <v-row>
              <v-col>
                <BtnLink />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="showTable">
        <v-col cols="9" class="px-5">
            <h2>Usúarios Cadastrados</h2>
        </v-col>

        <!-- ADD -->
        <v-col class="mt-4">
            <DialogInsertUser v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN')" />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
          <v-simple-table dark v-if="showTable">
            <thead>
              <tr>
                <th class="text-center">Foto</th>
                <th class="text-center">Número de Registro</th>
                <th>Nome</th>
                <th>Empresa</th>
                <th colspan="2"
                  v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN') |
                        getVerifyPermission(usersModule.admin.permissionLevel, 'OPERATOR')"
                > Ações </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in usersModule.users" :key="index">
                  <td>
                    <div v-if="item.photo">
                      <v-avatar class="mx-9 my-3">
                          <img
                            :src="generateImage(item.photo)"
                            alt="Foto"
                          >
                      </v-avatar>
                      <v-btn>
                        Ver Foto
                      </v-btn>
                    </div>
                    <div v-else class="mx-9 my-3">
                        <v-btn fab> Adicionar Foto </v-btn>
                    </div>
                  </td>
                  <td width="30%" class="text-center">
                    {{item.id}}
                  </td>
                  <td width="20%" >
                    {{item.name}}
                  </td>

                  <td width="30%">
                    {{item.company}}
                  </td>

                  <!-- EDIT -->
                  <td width="10%"
                    v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN') |
                          getVerifyPermission(usersModule.admin.permissionLevel, 'OPERATOR')">
                    <v-btn color="warning" text>
                      <DialogEdit :user="item" />
                    </v-btn>
                  </td>

                  <!-- DELETE -->
                  <td width="10%"
                    v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN')">
                    <v-btn color="pink darken-1" text >
                        <DialogDeleteUser
                          :userId="item.id"
                          :name="item.name"
                        />
                    </v-btn>
                  </td>
              </tr>
              </tbody>
          </v-simple-table>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
    DialogInsertUser,
    DialogDeleteUser,
    DialogEdit,
    BtnLink,
    AlertNotifications,
    InfoAdmin
  } from '.'

export default {
    name: "HomePage",
    data() {
      return {
        showTable: true,
        usersModule: this.$store.state.usersModule
      }
    },
    components: {
        AlertNotifications,
        DialogInsertUser,
        DialogDeleteUser,
        DialogEdit,
        BtnLink,
        InfoAdmin
    },
    methods: {
      getVerifyPermission(userPermission, permission) { return userPermission === permission? true : false },
      generateImage(item) {
        let image = new Image();
        image.src = `data:image/png;base64,${item}`

        return image.src
      }
    },
    mounted () {
        this.$store.dispatch('actionAdminDetail')
        this.$store.dispatch('actionAdminsDetails')
        this.$store.dispatch('actionUsersDetail')
    },
}
</script>
