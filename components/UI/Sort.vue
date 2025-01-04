<template>
    <div class="bg-[#FFF] shadow-sm w-full h-12 flex items-center px-3 py-6 justify-between">
        <div class="flex gap-3">
            <h1>Sortuj</h1>

            <select name="" id="" class="px-2">
                <option value="1">Najnowsze</option>
                <option value="2">Najstarsze</option>
                <option value="3">Najtańsze</option>
                <option value="4">Najdroższe</option>
            </select>
        </div>

        <div class="flex gap-2 items-center">
            <h1>Strona</h1>
            <input v-model="currentPageIndex" type="text" class="border border-dark-gray w-12 rounded-sm p-1 text-center">
            <span>z</span>
            <span>21</span>
        </div>
    </div>
</template>

<script setup>
    const currentPageIndex = ref(1);
</script>