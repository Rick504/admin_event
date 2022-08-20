<template>
  <v-container class="home-container">
    <v-alert
          text
          :value="homePageModule.alertSuccess.active"
          color="success"
        >
        <v-row>
          <v-col class="text-center mt-2" cols="11">
            {{homePageModule.alertSuccess.menssage}}
          </v-col>
          <v-col>
            <v-btn
              color="pink darken-1"
              text
              class="text-center"
              @click="homePageModule.alertSuccess.active = false"
              > <strong>X</strong> </v-btn>
          </v-col>
        </v-row>
        </v-alert>

        <v-alert
          text
          :value="homePageModule.alertError"
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
              @click="homePageModule.alertError = false"
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
              <strong>{{homePageModule.admin.name}} </strong>
            </v-btn>
            <div class="mt-3">
              <p v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN'"> Administrador Geral</p>
              <p v-else-if="homePageModule.admin.permissionLevel == 'OPERATOR'"> Operador</p>
              <p v-else> Visitante</p>
            </div>
          </v-col>
          <v-col class="mx-5" v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN'">
            <router-link to="/admins">
                <v-btn
                fab
                dark
                text
                color="teal"
              >
                <v-icon dark>
                  {{icons.mdiFormatListBulletedSquare}}
                </v-icon>
                &nbsp;
                Editar Administradores
              </v-btn>
            </router-link>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="showTable">
        <v-col cols="9">
            <h2>Usúarios Cadastrados</h2>
        </v-col>

        <!-- ADD -->
        <v-col class="mt-4">
            <DialogInsertUser v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN'" />
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
                  v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN' ||
                    homePageModule.admin.permissionLevel == 'OPERATOR'"
                > Ações </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in homePageModule.users" :key="index">
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
                    v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN' ||
                    homePageModule.admin.permissionLevel == 'OPERATOR'">
                    <v-btn color="warning" text>
                      <DialogEditUser :user="item" />
                    </v-btn>
                  </td>

                  <!-- DELETE -->
                  <td width="10%"
                    v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN'">
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
import { mapState } from 'vuex'
import { mdiFormatListBulletedSquare } from '@mdi/js'
import {
  DialogInsertUser,
  DialogDeleteUser,
  DialogEditUser
} from '@/views/Home/components/dialogs'

export default {
    name: "HomePage",
    data() {
      return {
        showTable: true,
        icons: {
          mdiFormatListBulletedSquare
        },
        userId: 1
      }
    },
    components: {
      DialogInsertUser,
      DialogDeleteUser,
      DialogEditUser
    },
    computed: {
    ...mapState(["homePageModule"]),
    },
    mounted () {
        this.$store.dispatch('httpAdminDetails', this.userId)
        this.$store.dispatch('httpUsersDetail')
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

  a { text-decoration: none; }
</style>
