<template>

  <v-row>
    <v-btn
      color="warning"
      text
      dark
      @click.stop="dialog = true"
    >
      Editar
    </v-btn>

    <v-dialog v-model="dialog" max-width="500" >
        <v-card >
            <v-container>
                <v-row class="text-center">
                    <v-col>
                        <v-text-field
                            v-model="form.userName"
                            solo
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="form.company"
                            solo
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col>
                        <v-btn text @click="dialog = false"> Voltar </v-btn>
                        <v-btn text @click="editUser"> Salvar </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ['user'],
    data: () => ({
        dialog: false,
        form: {
            id: null,
            userName: '',
            company: ''
        }
    }),
    methods: {
        editUser() {
            this.$store.dispatch('httpUserEdit', this.form)
            this.dialog = false
        }
    },
    mounted() {
        this.form.id = this.user.id
        this.form.userName = this.user.userName
        this.form.company = this.user.company
    }
  }
</script>
