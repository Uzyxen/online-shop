<template>
    <section class="mx-20 mt-4">
        <PrimaryButton class="w-44" @click="isUserAddingNewAddress = true">Dodaj adres</PrimaryButton>

        <div v-if="isUserAddingNewAddress">
            <p>Imie</p>
            <input type="text" class="outline-none border" v-model="newAddress.firstName">

            <p>Nazwisko</p>
            <input type="text" class="outline-none border" v-model="newAddress.lastName">

            <p>Miasto</p>
            <input type="text" class="outline-none border" v-model="newAddress.city">

            <p>Ulica</p>
            <input type="text" class="outline-none border" v-model="newAddress.street">

            <p>Numer ulicy</p>
            <input type="text" class="outline-none border" v-model="newAddress.streetNumber">

            <p>Kod pocztowy</p>
            <input type="text" class="outline-none border" v-model="newAddress.zip">

            <p>Numer telefonu</p>
            <input type="text" class="outline-none border" v-model="newAddress.phoneNumber">

            <button @click="addAddress">Dodaj</button>
        </div>

        <div class="grid grid-cols-4 gap-4 mt-6">
            <UserAddress 
                v-for="address in addresses" 
                :key="address.id" 
                :address="address"
                @select="changeSelection(address)" />
        </div>
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

    const isUserAddingNewAddress = ref(false);
    const newAddress = ref({
        firstName: '',
        lastName: '',
        street: '',
        streetNumber: '',
        city: '',
        zip: '',
        phoneNumber: '',
    });

    const addAddress = async () => {
        const { useAccessToken } = useStore();
        const token = useAccessToken();

        const response = await $fetch('/api/addresses', {
            method: 'POST',
            body: newAddress.value,
            headers: {
                authorization: `Bearer ${token.value}`
            }
        });

        console.log(response);
    }
</script>