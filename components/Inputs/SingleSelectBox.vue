<template>
    <div class="bg-light-gray border-2 border-blue-gray flex-1 p-1.5 relative" @click="itemsVisible = !itemsVisible">
        <div class="flex w-full justify-between items-center">
            <span>{{ displayItem() }}</span>
        </div>

        <ul v-if="itemsVisible" class="absolute bg-light-gray border-2 border-blue-gray border-t-0 w-[calc(100%+4px)] -left-[2px] top-full shadow-sm">
            <li class="hover:bg-gray cursor-pointer" @click.stop="" v-if="customValue === true">
                <input type="text" v-model="newCustomItem" placeholder="Wpisz własne..." class="size-full p-2 bg-light-gray outline-none border-b border-t border-gray" @keypress.enter="submitCustomItem()">
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

    function displayItem() {
        if(selectedIndex.value !== null) {
            return props.items[selectedIndex.value].title;
        } else if(submittedItem.value !== '') {
            return submittedItem.value;
        } else {
            return 'Wybierz';
        }
    }

    const newCustomItem = ref('');
    const submittedItem = ref('');
    function submitCustomItem() {
        if(props.customValue) {
            itemsVisible.value = false;
            selectedIndex.value = null;
            submittedItem.value = newCustomItem.value;
            newCustomItem.value = '';

            emit('selectItem', submittedItem.value);
        }
    }
</script>