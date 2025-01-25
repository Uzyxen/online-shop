<template>
    <section class="grid grid-cols-5 gap-4 mx-20">
        <UserAddress v-for="address in addresses" :key="address.id" :address="address" />
    </section>
</template>

<script setup>
    const addresses = [
        {
            id: 1,
            name: 'John Doe',
            street: '1234 Main St',
            city: 'Springfield',
            state: 'IL',
            zip: '62701',
            country: 'USA'
        },
        {
            id: 2,
            name: 'Jane Doe',
            street: '5678 Elm St',
            city: 'Springfield',
            state: 'IL',
            zip: '62701',
            country: 'USA'
        }
    ]
</script>