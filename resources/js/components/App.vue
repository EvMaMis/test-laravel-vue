<script setup>

</script>

<template>
    <h1 class="text-center">Hello App!</h1>
    <nav class="d-flex justify-content-between">
        <RouterLink to="/deals">Go to Deals</RouterLink>
        <RouterLink to="/accounts">Go to Accounts</RouterLink>
    </nav>
    <main>
        <RouterView/>
    </main>
</template>

<style scoped>

</style>
