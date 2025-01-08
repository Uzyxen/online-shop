<template>
    <div class="bg-mid-gray w-full p-2.5 relative" @click="itemsVisible = !itemsVisible">
        <div class="flex w-full justify-between items-center">
            <span>{{ selectedIndex !== null ? items[selectedIndex].title : 'Wybierz' }} {{ selectedSubItem !== null ? ' / ' + subItems[selectedSubItem].title : '' }}</span>
            <NuxtIcon v-if="selectedIndex !== null" name="solar:arrow-left-linear" size="1.5rem" mode="svg" @click.stop="selectedIndex = null; selectedSubItem = null" />
        </div>

        <ul v-if="itemsVisible" class="absolute bg-mid-gray w-full left-0 top-full shadow-sm">
            <li v-if="selectedIndex === null" v-for="(item, index) in items" :key="item.id" class="p-2 hover:bg-gray cursor-pointer" @click.stop="selectItem(index)">{{ item.title }}</li>
            <li v-else v-for="(subItem, index) in subItems" :key="subItem.id" class="p-2 hover:bg-gray cursor-pointer" @click.stop="selectSubItem(index)">{{ subItem.title }}</li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['endpoint']);

    const { data: items } = await useFetch(props.endpoint, {
        method: 'post'
    });

    const subItems = ref([]);

    const itemsVisible = ref(false);
    const selectedIndex = ref(null);
    const selectedSubItem = ref(null);

    async function selectItem(index) {        
        selectedIndex.value = index;
        
        subItems.value = await $fetch('/api/subcategories/subcategories', {
            method: 'post',
            body: {
                name: items.value[index].title
            }
        });
    }

    async function selectSubItem(index) {        
        selectedSubItem.value = index;
        itemsVisible.value = false;
    }

</script>