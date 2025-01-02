<template>
    <div class="border-2 border-gray p-5 h-52">
        <NuxtLink :to="'/kategorie/' + category.title" class="block size-full">
            <h1>{{ category.title }}</h1>
        </NuxtLink>
    </div>
</template>

<script setup>
    defineProps(['category']);
</script>
