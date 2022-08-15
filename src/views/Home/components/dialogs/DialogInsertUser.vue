<template>
  <v-row>
    <v-btn
      color="success"
      dark
      @click.stop="dialog = true"
    >
      Cadastrar Novo Usuário
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
    <v-card dark>
        <v-form v-model="valid">
        <v-container>
        <v-row>
          <v-col>
              <v-text-field
                  v-model="userData.userName"
                  :rules="nameRules"
                  label="Nome"
                  required
              ></v-text-field>
              </v-col>
          </v-row>

          <v-row>
          <v-col>
              <v-text-field
                  v-model="userData.company"
                  :rules="nameRules"
                  label="Empresa"
                  required
              ></v-text-field>
              </v-col>
          </v-row>

          <v-row>
              <v-col>
                  <v-btn
                      color="green darken-1"
                      text
                      @click="dialog = false"
                  >
                      Fechar
                  </v-btn>

                  <v-btn
                      color="green darken-1"
                      text
                      @click="saveUser"
                      :disabled="!valid || userData.userName == ''"
                  >
                      Adicionar a lista
                  </v-btn>
              </v-col>
          </v-row>
          </v-container>
        </v-form>
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      valid: true,
      userData: {
        userName: '',
        company: '',
      },
      nameRules: [
        v => !!v || 'Campo precisa ser preenchido.',
        v => v.length >= 3 || 'Campo precisa ter o mínimo de 3 caracteres',
    ],
    }),
    methods: {
      saveUser() {
        this.$store.dispatch('httpUserInsert', this.userData)
        this.dialog = false
      }
    }
  }
</script>
