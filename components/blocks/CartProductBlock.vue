<template>
    <div class="border border-blue-gray flex gap-2 mt-1">
        <div class="h-16 w-16 p-2">
            <img :src="product.image" class="size-full object-contain">
        </div>

        <div class="flex flex-col pb-1">
            <h1 class="flex-1">{{ product.title }}</h1>
            <h2 class="text-sm">{{ product.quantity }} szt</h2>
        </div>
    </div>
</template>

<script setup>
    defineProps(['product']);
</script>