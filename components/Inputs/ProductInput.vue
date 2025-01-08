<template>
    <div class="flex flex-col gap-3">
        <p class="text-base font-semibold">{{ caption }}</p>
        <input 
            :type="type"
            v-model="model" 
            :maxlength="maxLength"
            class="w-full p-2.5 bg-mid-gray outline-none"/>
    </div>
</template>

<script setup>
    const model = defineModel();

    const props = defineProps({
        caption: String,
        type: String,
        maxLength: Number
    })
</script>