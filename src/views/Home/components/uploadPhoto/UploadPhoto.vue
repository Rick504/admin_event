<template>
    <div>
        <label>
            <input ref="uploadFile" type="file" @change="uploadFile" />
            <span class="btn-upload-photo">
                Adicionar Foto
            </span>
        </label>
    </div>
</template>

<script>
import usersService from '@/services/users.service'

export default {
    props: ['userId'],
    methods: {
        uploadFile(e) {
            const image = e.target.files[0]
            if (image.type !== 'image/png') {
                return alert('Aceitamos somente foto png no momento')
            }
            const reader = new FileReader()
            reader.readAsDataURL(image)
            reader.onload = async e =>{
                this.previewImage = e.target.result
                const response = await usersService.userDetails(this.userId)
                if (response.status == 200) {
                    // console.log(this.previewImage)
                    response.data.photo = this.previewImage
                    const newUserData = response.data
                    // console.log(newUserData)
                    await usersService.userEdit(newUserData)
                    alert('Foto adocionada com sucesso !!')
                }
            }
        }
    }
}
</script>
