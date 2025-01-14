<template>
    <div class="bg-light-gray flex-1 p-1.5 relative" @click="itemsVisible = !itemsVisible">
        <div class="flex w-full justify-between items-center">
            <span>{{ selectedIndex !== null ? items[selectedIndex].title : 'Wybierz' }}</span>
        </div>

        <ul v-if="itemsVisible" class="absolute bg-light-gray w-full left-0 top-full shadow-sm">
            <li class="hover:bg-gray cursor-pointer" @click.stop="">
                <input type="text" v-model="newCustomItem" placeholder="Wpisz własne..." class="size-full p-2 bg-light-gray outline-none border-b border-gray" @keypress.enter="submitCustomItem()">
            </li>
            <li v-for="(item, index) in items" :key="index" class="p-2 hover:bg-gray cursor-pointer" @click.stop="selectItem(index)">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['items', 'customValue']);
    const emit = defineEmits('selectItem');

    const itemsVisible = ref(false);

    const selectedIndex = ref(null);
    async function selectItem(index) {
        selectedIndex.value = index;
        itemsVisible.value = false;

        emit('selectItem', props.items[index].title);
    }

    const newCustomItem = ref('');
    function submitCustomItem() {
        if(props.customValue) {

        }
    }
</script>