<template>
    <div class="bg-light-gray border-2 border-blue-gray w-full p-2.5 relative text-black" @click="itemsVisible = !itemsVisible">
        <div class="flex w-full justify-between items-center">
            <span>{{ selectedIndex !== null ? items[selectedIndex].title : 'Wybierz' }} {{ selectedSubItem !== null ? ' / ' + subItems[selectedSubItem].title : '' }}</span>
            <NuxtIcon v-if="selectedIndex !== null" name="solar:arrow-left-linear" size="1.5rem" mode="svg" @click.stop="selectedIndex = null; selectedSubItem = null; itemsToDisplay = items" />
        </div>

        <ul v-if="itemsVisible" class="absolute bg-light-gray w-[calc(100%+4px)] border-2 border-[#DDD] border-t-0 -left-[2px] top-full shadow-sm">
            <li v-for="(item, index) in itemsToDisplay" :key="item.id" class="p-2 hover:bg-gray cursor-pointer" @click.stop="selectItem(index)">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['endpoint', 'subEndpoint']);

    const itemsToDisplay = ref([]);

    const { data: items } = await useFetch(props.endpoint, {
        method: 'post'
    });

    itemsToDisplay.value = items.value;

    const subItems = ref([]);
    const itemsVisible = ref(false);
    const selectedIndex = ref(null);
    const selectedSubItem = ref(null);

    async function selectItem(index) {
        if(selectedIndex.value === null) {
            selectedIndex.value = index;
        
            subItems.value = await $fetch(props.subEndpoint, {
                method: 'post',
                body: {
                    name: items.value[index].title
                }
            });

            itemsToDisplay.value = subItems.value;
        } else {
            selectSubItem(index);
        }
    }

    async function selectSubItem(index) {        
        selectedSubItem.value = index;
        itemsVisible.value = false;
    }

</script>