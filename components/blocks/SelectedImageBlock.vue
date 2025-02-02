<template>
    <div 
        class="w-full flex justify-center items-center border relative border-dark-gray max-h-40 group select-none">
        <div class="absolute size-full bg-black-50 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity flex justify-center items-center">
            <NuxtIcon name="solar:trash-bin-2-linear" mode="svg" class="text-blue-gray-ultra-light absolute right-1 top-1" size="1.5rem" />
            <NuxtIcon name="solar:square-sort-horizontal-linear" mode="svg" class="text-blue-gray-ultra-light" size="5rem"/>
        </div>
        <img :src="image.url" :alt="image.alt" class="size-full object-cover">
    </div>
</template>

<script setup>
    defineProps(['image']);
</script>