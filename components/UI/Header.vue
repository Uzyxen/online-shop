<template>
    <header class="h-24 bg-light-gray flex items-center px-20 border-b-2 border-gray justify-between">
        <Teleport to="#teleports">
            <SideCart :is-opened="isCartOpened" @hide-cart="isCartOpened = false" /> <!-- will render inside #teleports -->
        </Teleport>

        <AppLogo />
        <SearchBar />

        <div class="flex gap-8 items-center">
            <div class="flex gap-8 items-center" v-if="user">
                <IconVerticalGroup icon-name="mol-icon:user">
                    Moje konto
                </IconVerticalGroup>

                <IconVerticalGroup icon-name="mol-icon:bell">
                    Powiadomienia
                </IconVerticalGroup>

                <IconVerticalGroup icon-name="mol-icon:heart">
                    Ulubione
                </IconVerticalGroup>

                <IconVerticalGroup icon-name="mol-icon:message">
                    Wiadomości
                </IconVerticalGroup>
            </div>

            <div v-else>
                <TransparentButton>
                    <FlexLinkFull link="/logowanie">
                        Zaloguj się
                    </FlexLinkFull>
                </TransparentButton>

                <PrimaryButton>
                    <FlexLinkFull link="/rejestracja">
                        Zarejestruj się
                    </FlexLinkFull>
                </PrimaryButton>
            </div>

            <div class="w-[1px] bg-gray h-8 mx-2"></div>

            <IconVerticalGroup icon-name="mol-icon:cart" @click="isCartOpened = true">
                0,00 zł
            </IconVerticalGroup>
        </div>
    </header>

    <SubHeader />
</template>

<script setup>
    const isCartOpened = ref(false);
    const { useAccessUser } = useAuth();

    const user = useAccessUser();
</script>