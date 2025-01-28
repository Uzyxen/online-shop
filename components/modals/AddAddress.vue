<template>
    <div class="w-full px-4 flex flex-col gap-5">
        <div class="flex gap-2">
            <ProductInput caption="Imię" type="text" v-model="newAddress.firstName" class="w-full" />
            <ProductInput caption="Nazwisko" type="text" v-model="newAddress.lastName" class="w-full" />
        </div>

        <ProductInput caption="Miasto" type="text" v-model="newAddress.city" class="w-full" />

        <div class="flex gap-2">
            <ProductInput caption="Ulica" type="text" v-model="newAddress.street" class="w-full" />
            <ProductInput caption="Numer ulicy" type="text" v-model="newAddress.streetNumber" />
        </div>

        <ProductInput caption="Kod pocztowy" type="text" v-model="newAddress.zip" />
        <ProductInput caption="Numer telefonu" type="text" v-model="newAddress.phoneNumber" />

        <PrimaryButton @click="addAddress" class="mt-4 self-end">Dodaj adres</PrimaryButton>
    </div>
</template>

<script setup>
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