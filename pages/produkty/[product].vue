<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section v-else>
        {{ product }}
    </section>
</template>

<script setup>
    const route = useRoute();

    const { status, data: product } = await useLazyFetch(`/api/products/${route.params.product}`);
</script>