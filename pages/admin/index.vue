<template>
    <div class="mx-20">
        <ul class="grid gap-2 mt-4 grid-cols-5">
            <li v-for="(page, index) in adminPages" :key="index" class="border-2 border-gray h-52">
                <NuxtLink :to="page.path" class="flex flex-col gap-4 p-5 justify-center items-center size-full bg-light-gray group hover:bg-blue">
                    <NuxtIcon :name="page.icon" size="7rem"/>

                    <h1 class="text-lg group-hover:text-[#FFF]">{{ page.title }}</h1>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth-admin'
    });

    const adminPages = ref([
        { title: 'Zarządzanie produktami', path: '/admin/produkty', icon: 'carbon:ibm-data-product-exchange' },
        { title: 'Zarządzanie kategoriami', path: '/admin/kategorie', icon: 'carbon:collapse-categories' },
        { title: 'Zarządzanie zamówieniami', path: '/admin/zamowienia', icon: 'mdi:basket-unfill' },
    ]);
    
</script>