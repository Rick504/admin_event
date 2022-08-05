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
            <v-btn color="success" text >
                Cadastrar Novo Usuário
            </v-btn>
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
                    {{item.numberRegister}}
                </td>
                <td class="text-center">
                    {{item.name}}
                </td>
                <td>
                    {{item.company}}
                </td>
                <td width="10%">
                      <DialogRegisterUser />
                </td>
                <td width="10%">
                  <v-btn color="pink darken-1" text>
                      Deletar
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

export default {
    name: "HomePage",
    components: {
      DialogRegisterUser
    },
    computed: {
    ...mapState(["homePageModule"])
    },
    mounted () {
        this.$store.dispatch('httpUsersDetailGet')
    },
}
</script>

<style>

</style>
