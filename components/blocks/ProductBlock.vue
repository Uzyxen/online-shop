<template>
    <NuxtLink :to="'/produkty/' + product.url" class="shadow-md p-3 h-48 bg-[#FFF] text-black">
        <div class="flex size-full gap-4">
            <img :src="product.image" :alt="product.title" class="bg-mid-gray w-48" />

            <div class="flex-1 flex flex-col gap-2">
                <h1 class="text-xl">{{ product.title }}</h1>
                
                <ProductRating :rating="4.9" class="flex-1" />

                <div>
                    <ul>
                        <li class="text-sm" v-for="i in 4">Test property: <span class="font-medium">test value</span></li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-col">
                <div class="flex-1 flex flex-col gap-2">
                    <h1 class="text-2xl font-medium">{{ formatPrice(product.price) }} zł</h1>
                    <h3 class="text-sm">U Ciebie już jutro!</h3>
                </div>

                <div class="flex gap-2 items-center"> 
                    <PrimaryButton @click.prevent="addToCart">
                        Dodaj do koszyka
                    </PrimaryButton>

                    <NuxtIcon v-if="isFavorite" @click.prevent="toggleFavorite" name="solar:heart-bold" size="2.5rem" mode="svg" class="bg-blue-gray-light text-blue p-1.5 rounded-sm" />
                    <NuxtIcon v-else @click.prevent="toggleFavorite" name="solar:heart-linear" size="2.5rem" mode="svg" class="bg-blue-gray-light p-1.5 rounded-sm" />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['product']);

    const { userFavorites } = useStore();

    const isFavorite = userFavorites.value.some(favorite => favorite.productId === props.product.id);

    function formatPrice(price) {
        return new Intl.NumberFormat('pl-PL', {
            useGrouping: true,
        }).format(price);
    }
    
    function addToCart() {
        alert('Dodano do koszyka');
    }

    const toggleFavorite = async () => {
        const { useAccessToken } = useStore();
        const token = useAccessToken();

        const response = await $fetch('/api/favorites', {
            method: "POST",
            body: {
                productId: props.product.id
            },
            headers: {
                authorization: `Bearer ${token.value}`
            }
        });
    }
</script>