<template>
    <section class="grid grid-cols-5 gap-4 mx-20">
        <UserAddress v-for="address in addresses" :key="address.id" :address="address" />
    </section>
</template>

<script setup>
    const addresses = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            street: 'street',
            streetNumber: '1234',
            city: 'wqeqwewq',
            zip: '34-600',
            phoneNumber: '123123123',
            selected: true
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            street: 'street',
            streetNumber: '1234',
            city: 'qweqwewqe',
            zip: '34-600',
            phoneNumber: '123123123',
            selected: false
        }
    ]
</script>