<template>
    <div class="h-10 hidden md:flex relative flex-1 xl:flex-grow-0">
        <input 
            type="search" 
            placeholder="Wyszukaj..." 
            class="outline-none h-full text-sm border-blue-gray border-2 border-r-0 bg-light-gray w-full xl:w-[400px] 2xl:w-[450px] px-2 focus:border-blue"
            v-model="searchValue"
            @keyup="search">

        <button class="bg-blue text-light-gray h-full px-2 flex items-center justify-center">
            <NuxtIcon name="solar:forward-line-duotone" size="1.7rem" />
        </button>

        <div class="w-full h-fit bg-light-gray shadow-md absolute left-0 top-full z-50 flex flex-col gap-3 p-3" v-if="searchValue != '' && response">
            <ul v-if="response.products.length > 0">
                <h1 class="text-base font-semibold">Produkty</h1>

                <li v-for="product in response.products" class="hover:bg-mid-gray cursor-pointer text-base flex justify-between">
                    <NuxtLink :to="`/produkty/${product.url}`" class="pl-3 p-2 size-full flex justify-between">
                        <span>{{ product.title }}</span>

                        <NuxtIcon name="solar:alt-arrow-right-linear" size="1.5rem"/>
                    </NuxtLink>
                </li>
            </ul>

            <hr class="border-none h-px bg-dark-gray" v-if="response.products.length > 0 && response.categories.length > 0">

            <ul v-if="response.categories.length > 0">
                <h1 class="text-base font-semibold">Kategorie</h1>

                <li v-for="category in response.categories" class="hover:bg-mid-gray cursor-pointer text-base">
                    <NuxtLink :to="`/kategorie/${category.title}`" class="pl-3 p-2 size-full flex justify-between">
                        <span>{{ category.title }}</span>

                        <NuxtIcon name="solar:alt-arrow-right-linear" size="1.5rem"/>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const searchValue = ref();
    const response = ref();
    
    async function search() {
        if(searchValue.value.length > 0) {
            response.value = await $fetch('/api/search/suggestions', {
                query: {
                    value: searchValue.value
                }
            });
        }
    }
</script>