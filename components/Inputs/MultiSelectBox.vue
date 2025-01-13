<template>
    <div class="border border-gray max-w-96 flex gap-2 p-2 items-center" @click="isOpen = true">
        <div v-for="(item, index) in selectedItems.slice(0, 3)" :key="index">
            <p class="bg-blue-30 p-2 rounded-sm flex justify-center">{{ item.value }}</p>
        </div>

        <span class="bg-mid-gray p-2 w-10 rounded-sm">+{{ selectedItems.length - 3 }}</span>
    </div>

    <Teleport to="#teleports">
        <div v-if="isOpen" class="fixed w-[750px] h-[600px] bg-mid-gray shadow-md left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-2">
            <div class="flex p-2 gap-3 items-center">
                <SingleSelectBox :items="[
                    { title: 'Taktowanie procesora' },
                    { title: 'Pamięć RAM' },
                    { title: 'Pamięć wewnętrzna' },
                    { title: 'Karta graficzna' },
                    { title: 'Rozdzielczość' },
                    { title: 'Typ matrycy' },
                    { title: 'Czas reakcji' },
                    { title: 'Kąt widzenia' },
                    { title: 'Złącza' }
                ]" @select-item="(item) => { newItem.key = item }"/>
                <NuxtIcon name="solar:arrow-right-linear"/>
                <input type="text" class="p-1.5" v-model="newItem.value" @keypress.enter="addItem()" />
            </div>

            <hr class="border-none h-px bg-gray my-3 mx-2">

            <div>
                <ul>
                    <li v-for="(item, index) in selectedItems" :key="index" class="p-2 flex gap-3 items-center">
                        <input type="text" v-model="item.key" class="flex-1 p-1.5">
                        <NuxtIcon name="solar:arrow-right-linear"/>
                        <input type="text" v-model="item.value" class="p-1.5">
                    </li>
                </ul>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
    const isOpen = ref(false);

    const selectedItems = ref([

    ]);

    const newItem = ref({ key: '', value: '' });
    function addItem() {
        selectedItems.value.push({ key: newItem.value.key, value: newItem.value.value });

        newItem.value = { key: '', value: '' };
    }
</script>