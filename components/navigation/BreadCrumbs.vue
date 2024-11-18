<template>
    <ul class="px-20 flex gap-2 py-5 mt-5" v-if="$route.path != '/'">
        <li>
            Strona główna
        </li>

        <li>&gt;</li>

        <li v-for="item in crumbs" class="hover:underline" :class="{ 'font-medium cursor-pointer': item == $route.path.substring(1) }">
            {{ item }}
        </li>
    </ul>
</template>

<script setup>
    let crumbs = [];
    const routes = useRoute().fullPath;

    crumbs = routes.split('/');
</script>