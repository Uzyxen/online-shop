<template>
    <div 
        class="w-full flex justify-center items-center border relative
        border-dark-gray max-h-40 after:content-[''] after:bg-black-50 after:absolute after:size-full">
        <img :src="image.url" :alt="image.alt" class="size-full object-cover">
    </div>
</template>

<script setup>
    defineProps(['image']);
</script>