<script setup lang='ts'>

defineProps({
    text: {
        type: String,
    }
})

</script>

<style scoped>

button {
    width: 200px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: bold;
}

</style>

<template>
    <button
    @click="$emit('click')"
    >
        {{ text }}
    </button>
</template>
