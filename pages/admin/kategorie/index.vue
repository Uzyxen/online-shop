<template>
    <section class="px-3 sm:px-5 md:px-10 lg:px-20 flex gap-8">
        <div class="w-1/2">
            <div v-for="(category, index) in categories" @click="isCollapsed[index] = !isCollapsed[index]" :key="category.id" class="border border-blue-gray border-t-0 first:border-t hover:bg-blue-gray-light cursor-pointer select-none">
                <div class="p-2 flex justify-between items-center">
                    <h1>{{ category.title }}</h1>

                    <NuxtIcon name="solar:alt-arrow-down-linear" mode="svg" size="2rem" :class="{ 'rotate-180': isCollapsed[index] === true }" />
                </div>

                <div 
                    v-for="subcategory in category.subcategories"
                    :key="subcategory.id" v-show="isCollapsed[index] === true" 
                    @click.stop="fetchProperties(subcategory.id)"
                    class="hover:bg-blue-gray-20 border-t border-blue-gray flex items-center gap-1 pl-5 relative before:content-[''] before:absolute before:-left-[1px] before:h-[calc(100%+2px)] before:w-2 before:bg-blue">
                    <NuxtIcon name="solar:forward-2-linear" mode="svg" size="1.2rem" />
                    <h2 class="p-3 hover:underline cursor-pointer">{{ subcategory.title }}</h2>
                </div>
            </div>
        </div>

        <div class="w-1/2">
            <h1 class="text-lg">Właściwości wybranej kategorii</h1>

            <div class="mt-5">
                <div v-for="property in properties" class="border border-gray p-2 border-t-0 first:border-t">{{ property.property.name }}</div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const { categories } = useStore();
    const isCollapsed = ref([]);
    const properties = ref([]);

    onMounted(() => {
        categories.value.forEach(() => {
            isCollapsed.value.push(false);
        });
    });

    const fetchProperties = async (id) => {
        properties.value = await $fetch(`/api/properties/${id}`);
    };
</script>