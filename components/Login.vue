<script setup lang='ts'>
const user = useSupabaseUser()
const { auth } =  useSupabaseClient()

watchEffect(() => {
    if (user.value) {
        navigateTo('/secret')
    }
})

const form = ref({
    email: '',
    password: ''
})

const errors = ref(false)


async function signIn() {
    const { error } = await auth.signIn({
        email: form.value.email,
        password: form.value.password,        
    })

    if(error) {
        errors.value = true
    }

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
        <h1 color-green-500>Sign in</h1>
        <div flex flex-col items-center gap-2>
            <input type="text" placeholder="Your Email" v-model="form.email">
            <input type="password" placeholder="Your Password" v-model="form.password">
        </div>
        <p v-if="errors" text-red-400 font-bold>Something went wrong</p>
        <div>
            <Button @click="signIn" text="Sign In" />
        </div>
    </Container>
</template>


