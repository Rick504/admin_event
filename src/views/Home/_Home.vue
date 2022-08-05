<template>
  <v-container>
    <v-row>
        <h1>Admin</h1>
    </v-row>
    <v-row>
        <v-col>
            <h2>Usúarios Cadastrados</h2>
        </v-col>
        <v-col offset="4">
            <v-btn color="success" >
                Cadastrar Novo Usuário
            </v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-simple-table>
          <thead>
            <tr>
              <th>Número de Registro</th>
              <th>Nome</th>
              <th>Empresa</th>
              <th colspan="2"> Ações </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in homePageModule.users" :key="index">
                <td>{{item.numberRegister}}</td>
                <td>{{item.name}}</td>
                <td>{{item.company}}</td>
                <td><a href="##">Editar</a></td>
                <td><a href="##">Deletar</a></td>
            </tr>
            </tbody>
        </v-simple-table>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "HomePage",
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
