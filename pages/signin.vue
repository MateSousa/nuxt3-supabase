<script setup lang='ts'>
const client = useSupabaseClient()
const user = useSupabaseUser()

const form = ref({
    email: '',
    password: ''
})

function signIn() {
    client.auth.signIn({
        email: form.value.email,
        password: form.value.password,
    }) 
}
</script>

<template>

    <div class="index" flex justify-center items-center>
        <div class="singup-card">
            <div class="singup-card-header">
                <h1>Sign Up</h1>
            </div>
            <div class="singup-card-body">
                <div class="singup-card-body-input">
                    <input type="text" placeholder="Email" v-model="form.email">
                </div>
                <div class="singup-card-body-input">
                    <input type="password" placeholder="Password" v-model="form.password">
                </div>
                <div class="singup-card-body-input">
                </div>
                <div class="singup-card-body-button">
                    <button @click="signIn">Sign in</button>
                </div>
            </div>
        </div>
        <div class="go-to-signin">
            <a href="/signin">Already have an account? Sign In</a>
        </div>
        {{user}}
    </div>

</template>



<style scoped>
</style>