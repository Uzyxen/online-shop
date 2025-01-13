<template>
    <div class="border border-gray max-w-96 flex gap-2 p-2 items-center" @click="isOpen = true">
        <div v-for="(item, index) in selectedItems.slice(0, 3)" :key="index">
            <p class="bg-blue-30 p-2 rounded-sm flex justify-center">{{ item.value }}</p>
        </div>

        <span class="bg-mid-gray p-2 w-10 rounded-sm">+{{ selectedItems.length - 3 }}</span>
    </div>

    <Teleport to="#teleports">
        <div v-if="isOpen" class="fixed w-[600px] h-[600px] bg-mid-gray shadow-md left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <input type="text" class="w-full" />

            <div>
                <ul>
                    <li v-for="(item, index) in selectedItems" :key="index" class="p-2 flex gap-3 items-center">
                        <input type="text" v-model="item.key" class="flex-1 p-1">
                        <NuxtIcon name="solar:arrow-right-linear" />
                        <input type="text" v-model="item.value" class="p-1">
                    </li>
                </ul>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
    const selectedItems = ref([
        { key: 'Taktowanie procesora', value: '5Ghz' },
        { key: 'Pamięć RAM', value: '16GB' },
        { key: 'Pamięć wewnętrzna', value: '512GB' },
        { key: 'Karta graficzna', value: 'RTX 3080' },
        { key: 'Rozdzielczość', value: '1920x1080' },
        { key: 'Typ matrycy', value: 'IPS' },
        { key: 'Czas reakcji', value: '1ms' },
        { key: 'Kąt widzenia', value: '178°' },
        { key: 'Złącza', value: 'HDMI, DisplayPort' },
        { key: 'Waga', value: '2.5kg' },
        { key: 'Wymiary', value: '400x300x20mm' },
    ]);

    const isOpen = ref(false);
</script>