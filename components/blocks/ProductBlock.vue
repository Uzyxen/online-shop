<template>
    <NuxtLink :to="'/produkty/' + product.title" class="shadow-md p-3 h-48 bg-[#FFF]">
        <div class="flex size-full gap-4">
            <img :src="product.image" :alt="product.title" class="bg-mid-gray w-48" />

            <div class="flex-1 flex flex-col gap-2">
                <h1 class="text-xl">{{ product.title }}</h1>
                
                <ProductRating :rating="4.9" />

                <div>
                    
                </div>
            </div>

            <div class="flex flex-col">
                <p class="text-2xl font-semibold flex-1">{{ formatPrice(product.price) }} zł</p>

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