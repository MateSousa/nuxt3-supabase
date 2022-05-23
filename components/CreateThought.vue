<script setup lang='ts'>
const client = useSupabaseClient()
const user = useSupabaseUser()

const form = ref({
    title: '',
    content: '',
})

async function createThought()  {
    await client.from('thought').upsert({
        title: form.value.title,
        thoughts: form.value.content,
        author: user.value.id,
    })
}

</script>

<style scoped>

input {
    width: 250px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
}

input:focus {
    outline: none;
}

</style>

<template>
    <Container>
            <h1 color-green-500 font-bold>Create thought</h1>
            <div flex flex-col items-center>
                <input v-model="form.title" placeholder="Title" />
                <input v-model="form.content" placeholder="Content" />
            </div>
            <Button @click="createThought" text="Create" />
    </Container>
</template>

