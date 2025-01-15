<template>
    <div class="flex flex-col gap-3">
        <p class="text-base font-semibold text-black">{{ caption }}</p>
        <input 
            :type="type"
            v-model="model" 
            :maxlength="maxLength"
            class="w-full p-2.5 bg-light-gray border-2 border-blue-gray outline-none"/>
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