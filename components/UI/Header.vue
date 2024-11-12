<template>
    <header class="h-24 bg-light-gray flex items-center px-20 border-b-2 border-dark-gray justify-between">
        <h2 class="text-blue text-4xl font-bold">MOLLEGRO</h2>

        <SearchBar />

        <div class="flex gap-8 items-center">
            <IconVerticalGroup :iconName="'mol-icon:user'">
                Moje konto
            </IconVerticalGroup>

            <IconVerticalGroup :iconName="'mol-icon:bell'">
                Powiadomienia
            </IconVerticalGroup>

            <IconVerticalGroup :iconName="'mol-icon:heart'">
                Ulubione
            </IconVerticalGroup>

            <IconVerticalGroup :iconName="'mol-icon:message'">
                Wiadomości
            </IconVerticalGroup>

            <div class="w-[1px] bg-gray h-8 mx-4"></div>

            <IconVerticalGroup :iconName="'mol-icon:cart'">
                Koszyk
            </IconVerticalGroup>
        </div>
    </header>
</template>

<script setup>

</script>