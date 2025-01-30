<template>
    <div>
        
    </div>
</template>

<script setup>
    const route = useRoute();

    const { data: product } = await useLazyFetch(`/api/products/${route}`)
</script>