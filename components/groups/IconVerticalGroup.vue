<template>
    <div class="flex flex-col items-center gap-1.5 hover:underline hover:cursor-pointer">
        <NuxtIcon :name="iconName" size="1.5rem" mode="svg" class="text-black"/>

        <span class="text-xs xl:text-sm text-black">
            <slot />
        </span>
    </div>
</template>

<script setup>
    defineProps(['iconName']);
</script>