<template>
    <div>
        <h1>Dodaj produkt</h1>

        <input type="text" v-model="newProduct.title">
        <input type="text" v-model="newProduct.price">

    </div>
</template>

<script setup>
    const newProduct = ref({
        title: '',
        price: 0,
    });
</script>