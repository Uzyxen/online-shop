<template>
    <section class="grid grid-cols-4 gap-4 mx-20">
        <UserAddress 
            v-for="address in addresses" :key="address.id" :address="address"
            @select="changeSelection(address)" />
    </section>
</template>

<script setup>
    const addresses = ref([
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
    ]);

    const changeSelection = (address) => {
        addresses.value.forEach(a => a.selected = false);
        address.selected = !address.selected;
    }
</script>