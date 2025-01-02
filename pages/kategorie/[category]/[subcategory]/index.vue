<template>
    <div class="flex flex-col px-20 mt-8">
        <ProductBlock v-for="product in products" :key="product.id" :product="product" />
    </div>
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