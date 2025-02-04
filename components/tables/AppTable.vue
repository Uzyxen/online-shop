<template>
    <div class="border border-gray">
        <div class="grid grid-cols-4">
            <div v-for="header in headers" class="text-center font-medium border-b border-r last:border-r-0 border-gray p-2">{{ header }}</div>
        </div>
        <div class="flex flex-col">
            <slot />
        </div>
    </div>
</template>

<script setup>
    defineProps(['headers']);
</script>