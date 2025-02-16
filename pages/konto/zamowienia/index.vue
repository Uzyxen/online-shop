<template>
    <section class="px-3 sm:px-5 md:px-10 lg:px-20 mt-5">
        <h1 class="text-3xl">Zamówienia</h1>

        <AppTable :headers="['Numer zamówienia', 'Status', 'Data', 'Cena']" class="mt-8">
            <OrderBlock v-for="order in orders" :order="order" :admin="false" :key="order.id" />
        </AppTable>
    </section>
</template>

<script lang="ts" setup>
    const orders = ref<Order[]>([
        { id: 1, status: 'placed', date: '2021-10-10', price: 4760 },
        { id: 2, status: 'cancelled', date: '2021-10-11', price: 210 },
        { id: 3, status: 'progress', date: '2021-10-12', price: 390 },
    ]);
</script>