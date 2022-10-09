<template>

  <v-row>
    <v-btn
      color="warning"
      text
      dark
      @click.stop="dialog = true"
    >
      <v-icon>{{ icons.mdiPencil }}</v-icon>
      &nbsp;
      Editar
    </v-btn>

    <v-dialog dark v-model="dialog" max-width="500" >
        <v-card >
            <v-container>
                <v-row class="text-center">
                    <v-col>
                        <div
                            v-if="verifyGeneralAdmin"
                        >
                            <label for="userName">Nome:</label>
                            <v-text-field
                                v-model="form.userName"
                                solo
                            >
                            </v-text-field>
                        </div>
                        <label for="company">Empresa:</label>
                        <v-text-field
                            v-model="form.company"
                            solo
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row v-if="dialogsSelect">
                    <v-col>
                        <v-select
                            :items="permissionLevel"
                            label="Selecionar"
                            dense
                            solo
                        ></v-select>
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
  import { mdiPencil } from '@mdi/js'

  export default {
    props: ['user'],
    data: () => ({
        permissionLevel: [
          "Administrador Geral",
          "Operador",
          "Visitante"
        ],
        icons: {
            mdiPencil
        },
        dialog: false,
        form: {
            id: null,
            userName: '',
            company: ''
        }
    }),
    methods: {
        editUser() {
            this.$store.dispatch('actionUserEdit', this.form)
            this.dialog = false
        },
        verifyGeneralAdmin() { return this.$store.admin.permissionLevel == 'GENERAL_ADMIN' },
        dialogsSelect() { return this.$route.meta.layout.dialogs.select }
    },
    mounted() {
        this.form.id = this.user.id
        this.form.userName = this.user.userName
        this.form.company = this.user.company
    }
  }
</script>
