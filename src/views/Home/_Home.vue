<template>
  <v-container class="home-container">
    <v-row>
        <h1>Admin</h1>
    </v-row>
    <v-row>
        <v-col>
            <h2>Usúarios Cadastrados</h2>
        </v-col>
        <v-col offset="5">
            <DialogInsertUser />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-simple-table dark>
          <thead>
            <tr>
              <th class="text-center">Número de Registro</th>
              <th class="text-center">Nome</th>
              <th>Empresa</th>
              <th colspan="2"> Ações </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in homePageModule.users" :key="index">
                <td width="15%" class="text-center">
                  {{item.id}}
                </td>
                <td class="text-center">
                  {{item.userName}}
                </td>

                <td>
                  {{item.company}}
                </td>
                <td width="10%">
                  <v-btn color="warning" text @click="editUser(item.id)">
                    Editar
                  </v-btn>
                </td>

                <td width="10%">
                  <v-btn color="pink darken-1" text>
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
  DialogDeleteUser
} from './components'

export default {
    name: "HomePage",
    data() {
      return {
      }
    },
    components: {
      DialogInsertUser,
      DialogDeleteUser
    },
    methods: {
      editUser(id) {
        console.log(id)
      }
    },
    computed: {
    ...mapState(["homePageModule"]),
    },
    mounted () {
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
