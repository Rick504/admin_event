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
            <DialogRegisterUser />
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
              <th v-show="!editUserData"></th>
              <th colspan="2"> Ações </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in homePageModule.users" :key="index">
                <td width="15%" class="text-center">
                  <input
                    :disabled="index !== indexData"
                    :class="inputEdit && index == indexData? 'inputEdit' : ''"
                    type="text"
                    :value="item.numberRegister">
                </td>
                <td class="text-center">
                  <input
                    :disabled="index !== indexData"
                    :class="inputEdit && index == indexData? 'inputEdit' : ''"
                    type="text"
                    :value="item.name">
                </td>

                <td>
                  <input
                  :disabled="index !== indexData"
                  :class="inputEdit && index == indexData? 'inputEdit' : ''"
                  type="text"
                  :value="item.company">
                </td>
                <td v-show="!editUserData">
                  <v-btn v-if="index == indexData">
                    Salvar
                  </v-btn>
                </td>

                <td width="10%">
                  <v-btn color="warning" text @click="editUser(index)">
                    Editar
                  </v-btn>
                </td>

                <td width="10%">
                  <v-btn color="pink darken-1" text>
                      <DialogDeleteUser />
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
import DialogRegisterUser from './components/DialogRegisterUser.vue'
import DialogDeleteUser from './components/DialogDeleteUser.vue'

export default {
    name: "HomePage",
    data() {
      return {
        editUserData: true,
        indexData: '',
        inputEdit: false
      }
    },
    components: {
    DialogRegisterUser,
    DialogDeleteUser
    },
    methods: {
      editUser(index) {
        this.indexData = index
        this.editUserData = !this.editUserData
        this.inputEdit = !this.inputEdit
      }
    },
    computed: {
    ...mapState(["homePageModule"])
    },
    mounted () {
        this.$store.dispatch('httpUsersDetailGet')
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
