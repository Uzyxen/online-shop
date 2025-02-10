<template>
    <section class="px-3 sm:px-5 md:px-10 lg:px-20">
        <div class="border border-blue-gray border-t-0 first:border-t hover:bg-blue-gray-light cursor-pointer" v-for="(category, index) in categories" @click="isCollapsed[index] = !isCollapsed[index]">
            <div class="p-2 flex justify-between items-center">
                <h1>{{ category.title }}</h1>

                <NuxtIcon name="solar:alt-arrow-down-linear" mode="svg" size="2rem" :class="{ 'rotate-180': isCollapsed[index] === true }" />
            </div>

            <div v-show="isCollapsed[index] === true" class="bg-blue-gray-light" v-for="subcategory in category.subcategories">
                <h2 class="p-3 pl-5 hover:underline cursor-pointer">{{ subcategory.title }}</h2>
            </div>
        </div>
    </section>
</template>

<script setup>
    const { categories } = useStore();
    const isCollapsed = ref([]);

    onMounted(() => {
        categories.value.forEach(() => {
            isCollapsed.value.push(false);
        });
    });
</script>