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
    </label>
    </div>
</template>

<script>
export default {
    methods: {
        uploadFile(e) {
            const image = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(image)
            reader.onload = e =>{
                this.previewImage = e.target.result
                console.log(this.previewImage)
            }
        }
    }
}
</script>
