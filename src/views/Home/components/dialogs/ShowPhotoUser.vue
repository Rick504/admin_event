<template>
  <v-dialog :value="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-avatar size="65" class="mx-16 my-1">
        <img v-bind="attrs" v-on="on" :src="getRenderImageBase64(userPhoto)">
      </v-avatar>
    </template>
    <img :src="getRenderImageBase64(userPhoto)">
  </v-dialog>
</template>

<script>
    import renderImageBase64 from '@/utils/renderImageBase64'

    export default {
        props: ['photo'],
        data() {
            return {
                userPhoto: null,
                dialog: false
            }
        },
        methods: {
          getRenderImageBase64(item) { return renderImageBase64(item) },
          ShowPhotoDialog() { return this.dialog = true }
        },
        mounted() {
            this.userPhoto = this.photo
        },
    }
</script>
