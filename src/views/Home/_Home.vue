<template>
  <v-container class="home-container">
    <v-alert
          text
          :value="usersModule.alert.active"
          color="success"
        >
        <v-row>
          <v-col class="text-center mt-2" cols="11">
            {{usersModule.alert.menssage}}
          </v-col>
          <v-col>
            <v-btn
              color="pink darken-1"
              text
              class="text-center"
              @click="usersModule.alert.active = false"
              > <strong>X</strong> </v-btn>
          </v-col>
        </v-row>
        </v-alert>

        <v-alert
          text
          :value="usersModule.alertError"
          color="pink"
        >
        <v-row>
          <v-col class="text-center mt-2" cols="11">
           <strong>Algo deu errado !!</strong>
          </v-col>
          <v-col>
            <v-btn
              color="pink darken-1"
              text
              class="text-center"
              @click="usersModule.alertError = false"
              > <strong>X</strong> </v-btn>
          </v-col>
        </v-row>
        </v-alert>
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
                    {{item.userName}}
                  </td>

                  <td width="30%">
                    {{item.company}}
                  </td>

                  <!-- EDIT -->
                  <td width="10%"
                    v-if="verifyGeneralAdmin || verifyOperator">
                    <v-btn color="warning" text>
                      <DialogEditUser :user="item" />
                    </v-btn>
                  </td>

                  <!-- DELETE -->
                  <td width="10%"
                    v-if="verifyGeneralAdmin">
                    <v-btn color="pink darken-1" text >
                        <DialogDeleteUser
                          :userId="item.id"
                          :userName="item.userName"
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
import BtnLink from '@/views/Home/components/utils/BtnLink.vue'
import { DialogInsertUser, DialogDeleteUser, DialogEditUser } from '@/views/Home/components/dialogs'

export default {
    name: "HomePage",
    data() {
      return {
        showTable: true,
        usersModule: this.$store.state.usersModule
      }
    },
    components: {
        DialogInsertUser,
        DialogDeleteUser,
        DialogEditUser,
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
