<template>
    <ProductPreview :is-visible="isPreviewVisible" @close="isPreviewVisible = false" :product="newProduct" />

    <form class="flex gap-10 h-[2000px]">
        <div class="flex flex-col w-2/3 gap-2">
            <HorizontalGroup>
                <ProductInput caption="Tytuł" v-model="newProduct.title" type="text" :maxLength="50" class="w-full" />
                <FilterSelectBox 
                    :endpoint="'/api/categories/categories'"
                    :sub-endpoint="'/api/subcategories/subcategories'"
                    class="self-end" />
            </HorizontalGroup>

            <ProductInput caption="Cena" v-model="newProduct.price" type="text" :maxLength="10" class="w-full mb-5" />

            <VerticalGroup>
                <label for="description" class="font-semibold text-base">Opis</label>
                <textarea id="description" class="w-full min-h-40 p-2.5 bg-light-gray border-2 border-[#DDD] outline-none resize-none"></textarea>
            </VerticalGroup>

            <VerticalGroup>
                <p class="font-semibold text-base">Grafiki</p>
                
                <ProductImagesInput />
            </VerticalGroup>

            <VerticalGroup>
                <p class="font-semibold text-base">Specyfikacja</p>

                <MultiSelectBox />
            </VerticalGroup>
        </div>

        <div class="w-1/3 p-4 shadow-md flex flex-col gap-4 sticky top-10 h-fit">
            <PrimaryButton class="w-full">Dodaj produkt</PrimaryButton>
            <SecondaryButton class="w-full" @click.prevent="isPreviewVisible = true">Podgląd produktu</SecondaryButton>
        </div>
    </form>
</template>

<script setup>
    const newProduct = ref({
        title: '',
        price: 0,
    });

    const isPreviewVisible = ref(false);
</script>