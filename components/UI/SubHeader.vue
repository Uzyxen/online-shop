<template>
    <div class="border-b-2 border-blue-gray h-12">
        <ul class="px-20 flex gap-32 text-sm relative max-w-8xl mx-auto">
            <li class="w-64 group text-center text-black">
                <div
                    class="size-full block py-3 border-r-[1px] border-l-[1px] border-blue-gray" 
                    to="/kategorie">

                    Kategorie

                    <div class="flex w-[calc(100%-10rem)] absolute top-full left-0 shadow-md rounded-b-sm z-50 mx-20">
                        <div
                            class="w-64 rounded-bl-sm text-left border-[1px] border-t-0 bg-light-gray border-blue-gray hidden group-hover:block cursor-default">
                            <ul>
                                <li v-for="category in categories" class="cursor-pointer hover:text-blue text-sm font-medium relative">
                                    <NuxtLink :to="`/kategorie/${category.url}`" class="block size-full p-3">
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
                <NuxtLink class="size-full block py-3" :to="link.path">
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const { categories } = useStore();

    const links = [
        { label: 'Konfigurator PC', path: '/konfigurator' },
        { label: 'Promocje', path: '/promocje' }
    ]

</script>