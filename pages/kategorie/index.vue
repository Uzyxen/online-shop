<template>
    <div class="grid gap-2 mt-4 px-20 grid-cols-5">
        <CategoryBlock v-for="(category, index) in categories" :category="category" :key="index" />
    </div>
</template>

<script setup>
    const { data: categories } = await useFetch('/api/categories/categories');
</script>