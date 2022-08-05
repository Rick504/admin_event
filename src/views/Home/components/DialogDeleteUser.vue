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
                        Deseja realmente excluir este usuário?
                    </v-alert>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col>
                    <v-btn text> Sim </v-btn>
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
    data: () => ({
      dialog: false,
    }),
  }
</script>
