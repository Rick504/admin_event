<template>
  <v-container class="home-container">
    <v-row>
      <v-col>
        <AlertNotifications />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5" class="mx-5">
        <InfoAdmin />
      </v-col>
      <v-col v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN') |
                   getVerifyPermission(usersModule.admin.permissionLevel, 'OPERATOR')">
        <v-row>
          <v-col>
            <BtnLink />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-5">
            <h2>Editar Administradores</h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table dark >
              <thead>
                <tr>
                  <th class="text-center">Número de Registro</th>
                  <th>Nome</th>
                  <th>Tipo de Administrador</th>
                  <th v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN') |
                            getVerifyPermission(usersModule.admin.permissionLevel, 'OPERATOR')">Editar dados</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in usersModule.admins" :key="index">
                  <td width="20%" class="text-center">{{item.id}}</td>
                  <td width="20%">{{item.name}}</td>
                  <td width="20%">
                    {{ getTranslateItem(item.permissionLevel) }}
                  </td>
                  <td width="30%" v-if="getVerifyPermission(usersModule.admin.permissionLevel, 'GENERAL_ADMIN') |
                                        getVerifyPermission(usersModule.admin.permissionLevel, 'OPERATOR')">
                    <v-btn color="warning" text>
                        <DialogEdit :user="item" />
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
import { BtnLink, AlertNotifications, DialogEdit, translateItem, InfoAdmin } from '.'

export default {
    name: "AdminsPage",
    data() {
      return {
        usersModule: this.$store.state.usersModule
      }
    },
    methods: {
      getVerifyPermission(userPermission, permission) { return userPermission === permission? true : false },
      getTranslateItem(item) { return translateItem(item)}
    },
    components: {
      DialogEdit,
      BtnLink,
      AlertNotifications,
      InfoAdmin
    },
    mounted () {
        this.$store.dispatch( 'actionAdminDetail' )
        this.$store.dispatch( 'actionAdminsDetails' )
    },
}
</script>
