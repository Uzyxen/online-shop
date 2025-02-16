<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section v-else class="px-3 sm:px-5 md:px-10 lg:px-20 mt-5">
        <div class="flex flex-col gap-3" v-if="!order">
            <p class="text-base font-medium text-black">Wyszukaj zamówienie: </p>

            <div class="flex gap-2">
                <input type="text" class="outline-none border border-gray p-1" placeholder="ID zamówienia" v-model="orderId">
                <PrimaryButton @click="fetchOrder" :loading="isPending">Szukaj</PrimaryButton>
            </div>
        </div>

        <div v-if="order" class="mt-5 flex flex-col gap-4">
            <h1 @click="order = null" class="cursor-pointer">Zamówienie o numerze: {{ orderId }} - kliknij by skasować</h1>

            <OrderBlock :order="order" :admin="true" class="border border-gray" />
        </div>

        <h1 class="mt-14 cursor-pointer w-fit" @click="isAllVisible = !isAllVisible">{{ isAllVisible ? 'Ukryj wszystkie' : 'Pokaż wszystkie' }}</h1>

        <AppTable :headers="['Numer zamówienia', 'Status', 'Data', 'Cena', 'ID użytkownika']" v-if="isAllVisible" class="mt-4">
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

    const orderId = ref();
    const order = ref();
    const isPending = ref(false);

    const fetchOrder = async () => {
        isPending.value = true;
        const response = await $fetch(`/api/orders/${orderId.value}`, {
            headers: {
                authorization: `Bearer ${token.value}`
            }
        });

        if(response) {
            order.value = response.response;
        }

        isPending.value = false;
    }

    const isAllVisible = ref(false);
</script>