<template>
    <v-row>
        <v-col>
            <router-link to="/home">
                <v-btn fab dark text color="teal">
                    <v-icon dark>
                        {{ icons.mdiFormatListBulletedSquare }}
                    </v-icon>
                    &nbsp;
                    Editar Usuários
                </v-btn>
            </router-link>
        </v-col>
        <v-col>
            <router-link to="/admins">
                <v-btn fab dark text color="teal">
                    <v-icon dark>
                        {{ icons.mdiFormatListBulletedSquare }}
                    </v-icon>
                    &nbsp;
                    Editar Administradores
                </v-btn>
            </router-link>
        </v-col>
    </v-row>
</template>

<script>
import { mdiFormatListBulletedSquare } from '@mdi/js'

export default {
    name: "BtnLink",
    data() {
        return {
            icons: {
                mdiFormatListBulletedSquare
            },
        }
    },
}
</script>
