<template>
  <v-container class="home-container">
    <v-row>
      <v-col cols="5" class="mx-5">
        <v-btn
              fab
              dark
              color="indigo"
            >
              <strong>{{usersModule.admin.name}} </strong>
            </v-btn>
            <div class="mt-3">
              <p v-if="verifyGeneralAdmin"> Administrador Geral</p>
              <p v-else-if="usersModule.admin.permissionLevel == 'OPERATOR'"> Operador</p>
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
                  <th>Editar dados</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in usersModule.admins" :key="index">
                  <td width="20%" class="text-center">{{item.id}}</td>
                  <td width="20%">{{item.name}}</td>
                  <td width="30%">
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
import { DialogEditUser } from '@/views/Home/components/dialogs'

export default {
    name: "AdminsPage",
    data() {
      return {
        userId: 1,
      }
    },
    methods: {
      verifyGeneralAdmin() { return this.$store.admin.permissionLevel == 'GENERAL_ADMIN' }
    },
    components: {
      DialogEditUser,
      BtnLink
    },
     computed: {
    ...mapState(["usersModule"]),
    },
    mounted () {
        this.$store.dispatch('actionAdminDetails', this.userId)
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
