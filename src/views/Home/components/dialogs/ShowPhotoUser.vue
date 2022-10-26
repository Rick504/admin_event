<template>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
          >
          Ver Foto
          </v-btn>
        </template>
        <img :src="getRenderImageBase64(userPhoto)">
      </v-dialog>
  </template>

<script>
    import renderImageBase64 from '@/utils/renderImageBase64'

    export default {
        props: ['user'],
        data() {
            return {
                userPhoto: null
            }
        },
        methods: {
          getRenderImageBase64(item) {  return renderImageBase64(item) }
        },
        mounted() {
            this.userPhoto = this.user
        },
    }
</script>
