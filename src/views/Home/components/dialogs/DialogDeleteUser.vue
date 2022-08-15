<template>
  <v-row>
    <v-btn
      color="pink"
      text
      dark
      @click.stop="dialog = true"
    >
      Excluir
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
    <v-card dark>
        <v-container>
            <v-row class="text-center">
                <v-col>
                    <v-alert type="error">
                        Deseja realmente excluir {{userName}} ?
                    </v-alert>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col>
                    <v-btn text @click="userDelete"> Sim </v-btn>
                    <v-btn text @click="dialog = false"> Não, Voltar </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      userId: Number,
      userName: String
    },
    data: () => ({
      dialog: false,
    }),
    methods: {
      userDelete() {
        this.$store.dispatch('httpUserDelete', this.userId)
        this.dialog = false
      }
    }
  }
</script>
