<template>
    <ProductList :products="products" />
</template>

<script setup>
    const route = useRoute();

    const { data: products } = await useFetch('/api/products/productsFromSubCategory', {
        body: {
            name: route.params.subcategory
        },
        method: 'POST'
    });
</script>