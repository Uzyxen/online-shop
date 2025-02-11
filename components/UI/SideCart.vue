<template>
    <Transition>
        <div 
            v-if="isOpened" 
            class="absolute w-1/4 bg-blue-gray-ultra-light border-l border-blue-gray h-[100vh] top-0 right-0 z-20">

            <HideCartButton @click="$emit('hideCart')" />

            <div class="mt-14 px-4">
                <h1 class="mb-3 text-lg">Produkty w koszyku ({{ numberOfItems }})</h1>
                <CartProductBlock v-for="product in cart" :product="product" :key="product.id" />

                <div>
                    <h1>Łącznie: {{ totalPrice }} zł</h1>
                    <PrimaryButton>Przejdź do koszyka</PrimaryButton>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    defineProps(['isOpened']);

    const { cart } = useStore();
    const numberOfItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0));
    const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0));
</script>

<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: transform .2s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
        transform: translateX(100%);
    }
</style>