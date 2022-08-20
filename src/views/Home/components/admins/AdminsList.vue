<template>
  <v-container class="home-container">
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
      <v-col v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN'">
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
        <v-simple-table dark v-for="(item, index) in teste.users" :key="index">
              <thead>
                <tr>
                  <th width="5%"></th>
                  <th width="30%">Id</th>
                  <th width="40%">Nome</th>
                  <th>Editar dados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>
                    <v-btn color="warning" text>
                        <DialogEditUser :user="item" />
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

import BtnLink from '@/views/Home/components/utils/BtnLink.vue'
import {
  DialogEditUser
} from '@/views/Home/components/dialogs'

export default {
    name: "AdminsPage",
    data() {
      return {
        userId: 1,
        teste: {
          users: [
            {
              id: 1,
              name: "Rick teste",
              password: "teste",
              permissionLevel: "GENERAL_ADMIN"
            }
          ]
        }
      }
    },
    components: {
      DialogEditUser,
      BtnLink
    },
     computed: {
    ...mapState(["homePageModule"]),
    },
    mounted () {
        this.$store.dispatch('httpAdminDetails', this.userId)
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
