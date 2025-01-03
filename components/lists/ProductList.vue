<template>
    <div class="flex flex-col px-20 mt-8 gap-3">
        <ProductBlock v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
    defineProps(['products']);
</script>