<template>
    <button class="bg-blue w-36 h-10 text-light-gray rounded-sm" :disabled="loading">
        <div class="size-full left-0 top-0 bg-black-10 flex justify-center items-center z-50" v-if="loading === true">
            <div class="w-7 h-7 border-4 border-t-gray border-blue rounded-full animate-spin"></div>
        </div>
        <slot v-else />
    </button>
</template>

<script setup>
    defineProps(['loading']);
</script>