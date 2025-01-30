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

                <PrimaryButton @click.prevent="addToCart">
                    Dodaj do koszyka
                </PrimaryButton>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    defineProps(['product']);

    function formatPrice(price) {
        return new Intl.NumberFormat('pl-PL', {
            useGrouping: true,
        }).format(price);
    }
    
    function addToCart() {
        alert('Dodano do koszyka');
    }
</script>