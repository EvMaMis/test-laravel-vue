<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand">Zoho Panel</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link active">Main</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/accounts" class="nav-link">Accounts</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/deals" class="nav-link">Deals</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <RouterView/>
    </main>
</template>

<style scoped>

</style>
