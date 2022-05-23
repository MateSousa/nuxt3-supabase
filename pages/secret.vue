<script setup lang='ts'>
const { auth } = useSupabaseClient()

function signOut() {
    auth.signOut()
    navigateTo('/')
}
</script>

<template>
    <div flex flex-col justify-center items-center gap-5 w-full h-100vh>
        <CreateThought />
        <div @click="signOut" i-carbon-logout text-4xl text-red-700 absolute top-10 right-10 cursor-pointer />
        <ListOfThought />
    </div>
</template>



<style scoped>
</style>