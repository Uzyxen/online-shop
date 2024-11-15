<template>
    <div class="fixed w-[500px] top-4 bg-light-gray p-4 shadow-md flex flex-col gap-3">
        <div>
            <h1 class="text-lg">Konto z adresem <span class="font-semibold">{{ email }}</span> już istnieje</h1>
            <h2 class="mt-4">Czy chcesz się zalogować?</h2>
        </div>

        <PrimaryButton class="w-full">Przejdź do logowania</PrimaryButton>
        <SecondaryButton class="w-full">Anuluj</SecondaryButton>
    </div>
</template>

<script setup>
    defineProps(['email'])
</script>