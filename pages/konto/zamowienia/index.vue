<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section class="px-3 sm:px-5 md:px-10 lg:px-20 mt-5" v-else>
        <h1 class="text-3xl">Zamówienia</h1>

        <AppTable :headers="['Numer zamówienia', 'Status', 'Data', 'Cena']" class="mt-8" v-if="orders.response.length">
            <OrderBlock v-for="order in orders.response" :order="order" :admin="false" :key="order.id" />
        </AppTable>

        <div v-else>
            <p class="mt-5">Brak zamówień</p>
        </div>
    </section>
</template>

<script setup>
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const { status, data: orders } = await useLazyFetch('/api/orders/user', {
        headers: {
            authorization: `Bearer ${token.value}`
        }
    });
</script>