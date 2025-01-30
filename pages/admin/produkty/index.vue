<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <div class="mx-20" v-else>
        <ProductList :products="products" :is-edit-mode-enabled="true" @page-change="(value) => { offset = value }" />
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth-admin'
    });

    const offset = ref(0);

    const { status, data: products } = await useLazyFetch('/api/products/products', {
        method: 'post',
        body: {
            offset
        }
    });

</script>