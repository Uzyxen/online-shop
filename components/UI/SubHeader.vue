<template>
    <div class="border-b-2 border-blue-gray h-12 hidden lg:block">
        <ul class="px-8 2xl:px-20 flex gap-32 text-sm relative max-w-8xl mx-auto h-full">
            <li class="w-64 group text-center text-black">
                <div
                    class="size-full block py-3 border-r-[1px] border-l-[1px] border-blue-gray" 
                    to="/kategorie">

                    Kategorie

                    <div class="flex w-fit absolute top-full left-0 shadow-md rounded-b-sm z-50 mx-20">
                        <div
                            class="w-64 rounded-bl-sm text-left border-[1px] border-t-0 bg-light-gray border-blue-gray hidden group-hover:block cursor-default">
                            <ul>
                                <li @mouseover="subcategories = category.subcategories" v-for="category in categories" class="cursor-pointer hover:text-blue text-sm font-medium relative">
                                    <NuxtLink :to="`/kategorie/${category.url}`" class="block size-full p-3">
                                        {{ category.title }}
                                    </NuxtLink> 
                                </li>
                            </ul>
                        </div>
                        <div class="w-96 rounded-br-sm bg-light-gray border-[1px] border-gray border-l-0 cursor-default hidden group-hover:block overflow-hidden">
                            <ul class="flex flex-col items-start gap-3 p-3">
                                <li v-for="subcategory in subcategories" class="text-sm">{{ subcategory.title }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>

            <li class="w-64 text-center text-black" v-for="link in links">
                <NuxtLink class="size-full block py-3 whitespace-nowrap" :to="link.path">
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const { categories } = useStore();
    const subcategories = ref([]);

    const links = [
        { label: 'Konfigurator PC', path: '/konfigurator' },
        { label: 'Promocje', path: '/promocje' }
    ]

</script>