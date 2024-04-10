<script setup>
import {ref} from 'vue';

const response = ref();

const getValue = async () => {
    try {
        response.value = await axios.get('/api/test-me')
    } catch(error) {
        console.log(error)
    }
}

</script>

<template>
    <div>Test view</div>
    <button @click.prevent="getValue">Test</button>
    <p v-if="response">Key: {{response.data}}</p>
</template>

<style scoped>

</style>
