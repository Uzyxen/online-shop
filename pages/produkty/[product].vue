<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section class="px-3 sm:px-5 md:px-10 lg:px-20 mt-5" v-else>
        <div class="flex h-[calc(6rem*5)]">
            <div class="flex flex-col w-24">
                <div v-for="(image, index) in product.images" class="h-24 p-1 flex justify-center items-center border" :class="currendImageIndex === index ? 'border-blue' : 'border-blue-gray'" @click="currendImageIndex = index">
                    <img class="object-contain" :src="image.imageUrl" alt="">
                </div>
            </div>
            <div class="w-[600px] p-10">
                <img class="size-full object-contain" :src="product.images[currendImageIndex].imageUrl" alt="">
            </div>

            <div class="flex gap-10 flex-1">
                <div class="flex-1 flex flex-col gap-2">
                    <h1 class="text-2xl">{{ product.title }}</h1>
                    
                    <ProductRating :rating="4.5" />

                    <div class="mt-4 flex flex-col gap-3">
                        <DevOnly>
                            <h2>Pamięć wbudowana: </h2>
                            <div class="flex gap-2">
                                <div class="border border-blue-gray p-2 cursor-pointer rounded-sm">128GB</div>
                                <div class="border border-blue p-2 cursor-pointer rounded-sm">256GB</div>
                                <div class="border border-blue-gray p-2 cursor-pointer rounded-sm">512GB</div>
                                <div class="border border-blue-gray p-2 cursor-pointer rounded-sm">1TB</div>
                            </div>
                        </DevOnly>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <h1 class="text-right text-xl">{{ product.price }} zł</h1>

                    <div class="flex gap-2">
                        <input type="text" class="border border-blue-gray outline-none w-12 h-10">
                        <PrimaryButton>Do koszyka</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const route = useRoute();

    const { status, data: product } = await useLazyFetch(`/api/products/${route.params.product}`);

    const currendImageIndex = ref(0);
</script>