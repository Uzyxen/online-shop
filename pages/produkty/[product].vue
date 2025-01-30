<template>
    <section>
        {{ product }}
    </section>
</template>

<script setup>
    const route = useRoute();

    const { data: product } = await useFetch(`/api/products/${route.params.product}`);
</script>