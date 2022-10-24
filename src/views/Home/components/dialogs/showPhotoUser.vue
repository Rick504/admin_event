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
        <img :src="getGenerateImgBase64(userPhoto)">
      </v-dialog>
  </template>

<script>
    import generateImgBase64 from '@/utils/generateImgBase64'

    export default {
        props: ['user'],
        data() {
            return {
                userPhoto: null
            }
        },
        methods: {
            getGenerateImgBase64(item) {  return generateImgBase64(item) }
        },
        mounted() {
            this.userPhoto = this.user
        },
    }
</script>
