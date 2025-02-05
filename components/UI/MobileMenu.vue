<template>
    <div class="fixed top-0 left-0 z-40 w-full h-screen bg-blue-gray-ultra-light" v-if="isUserMenuVisible">
        <NuxtIcon @click="$emit('close')" name="solar:arrow-left-linear" mode="svg" size="3rem" class="absolute left-2 top-3" />
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        isUserMenuVisible: boolean;
    }>();
</script>