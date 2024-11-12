<template>
    <div class="flex flex-col items-center gap-1.5 hover:underline hover:cursor-pointer">
        <NuxtIcon :name="iconName" size="1.8rem"/>

        <span class="text-sm">
            <slot />
        </span>
    </div>
</template>

<script setup>
    defineProps(['iconName']);
</script>