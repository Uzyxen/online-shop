<template>
    <section class="mx-20 mt-4">
        <PrimaryButton class="w-44" @click="isUserAddingNewAddress = true">Dodaj adres</PrimaryButton>

        <ModalBlock :is-modal-visible="isUserAddingNewAddress">
            <div>
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
        </ModalBlock>

        <div class="grid grid-cols-4 gap-4 mt-6">
            <UserAddress 
                v-for="address in addresses.response" 
                :key="address.id" 
                :address="address"
                @select="changeSelection(address)" />
        </div>
    </section>
</template>

<script setup>
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const { data: addresses } = await useFetch('/api/addresses', {
        headers: {
            authorization: `Bearer ${token.value}`
        }
    });

    const changeSelection = (address) => {
        addresses.value.response.forEach(a => a.selected = false);
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