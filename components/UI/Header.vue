<template>
    <header class="h-20 bg-light-gray flex items-center px-20 border-b-2 border-dark-gray justify-between">
        <h2 class="text-blue text-4xl font-bold">MOLLEGRO</h2>

        <SearchBar />

        <div class="flex gap-8 items-center">
            <NuxtIcon name="mol-icon:user" size="1.8rem" />
            <NuxtIcon name="mol-icon:bell" size="1.8rem"/>
            <NuxtIcon name="mol-icon:heart" size="1.8rem"/>
            <NuxtIcon name="mol-icon:message" size="1.8rem"/>

            <div class="w-[1px] bg-gray h-8 mx-4"></div>

            <NuxtIcon name="mol-icon:cart" size="1.8rem"/>
        </div>
    </header>
</template>

<script setup>

</script>