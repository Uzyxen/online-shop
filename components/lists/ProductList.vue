<template>
    <div class="flex flex-col w-full gap-3">
        <ProductBlock v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
    defineProps(['products']);
</script>