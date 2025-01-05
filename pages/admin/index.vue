<template>
    <div class="mx-20">
        <ul class="grid gap-2 mt-4 grid-cols-5">
            <li 
                v-for="(page, index) in adminPages" 
                :key="index" 
                class="border-2 border-gray h-52 rounded-sm relative after:bg-blue after:w-full after:content-[''] after:absolute after:bottom-0 after:h-0 hover:after:h-full hover:border-blue transition-colors group cursor-pointer after:transition-all"
                @mouseover="page.hover = true"
                @mouseleave="page.hover = false">
                <NuxtLink 
                    :to="page.path" 
                    class="flex flex-col gap-4 p-5 justify-center items-center size-full bg-light-gray z-50">
                    <NuxtIcon :name="page.icon" size="7rem" :style="{ color: page.hover ? '#FFF' : '#1E1E1E' }" class="z-10 transition-colors duration-300"/>

                    <h1 class="text-lg group-hover:text-[#FFF] z-10 transition-colors duration-300 text-black">{{ page.title }}</h1>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth-admin'
    });

    const isHovered = ref(false);

    const adminPages = ref([
        { title: 'Zarządzanie produktami', path: '/admin/produkty', icon: 'carbon:ibm-data-product-exchange', hover: false },
        { title: 'Zarządzanie kategoriami', path: '/admin/kategorie', icon: 'carbon:collapse-categories', hover: false },
        { title: 'Zarządzanie zamówieniami', path: '/admin/zamowienia', icon: 'mdi:basket-unfill', hover: false },
        { title: 'Zgłoszenia użytkowników', path: '/admin/zgloszenia', icon: 'tabler:message-report', hover: false },
    ]);
    
</script>