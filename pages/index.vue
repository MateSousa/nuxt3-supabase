<script setup lang='ts'>
let currentView = ref('Login')

function changeView(view: string) {
    currentView.value = view
}

</script>

<style scoped>

span {
    cursor: pointer;
    font-weight: bold;
}

span:hover {
    color: #00DC82;
}

p {
    color: #fff;
    font-size: 14px;
}



</style>

<template>
    <div flex justify-center items-center w-full h-100vh>
        <div flex flex-col items-center>
            <component :is="currentView" />
            <div>
                <p v-if="currentView === 'SignUp' ">Already have an account? <span @click="changeView('Login')">Sign in</span></p>
                <p v-else>Don't have an account? <span @click="changeView('SignUp')">Sign up</span></p>
            </div>
        </div>
    </div>
</template>
