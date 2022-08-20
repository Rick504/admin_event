<template>
  <v-container class="home-container">
    <router-link to="/">Voltar</router-link>

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
  </v-container>
</template>

<script>
import {
  DialogEditUser
} from '@/views/Home/components/dialogs'

export default {
    name: "AdminsPage",
    data() {
      return {
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
      DialogEditUser
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
