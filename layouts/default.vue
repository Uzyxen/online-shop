<template>
    <AdminBlock v-if="isAdmin" />

    <Header />

    <main>
        <!-- <BreadCrumbs /> -->
        
        <slot />
    </main>

    <!-- place for Footer -->
     
</template>

<script setup>
    const isAdmin = ref(true);
</script>