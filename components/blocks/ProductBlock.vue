<template>
    <NuxtLink :to="'/produkty/' + product.title" class="bg-mid-gray p-3">
        <h1>{{ product.title }}</h1>
        <p>{{ product.price }} PLN</p>

        <PrimaryButton @click.prevent="addToCart">
            Dodaj do koszyka
        </PrimaryButton>
    </NuxtLink>
</template>

<script setup>
    defineProps(['product']);

    function addToCart() {
        alert('Dodano do koszyka');
    }
</script>