<template>
    <ul class="px-20 flex gap-32 text-sm border-b-2 border-gray">
        <li class="w-40" v-for="link in links">
            <NuxtLink class="size-full block py-4" :to="link.path">
                {{ link.label }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
    const links = [
        { label: 'Kategorie', path: '/kategorie' },
        { label: 'Konfigurator PC', path: '/konfigurator' }
    ]
</script>