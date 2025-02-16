<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section v-else class="px-3 sm:px-5 md:px-10 lg:px-20 mt-5">
        <AppTable :headers="['Numer zamówienia', 'Status', 'Data', 'Cena', 'ID użytkownika']" class="mt-8">
            <OrderBlock v-for="order in orders.response" :order="order" :admin="true" :key="order.id" v-if="orders" />
        </AppTable>
    </section>
</template>

<script setup>
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const { status, data: orders } = await useLazyFetch('/api/orders', {
        headers: {
            authorization: `Bearer ${token.value}`
        }
    });
</script>