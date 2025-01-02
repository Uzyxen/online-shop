<template>
    <ul class="px-20 flex gap-32 text-sm border-b-2 border-gray">
        <li class="w-64 group text-center">
            <NuxtLink
                class="size-full block py-4 relative" 
                to="/kategorie">

                Kategorie

                <div 
                    class="w-full h-96 text-left border-2 border-t-0 bg-light-gray border-gray absolute top-[52px] left-0 hidden group-hover:block cursor-default">
                    <ul>
                        <li v-for="category in categories" class="cursor-pointer hover:text-blue text-sm font-semibold">
                            <NuxtLink :to="`/kategorie/${category.title}`" class="block size-full p-3">
                                {{ category.title }}
                            </NuxtLink> 
                        </li>
                    </ul>
                </div>
            </NuxtLink>
        </li>

        <li class="w-64 text-center" v-for="link in links">
            <NuxtLink class="size-full block py-4" :to="link.path">
                {{ link.label }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
    const links = [
        { label: 'Konfigurator PC', path: '/konfigurator' }
    ]

    const { data: categories } = await useFetch('/api/categories/categories', {
        method: 'POST'
    });
</script>