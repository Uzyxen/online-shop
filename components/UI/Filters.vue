<template>
    <div class="w-96 h-fit bg-[#FFF] shadow-md p-3">
        <h1 class="text-2xl font-semibold">Filtry</h1>
        <button class="bg-mid-gray w-full mt-5 rounded-sm p-2">Pokaż wszystkie filtry</button>

        <hr class="border-none h-px bg-dark-gray mt-3">

        <div class="mt-8">
            <div class="flex flex-col gap-3">
                <h2 class="font-semibold">Cena</h2>
                <FromToInput />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>