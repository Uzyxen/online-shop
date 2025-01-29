<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section class="mx-20 mt-4" v-else>
        <PrimaryButton class="w-44" @click="isUserAddingNewAddress = true">Dodaj adres</PrimaryButton>

        <ModalBlock :is-modal-visible="isUserAddingNewAddress" @close="isUserAddingNewAddress = false">
            <AddAddress />
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

    const { status, data: addresses } = await useLazyFetch('/api/addresses', {
        headers: {
            authorization: `Bearer ${token.value}`
        }
    });

    const changeSelection = (address) => {
        addresses.value.response.forEach(a => a.selected = false);
        address.selected = !address.selected;
    }

    const isUserAddingNewAddress = ref(false);
</script>