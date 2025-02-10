<template>
    <section class="px-3 sm:px-5 md:px-10 lg:px-20">
        <div class="bg-blue-gray" v-for="category in categories">
            <h1 class="p-2">{{ category.title }}</h1>

            <div class="bg-blue-gray-light pl-5" v-for="subcategory in category.subcategories">
                <h2 class="p-2">{{ subcategory.title }}</h2>
            </div>
        </div>
    </section>
</template>

<script setup>
    const { categories } = useStore();
</script>