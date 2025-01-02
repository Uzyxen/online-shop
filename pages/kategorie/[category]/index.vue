<template>
    <div>
        {{ $route.params.category }}
        
        <h2>
            <ul>
                <li v-for="subCategory in subCategories" :key="subCategory.id" class="p-3 bg-gray">
                    <NuxtLink :to="`/kategorie/${$route.params.category}/${subCategory.title}`">
                        {{ subCategory.title }}
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

    console.log(subCategories);
</script>