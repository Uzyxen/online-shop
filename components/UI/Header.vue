<template>
    <header class="h-[85px] bg-light-gray flex items-center px-20 border-b-2 border-blue-gray justify-between">
        <Teleport to="#teleports">
            <SideCart :is-opened="isCartOpened" @hide-cart="isCartOpened = false" /> <!-- will render inside #teleports -->
        </Teleport>

        <AppLogo />
        <SearchBar />

        <div class="flex gap-8 items-center">
            <div class="flex gap-8 items-center" v-if="token">
                <IconVerticalGroup icon-name="solar:user-linear" class="relative" @click="isUserDropdownVisible = !isUserDropdownVisible">
                    Moje konto

                    <div class="absolute w-[200px] top-full h-fit bg-light-gray border-[1px] border-mid-gray z-30" v-show="isUserDropdownVisible">
                        <ul class="flex flex-col">
                            <li v-for="link in links" class="hover:bg-mid-gray">
                                <NuxtLink class="justify-start size-full block p-2 py-3" :to="link.path">
                                    {{ link.name }}
                                </NuxtLink>
                            </li>

                            <SecondaryButton class="w-full text-red" @click="logOut()">Wyloguj się</SecondaryButton>
                        </ul>
                    </div>
                </IconVerticalGroup>

                <IconVerticalGroup icon-name="solar:bell-linear">
                    Powiadomienia
                </IconVerticalGroup>

                <IconVerticalGroup icon-name="solar:heart-linear">
                    Ulubione
                </IconVerticalGroup>

                <IconVerticalGroup icon-name="solar:chat-line-linear">
                    Wiadomości
                </IconVerticalGroup>
            </div>

            <div v-else>
                <TransparentButton class="h-fit p-2 w-32 text-sm">
                    <FlexLinkFull link="/logowanie">
                        Zaloguj się
                    </FlexLinkFull>
                </TransparentButton>

                <PrimaryButton class="h-fit p-2 w-32 text-sm">
                    <FlexLinkFull link="/rejestracja">
                        Zarejestruj się
                    </FlexLinkFull>
                </PrimaryButton>
            </div>

            <div class="w-[1px] bg-gray h-8 mx-2"></div>

            <IconVerticalGroup icon-name="solar:cart-large-minimalistic-linear" @click="isCartOpened = true">
                0,00 zł
            </IconVerticalGroup>
        </div>
    </header>

    <SubHeader />
</template>

<script setup>
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const isCartOpened = ref(false);
    const isUserDropdownVisible = ref(false);

    const links = [
        { name: 'Konto', path: '/konto' },
        { name: 'Moje zamówienia', path: '/zamowienia' },
        { name: 'Ustawienia', path: '/ustawienia' },
    ];

    async function logOut() {
        const response = await $fetch('/api/auth/logout');

        if(response && response.message === 'OK') {
            const { useAccessToken } = useStore();
            const token = useAccessToken();

            token.value = null;

            await navigateTo('/');
        }
    }

</script>