<template>
    <div class="h-10 flex relative">
        <input 
            type="search" 
            placeholder="Wyszukaj..." 
            class="outline-none h-full text-sm border-dark-gray border-2 border-r-0 bg-light-gray w-[450px] px-2 focus:border-blue"
            v-model="searchValue"
            @keyup="search">

        <button class="bg-blue text-light-gray h-full px-2 flex items-center justify-center">
            <NuxtIcon name="mol-icon:forward" size="1.7rem" />
        </button>

        <div class="w-full h-fit bg-light-gray shadow-md absolute left-0 top-full z-50 flex flex-col gap-3 p-3" v-if="searchValue != ''">
            <ul v-if="response.products.length > 0">
                <h1 class="text-base font-semibold">Produkty</h1>

                <li v-for="product in response.products" class="pl-3 p-2 hover:bg-mid-gray cursor-pointer text-base">
                    {{ product.title }}
                </li>
            </ul>

            <hr class="border-none h-px bg-dark-gray">

            <ul v-if="response.categories.length > 0">
                <h1 class="text-base font-semibold">Kategorie</h1>

                <li v-for="category in response.categories" class="pl-3 p-2 hover:bg-mid-gray cursor-pointer text-base">
                    {{ category.title }}
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
                body: {
                    value: searchValue.value
                },
                method: 'POST'
            });
        }
    }
</script>