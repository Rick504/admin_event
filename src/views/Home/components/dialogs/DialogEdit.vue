<template>
    <v-row>
        <v-btn color="warning" text dark @click.stop="dialog = true">
            <v-icon>{{ icons.mdiPencil }}</v-icon>
            &nbsp;
            Editar
        </v-btn>

        <v-dialog dark v-model="dialog" max-width="500">
            <v-card>
                <v-container>
                    <v-row class="text-center">
                        <v-col>
                            <div v-if="verifyGeneralAdmin">
                                <label for="name">Nome:</label>
                                <v-text-field v-model="form.name" solo>
                                </v-text-field>
                            </div>
                            <div v-if="!this.$route.meta.layout.dialogs.select">
                                <label for="company">Empresa:</label>
                                <v-text-field v-model="form.company" solo>
                                </v-text-field>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-if="this.$route.meta.layout.dialogs.select">
                        <v-col>
                            <div for="permissionLevel">Permissionamento:</div>
                            <v-select :items="permissionLevel" label="Selecionar nível de permissão"
                                v-model="form.permissionLevel" dense solo></v-select>
                        </v-col>
                    </v-row>
                    <v-row class="text-center">
                        <v-col>
                            <v-btn text @click="dialog = false"> Voltar </v-btn>
                            <v-btn text @click="save"> Salvar </v-btn>
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
            {
                text: "Administrador Geral",
                value: "GENERAL_ADMIN"
            },          {
                text: "Operador",
                value: "OPERATOR"
            },          {
                text: "Visitante",
                value: "VISIT"
            }
        ],
        icons: {
            mdiPencil
        },
        dialog: false,
        form: {
            id: null,
            name: '',
            company: '',
            permissionLevel: '',
            photo: ''
        }
    }),
    methods: {
        save() {
            if (this.form.company){
                delete this.form.permissionLevel
                this.$store.dispatch('actionUserEdit', this.form)
            } else {
                delete this.form.company
                this.$store.dispatch('actionAdminsEdit', this.form)
                this.$store.dispatch('actionAdminDetail')
            }
            this.dialog = false
        },
        verifyGeneralAdmin() { return this.$store.admin.permissionLevel == 'GENERAL_ADMIN' },
    },
    mounted() {
        this.form.id = this.user.id
        this.form.name = this.user.name
        this.form.company = this.user.company
        this.form.permissionLevel = this.user.permissionLevel
        this.form.photo = this.user.photo
    }
  }
</script>
