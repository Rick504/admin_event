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
            <v-btn
              fab
              dark
              color="indigo"
            >
              <strong> {{usersModule.admin.name}} </strong>
            </v-btn>
            <div class="mt-3">
              <p v-if="verifyGeneralAdmin"> Administrador Geral</p>
              <p v-else-if="verifyOperator"> Operador</p>
              <p v-else> Visitante</p>
            </div>
          </v-col>
          <v-col v-if="verifyGeneralAdmin">
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
            <DialogInsertUser v-if="verifyGeneralAdmin" />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
          <v-simple-table dark v-if="showTable">
            <thead>
              <tr>
                <th class="text-center">Número de Registro</th>
                <th>Nome</th>
                <th>Empresa</th>
                <th colspan="2"
                  v-if="verifyGeneralAdmin || verifyOperator"
                > Ações </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in usersModule.users" :key="index">
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
                    v-if="verifyGeneralAdmin || verifyOperator">
                    <v-btn color="warning" text>
                      <DialogEdit :user="item" />
                    </v-btn>
                  </td>

                  <!-- DELETE -->
                  <td width="10%"
                    v-if="verifyGeneralAdmin">
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
    AlertNotifications } from '.'

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
        BtnLink
    },
    methods: {
      verifyGeneralAdmin() { return this.usersModule.admin.permissionLevel == 'GENERAL_ADMIN' },
      verifyOperator() { return this.usersModule.admin.permissionLevel == 'OPERATOR' }
    },
    mounted () {
        this.$store.dispatch('actionAdminDetail')
        this.$store.dispatch('actionAdminsDetails')
        this.$store.dispatch('actionUsersDetail')
    },
}
</script>

<style scoped>
  input {
    background: rgb(31, 30, 30);
    color: aliceblue;
    text-align: center;
    border-radius: 5px;
  }

  .inputEdit {
    background: rgb(252, 246, 246);
    color: rgb(10, 10, 10);
  }
</style>
