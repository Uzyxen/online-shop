<template>
    <div 
        class="w-full flex justify-center items-center border relative border-dark-gray max-h-40 group">
        <div class="absolute size-full bg-black-50 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity"></div>
        <img :src="image.url" :alt="image.alt" class="size-full object-cover">
    </div>
</template>

<script setup>
    defineProps(['image']);
</script>