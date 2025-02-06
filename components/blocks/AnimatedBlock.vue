<template>
    <li
        class="border-2 border-blue-gray text-black h-40 rounded-sm relative after:bg-blue after:w-full after:content-[''] after:absolute after:bottom-0 after:h-0 hover:after:h-full hover:border-blue transition-colors group cursor-pointer after:transition-all"
        @click="navigateTo(page.path)">
        <div
            class="flex flex-col gap-4 p-5 justify-center items-center size-full bg-light-gray z-20">
            <NuxtIcon :name="page.icon" size="4rem" mode="svg" class="z-10 text-black transition-colors duration-300 group-hover:text-[#FFF]"/>

            <h1 class="text-base group-hover:text-[#FFF] z-10 transition-colors duration-300 text-black whitespace-nowrap">{{ page.title }}</h1>
        </div>
    </li>
</template>

<script setup>
    defineProps(['page']);
</script>