<template>
    <div>
        <label>
            <input ref="uploadFile" type="file" @change="uploadFile" />
            <span class="btn-upload-photo">
                Adicionar Foto
            </span>
        </label>
        <v-dialog v-model="dialog" width="500">
                <img
                    ref="cropperRef">
                <div class="d-flex justify-space-around">
                    <v-btn @click="dialog = false"> Fechar </v-btn>
                    <v-btn @click="save"> Salvar </v-btn>
                </div>
        </v-dialog>
    </div>
</template>

<script>
import Cropper from 'cropperjs';

export default {
    data() {
        return {
            cropper: {},
            image: null,
            reader: null,
            dialog: false
        }
    },
    methods: {
        async uploadFile(e) {
            this.dialog = true

            this.image = e.target.files[0]
            this.reader = new FileReader()

            await this.$refs.cropperRef

            this.reader.readAsDataURL(this.image)
            this.reader.onload = e =>{
                this.$refs.cropperRef.src = e.target.result
                this.cropper = new Cropper(this.$refs.cropperRef, {
                    zoomable: false,
                    scalable: false,
                    aspectRatio: 1
                })
            }
        },
        save() {
            console.log('salvar')
        }
    }
}
</script>

<style scoped>
img {
  display: block;

  /* This rule is very important, please don't ignore this */
  max-width: 100%;
}
</style>
