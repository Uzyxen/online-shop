<template>
    <div class="flex flex-col w-full gap-3">
        <div class="p-2" v-if="isEditModeEnabled">
            <button>
                Tryb edycji
            </button>
        </div>

        <ProductBlock v-for="product in products" :key="product.id" :product="product" />

        <PaginationButtons
            :count="numberOfProducts.count"
            :products-per-page="20"
            @page-change="(offset) => { $emit('pageChange', offset) }" />
    </div>
</template>

<script setup>
    defineProps(['products', 'isEditModeEnabled']);

    const { data: numberOfProducts } = await useFetch('/api/products/count', {
        method: 'POST'
    });
</script>