<template>
    <div class="border-b-2 border-gray">
        <ul class="mx-20 flex gap-32 text-sm relative">
            <li class="w-64 group text-center text-black">
                <div
                    class="size-full block py-4 border-r-[1px] border-l-[1px] border-gray" 
                    to="/kategorie">

                    Kategorie

                    <div class="flex w-full absolute top-full left-0 shadow-md rounded-b-sm z-50">
                        <div
                            class="w-64 rounded-bl-sm text-left border-[1px] border-t-0 bg-light-gray border-gray hidden group-hover:block cursor-default">
                            <ul>
                                <li v-for="category in categories" class="cursor-pointer hover:text-blue text-sm font-semibold relative">
                                    <NuxtLink :to="`/kategorie/${category.title}`" class="block size-full p-3">
                                        {{ category.title }}
                                    </NuxtLink> 
                                </li>
                            </ul>
                        </div>
                        <div class="w-[calc(100%-256px)] rounded-br-sm bg-light-gray border-[1px] border-gray border-l-0 cursor-default hidden group-hover:block overflow-hidden">
                            
                        </div>
                    </div>
                </div>
            </li>

            <li class="w-64 text-center text-black" v-for="link in links">
                <NuxtLink class="size-full block py-4" :to="link.path">
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const links = [
        { label: 'Konfigurator PC', path: '/konfigurator' }
    ]

    const { data: categories } = await useFetch('/api/categories/categories', {
        method: 'POST'
    });
</script>