<template>
    <div class="w-full flex justify-center items-center border border-dark-gray max-h-40">
        <img :src="image.url" :alt="image.alt" class="size-full object-cover">
    </div>
</template>

<script setup>
    defineProps(['image']);
</script>