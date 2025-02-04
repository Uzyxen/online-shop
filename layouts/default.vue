<template>
    <AdminBlock v-if="isUserAdmin" />

    <Header />

    <main class="max-w-8xl mx-auto">
        <BreadCrumbs />
        
        <slot />
    </main>

    <!-- place for Footer -->
     
</template>

<script setup>
    const { isAdmin } = useStore();
    const isUserAdmin = isAdmin().value;
</script>