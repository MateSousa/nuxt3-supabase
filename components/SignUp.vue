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

function signUp() {
    auth.signUp({
        email: form.value.email,
        password: form.value.password,
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
        <div>
            <h1 color-green-500>Sign up</h1>
        </div>
        <div flex flex-col items-center gap-2>
            <input type="text" placeholder="Your Email" v-model="form.email">
            <input type="password" placeholder="Your Password" v-model="form.password">
        </div>
        <div>
            <Button @click="signUp" text="Sign Up" />
        </div>
    </Container>
</template>


