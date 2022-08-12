<template>
  <v-container class="home-container">
    <v-row>
      <v-col>
        <h1> {{homePageModule.admin.name}} </h1>
        <p v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN'"> Administrador Geral</p>
        <p v-if="homePageModule.admin.permissionLevel == 'OPERATOR'"> Operador</p>
        <p v-if="homePageModule.admin.permissionLevel == 'VISIT'"> Visitante</p>
      </v-col>
    </v-row>
    <v-row>
        <v-col>
            <h2>Usúarios Cadastrados</h2>
        </v-col>

        <!-- ADD -->
        <v-col offset="5">
            <DialogInsertUser v-if="homePageModule.admin.permissionLevel == 'GENERAL_ADMIN'" />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-simple-table dark>
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
import {
  DialogInsertUser,
  DialogDeleteUser,
  DialogEditUser
} from './components'

export default {
    name: "HomePage",
    data() {
      return {
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
</style>
