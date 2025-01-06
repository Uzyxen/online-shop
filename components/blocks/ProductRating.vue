<template>
    <div class="flex gap-2 items-center">
        <div class="flex gap-1">
            <NuxtIcon name="solar:star-bold" v-for="i in Math.round(rating)" mode="svg" class="text-blue"/>
            <NuxtIcon name="solar:star-linear" v-for="i in (5 - Math.round(rating))" mode="svg" class="text-blue" />
        </div>

        <p>({{ quantity }})</p>
    </div>
</template>

<script setup>
    const props = defineProps(['rating']);
    const quantity = ref(29);

</script>