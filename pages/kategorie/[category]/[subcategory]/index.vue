<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <div class="flex mx-20 mt-8 gap-3" v-else>
        <Filters />

        <div class="flex flex-col gap-3 w-full">
            <Sort />
            <ProductList :products="products" />
        </div>
    </div>
</template>

<script setup>
    const route = useRoute();

    const { status, data: products } = await useLazyFetch('/api/products/productsFromSubCategory', {
        body: {
            name: route.params.subcategory
        },
        method: 'POST'
    });
</script>