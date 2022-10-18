<template>
    <div>
        <v-btn
            fab
            dark
            color="indigo"
        >
            <strong> {{usersModule.admin.name}} </strong>
        </v-btn>
        <div class="mt-3">
            <p> {{ getTranslateItem(usersModule.admin.permissionLevel) }} </p>
        </div>
    </div>
</template>

<script>
    import { translateItem } from '@/utils/translateItem'

    export default {
        name: 'InfoAdmin',
        data() {
            return {
                usersModule: this.$store.state.usersModule
            }
        },
        methods: {
            getTranslateItem(item) { return translateItem(item)}
        },
    }
</script>
