<template>
    <AdminBlock v-if="isUserAdmin" />

    <Header />

    <main>
        <!-- <BreadCrumbs /> -->
        
        <slot />
    </main>

    <!-- place for Footer -->
     
</template>

<script setup>
    const { isAdmin } = useStore();
    const isUserAdmin = isAdmin().value;
</script>