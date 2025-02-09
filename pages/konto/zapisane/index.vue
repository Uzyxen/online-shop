<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section class="mx-20" v-else>
        <h1 class="text-xl mt-3">Ulubione produkty</h1>

        <ProductList :products="favoriteProducts.response" />
    </section>
</template>

<script setup>
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const { status, data: favoriteProducts } = await useLazyFetch('/api/favorites', {
        headers: {
            authorization: `Bearer ${token.value}`
        }
    });
</script>