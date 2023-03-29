<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="text-center mt-5" style="color: white;">Login</h1>
          </v-col>
        </v-row>
        <v-row class="mt-16">
          <v-col offset="4" cols="4">
            <v-text-field v-model="form.name" :rules="nameRules" placeholder="Usúario" solo required></v-text-field>
          </v-col>

          <v-col offset="4" cols="4">
            <v-text-field v-model="form.password" :rules="passwordRules" placeholder="Senha" autocomplete="off"
              type="password" solo required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="7">
            <v-btn :disabled="!valid" color="success" @click="validate">
              Entrar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    valid: true,
    form: {
      name: '',
      password: '',
    },
    nameRules: [
      v => !!v || 'Campo precisa ser preenchido.',
      v => v.length >= 3 || 'Campo precisa ter o mínimo de 3 caracteres',
    ],
    passwordRules: [
      v => !!v || 'Campo precisa ser preenchido.',
      v => v.length > 6 || 'Campo precisa ter o mínimo de 6 caracteres',
    ],
  }),
  methods: {
    validate() {
      console.log(this.form)
      //FUNCIONALIDADE AINDA NÃO IMPLEMENTADA
    }
  },
}
</script>
