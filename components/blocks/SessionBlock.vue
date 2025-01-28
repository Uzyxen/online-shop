<template>
    <div class="border border-t-0 border-blue-gray p-2 flex first:border-t">
        <h1 class="flex-1">{{ session.createdAt }}</h1>

        <button>Wyloguj</button>
    </div>
</template>

<script setup>
    defineProps(['session']);
</script>