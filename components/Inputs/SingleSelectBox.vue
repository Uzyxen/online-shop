<template>
    <div class="bg-light-gray flex-1 p-1.5 relative" @click="itemsVisible = !itemsVisible">
        <div class="flex w-full justify-between items-center">
            <span>{{ selectedIndex !== null ? items[selectedIndex].title : 'Wybierz' }}</span>
        </div>

        <ul v-if="itemsVisible" class="absolute bg-light-gray w-full left-0 top-full shadow-sm">
            <li v-for="(item, index) in items" :key="index" class="p-2 hover:bg-gray cursor-pointer" @click.stop="selectItem(index)">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['items']);
    const emit = defineEmits('selectItem');

    const itemsVisible = ref(false);

    const selectedIndex = ref(null);
    async function selectItem(index) {
        selectedIndex.value = index;
        itemsVisible.value = false;

        emit('selectItem', props.items[index].title);
    }
</script>