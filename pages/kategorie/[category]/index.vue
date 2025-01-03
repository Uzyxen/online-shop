<template>
    <div>        
        <h2>
            <ul class="grid gap-2 mt-4 px-20 grid-cols-5">
                <li v-for="subCategory in subCategories" :key="subCategory.id" class="border-2 border-gray p-5 h-52">
                    <NuxtLink :to="`/kategorie/${$route.params.category}/${subCategory.title}`" class="block size-full">
                        <h1>{{ subCategory.title }}</h1>
                    </NuxtLink>
                </li>
            </ul>
        </h2>
    </div>
</template>

<script setup>
    const route = useRoute();

    const { data: subCategories } = await useFetch('/api/subcategories/subcategories', {
        body: {
            name: route.params.category 
        },
        method: 'POST'
    });
</script>