<template>
    <ul class="px-20 flex gap-2 py-5 mt-5" v-if="$route.path != '/'">
        <li v-for="(element, index) in crumbs">
            <NuxtLink :to="element === '' ? '/' : '/' + element" class="hover:underline cursor-pointer">
                <span v-if="element === ''">
                    Strona główna
                </span>

                <span v-else>
                    {{ element }}
                </span>
            </NuxtLink>

            <span v-if="index < crumbs.length - 1"> &gt;</span>
        </li>
    </ul>
</template>

<script setup>
    const route = useRoute();
    const path = ref();
    const crumbs = ref();

    const initCrumbs = () => {
        path.value = route.fullPath;
        crumbs.value = path.value.split('/');
    }

    initCrumbs();

    const getCrumbs = () => {
        initCrumbs();

        //crumbs.value = path.value.split('/');
    }

    watch(
        () => route.path,
        () => {
            getCrumbs();
        },
    );
</script>