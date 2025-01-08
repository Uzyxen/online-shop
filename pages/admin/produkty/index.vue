<template>
    <div class="mx-20">
        <ProductList :products="products" :is-edit-mode-enabled="true" />
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth-admin'
    });

    const { data: products } = await useFetch('/api/products/products', {
        method: 'post'
    });

</script>