<template>
    <header class="h-24 bg-light-gray flex items-center px-20 border-b-2 border-gray justify-between">
        <h2 class="text-blue text-4xl font-bold">MOLLEGRO</h2>

        <SearchBar />

        <div class="flex gap-8 items-center">
            <div class="flex gap-8 items-center" v-if="isLogged">
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
            </div>

            <div v-else>
                <TransparentButton>
                    <FlexLinkFull :link="'/logowanie'">
                        Zaloguj się
                    </FlexLinkFull>
                </TransparentButton>

                <PrimaryButton>
                    <FlexLinkFull :link="'/rejestracja'">
                        Zarejestruj się
                    </FlexLinkFull>
                </PrimaryButton>
            </div>

            <div class="w-[1px] bg-gray h-8 mx-2"></div>

            <IconVerticalGroup :iconName="'mol-icon:cart'">
                0,00 zł
            </IconVerticalGroup>
        </div>
    </header>

    <SubHeader />
</template>

<script setup>
    const isLogged = ref(false);
</script>