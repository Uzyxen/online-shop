<template>
    <div class="mb-20 flex gap-5 self-center mt-10 items-center">
        <button @click="index--; pageChange()" class="h-fit" v-if="index > 1"><NuxtIcon name="solar:alt-arrow-left-linear" size="2rem" /></button>

        <div class="flex gap-3">
            <button 
                v-for="i in 3"
                :key="i" 
                class="border border-blue p-1 w-10" 
                :class="{ 'bg-blue text-[#FFF]': index === i }"
                @click="index = i; pageChange()">{{ i }}</button>

            <input type="text" v-model="index" class="border-b border-dark-gray w-10 text-center p-1" @blur="pageChange()" />

            <button class="border border-blue p-1 w-10" :class="{ 'bg-blue text-[#FFF]': index === pages }" @click="index = pages">
                {{ pages }}
            </button>
        </div>

        <button @click="index++; pageChange()"><NuxtIcon name="solar:alt-arrow-right-linear" size="2rem" /></button>
    </div>
</template>

<script setup>
    defineProps(['pages']);
    const emit = defineEmits(['pageChange']);

    const index = ref(1);
    function pageChange() {
        emit('pageChange', (index.value -1) * 20);
    }
</script>