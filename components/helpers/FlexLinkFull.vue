<template>
    <NuxtLink :to="link" class="flex size-full justify-center items-center">
        <slot />
    </NuxtLink>
</template>

<script setup>
    defineProps(['link']);
</script>