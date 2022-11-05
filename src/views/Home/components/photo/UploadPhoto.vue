<template>
    <div>
    <label>
        <input
            ref="uploadFile"
            type="file"
            @change="uploadFile"
        />
        <span class="btn-upload-photo">
            Adicionar Foto
        </span>
        <div>
            <img ref="imgDone" src="../../../../../../../../../Imagens/Capturas de tela/Captura de tela de 2022-11-01 12-18-26.png">
        </div>
    </label>
    </div>
</template>

<script>
import Cropper from 'cropperjs';

export default {
    data() {
        return {
            cropper: {},
            image: null,
            reader: null
        }
    },
    methods: {
        uploadFile(e) {
            this.image = e.target.files[0]
            this.reader = new FileReader()

            this.reader.readAsDataURL(this.image)
            this.reader.onload = e =>{ this.image = e.target.result }
            this.cropper = new Cropper(this.$refs.imgDone, {
                zoomable: false,
                scalable: false,
                aspectRatio: 1
            })
        },
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
