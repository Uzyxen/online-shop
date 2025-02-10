<template>
    <div class="border-2 border-blue-gray bg-light-gray max-w-96 flex gap-2 p-2 items-center" @click="isOpen = true">
        <div v-for="(item, index) in selectedItems.slice(0, 3)" :key="index">
            <p class="bg-blue-30 p-2 rounded-sm flex justify-center">{{ item.value }}</p>
        </div>
        
        <span class="bg-mid-gray p-2 w-min-10 rounded-sm"><span v-if="selectedItems.length > 3">+</span>{{ selectedItems.length > 3 ? selectedItems.length - 3 : "Brak" }}</span>
    </div>

    <Teleport to="#teleports">
        <Transition>
            <div v-if="isOpen" class="fixed w-[750px] h-[600px] bg-light-gray shadow-md border border-blue-gray left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-2">
                <NuxtIcon name="solar:arrow-left-linear" size="2rem" mode="svg" @click="isOpen = false" class="cursor-pointer" />

                <div class="flex p-2 gap-3 items-center">
                    <SingleSelectBox :items="items" 
                    :custom-value="true"
                    @select-item="(item) => { newItem.key = item }"/>
                    <NuxtIcon name="solar:arrow-right-linear"/>
                    <input type="text" class="p-1.5 border-2 border-blue-gray outline-none" v-model="newItem.value" @keypress.enter="addItem()" placeholder="wartość" />
                </div>

                <hr class="border-none h-px bg-gray my-3 mx-2">
                <div>
                    <ul v-if="selectedItems.length > 0">
                        <li v-for="(item, index) in selectedItems" :key="index" class="p-2 flex gap-3 items-center">
                            <input type="text" v-model="item.key" class="flex-1 p-1.5 border-2 border-blue-gray outline-none">
                            <NuxtIcon name="solar:arrow-right-linear"/>
                            <input type="text" v-model="item.value" class="p-1.5 border-2 border-blue-gray outline-none">
                        </li>
                    </ul>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
    const props = defineProps(['subcategoryId']);

    const items = ref([]);
    watchEffect(async () => {
        const data = await $fetch(`/api/properties/${props.subcategoryId}`);
        items.value = data.map(item => ({ title: item.property.name }));
    });

    const isOpen = ref(false);

    const selectedItems = ref([]);

    const newItem = ref({ key: '', value: '' });
    function addItem() {
        if(newItem.value.key !== '' && newItem.value.value !== '') {
            selectedItems.value.push({ key: newItem.value.key, value: newItem.value.value });
            newItem.value = { key: '', value: '' };
        }
    }
</script>

<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
        transform: translate(-50%, -50%) scale(0.9);
        opacity: 0;
    }
</style>