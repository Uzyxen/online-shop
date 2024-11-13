<template>
    <div class="flex flex-col gap-3">
        <p class="text-base font-semibold">{{ caption }}</p>
        <input :type="type" class="w-[600px] p-3 bg-gray outline-none" v-model="model">
    </div>
</template>

<script setup>
    const model = defineModel();

    defineProps({
        caption: String,
        type: String
    })
</script>