<template>
    <div class="border-2 border-gray p-5 h-52">
        <h1>{{ category.title }}</h1>
    </div>
</template>

<script setup>
    defineProps(['category']);
</script>
