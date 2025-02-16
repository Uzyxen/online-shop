<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section v-else>
        {{ orders }}
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