<template>
    <ProductPreview :is-visible="isPreviewVisible" @close="isPreviewVisible = false" :product="newProduct" />

    <form class="flex gap-10 h-[2000px]">
        <div class="flex flex-col w-2/3">
            <HorizontalGroup>
                <ProductInput caption="Tytuł" v-model="newProduct.title" type="text" :maxLength="50" class="w-full" />
                <FilterSelectBox 
                    :endpoint="'/api/categories/categories'"
                    :sub-endpoint="'/api/subcategories/subcategories'" />
            </HorizontalGroup>

            <ProductInput caption="Cena" v-model="newProduct.price" type="text" :maxLength="10" class="w-full mb-5" />

            <label for="description">Opis</label>
            <textarea id="description" class="w-full p-2.5 bg-mid-gray outline-none border-b-[3px] border-gray resize-none"></textarea>
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