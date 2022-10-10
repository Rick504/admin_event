<template>
    <div>
        <v-alert
          text
          :value="usersModule.alert.active"
          color="success"
        >
        <v-row>
          <v-col class="text-center mt-2" cols="11">
            {{usersModule.alert.menssage}}
          </v-col>
          <v-col>
            <v-btn
              color="pink darken-1"
              text
              class="text-center"
              @click="usersModule.alert.active = false"
              > <strong>X</strong>
            </v-btn>
          </v-col>
        </v-row>
        </v-alert>

        <v-alert
          text
          :value="usersModule.alertError"
          color="pink"
        >
        <v-row>
          <v-col class="text-center mt-2" cols="11">
           <strong>Algo deu errado !!</strong>
          </v-col>
          <v-col>
            <v-btn
              color="pink darken-1"
              text
              class="text-center"
              @click="usersModule.alertError = false"
              > <strong>X</strong> </v-btn>
          </v-col>
        </v-row>
        </v-alert>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usersModule: this.$store.state.usersModule
        }
    },
}
</script>

