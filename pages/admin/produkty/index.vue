<template>
    <div class="mx-20">
        <ProductList :products="products" :is-edit-mode-enabled="true" @page-change="(value) => { offset = value }" />
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth-admin'
    });

    const offset = ref(0);

    const { data: products } = await useFetch('/api/products/products', {
        method: 'post',
        body: {
            offset
        }
    });

</script>