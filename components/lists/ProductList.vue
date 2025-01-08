<template>
    <div class="flex flex-col w-full gap-3">
        <div class="p-2" v-if="isEditModeEnabled">
            <button>
                Tryb edycji
            </button>
        </div>

        <ProductBlock v-for="product in products" :key="product.id" :product="product" />

        <PaginationButtons @page-change="(offset) => { $emit('pageChange', offset) }" />
    </div>
</template>

<script setup>
    defineProps(['products', 'isEditModeEnabled']);
</script>