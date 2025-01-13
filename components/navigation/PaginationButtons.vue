<template>
    <div class="mb-20 flex gap-5 self-center mt-10 items-center">
        <button @click="index--; pageChange()" class="h-fit" v-if="index > 1"><NuxtIcon name="solar:alt-arrow-left-linear" size="2rem" /></button>

        <div class="flex gap-3">
            <button class="border border-blue p-1 w-10" @click="index--; pageChange()" v-if="index > 1">{{ index - 1 }}</button>
            <button class="border border-blue bg-blue text-[#FFF] p-1 w-10" v-if="index < pages">{{ index }}</button>
            <button class="border border-blue p-1 w-10" @click="index++; pageChange()" v-if="index + 1 < pages">{{ index + 1 }}</button>

            <input 
                type="text" 
                v-model.number="customPage" 
                class="border-b border-dark-gray w-10 text-center p-1" 
                @blur="setCustomPage()"
                @keypress.enter="setCustomPage()" />

            <button class="border border-blue p-1 w-10" :class="{ 'bg-blue text-[#FFF]': index === pages }" @click="index = pages">
                {{ pages }}
            </button>
        </div>

        <button @click="index++; pageChange()" v-if="index < pages"><NuxtIcon name="solar:alt-arrow-right-linear" size="2rem" /></button>
    </div>
</template>

<script setup>
    const props = defineProps(['count', 'productsPerPage']);
    const emit = defineEmits(['pageChange']);

    const pages = Math.ceil(props.count / props.productsPerPage);

    const index = ref(1);
    function pageChange() {
        emit('pageChange', (index.value -1) * 20);
    }

    const customPage = ref(null);
    function setCustomPage() {
        if(customPage.value > 0 && customPage.value <= pages) {
            index.value = customPage.value;
            pageChange();
        }

        customPage.value = null;
    }
</script>