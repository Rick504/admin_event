<template>
  <v-row>
    <v-btn
      color="pink"
      text
      dark
      @click.stop="dialog = true"
    >
      <v-icon left>
        {{ icons.mdiDelete }}
      </v-icon>
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
                    <v-alert type="error" text>
                        Deseja realmente excluir {{userName}} ?
                    </v-alert>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col>
                  <v-btn
                      class="ma-1"
                      color="grey"
                      plain
                      @click="dialog = false"
                    >
                      Cancelar
                    </v-btn>
                  <v-btn
                      class="ma-1"
                      color="error"
                      plain
                      @click="userDelete"
                    >
                      Sim
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import { mdiDelete } from '@mdi/js'

  export default {
    props: {
      userId: Number,
      userName: String
    },
    data: () => ({
      dialog: false,
      icons: {
          mdiDelete
        }
    }),
    methods: {
      userDelete() {
        this.$store.dispatch('httpUserDelete', this.userId)
        this.dialog = false
      }
    }
  }
</script>
