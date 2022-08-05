<template>
  <div>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center">Login</h1>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col offset="4" cols="4">
          <v-text-field
            v-model="userName"
            :rules="nameRules"
            label="Usúario"
            required
          ></v-text-field>
        </v-col>

        <v-col offset="4" cols="4">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Senha"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="7">
          <v-btn
            :disabled="!valid"
            color="success"
            @click="validate"
          >
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
  name: "_Login",
  data: () => ({
    valid: true,
    userName: '',
    password: '',
    nameRules: [
      v => !!v || 'Campo precisa ser preenchido.',
      v => v.length >= 3 || 'Campo precisa ter o mínimo de 3 caracteres',
    ],
    passwordRules: [
      v => !!v || 'Campo precisa ser preenchido.',
      v => v.length > 6 || 'Campo precisa ter o mínimo de 6 caracteres',
    ],
  })
}
</script>
