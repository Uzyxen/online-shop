<template>
    <div class="border-b-2 border-blue-gray">
        <header class="h-[85px] flex items-center px-8 2xl:px-20 justify-between max-w-8xl mx-auto gap-6 2xl:gap-0">
            <Teleport to="#teleports">
                <SideCart :is-opened="isCartOpened" @hide-cart="isCartOpened = false" /> <!-- will render inside #teleports -->
            </Teleport>

            <Teleport to="#teleports">
                <MobileMenu :is-user-menu-visible="isUserMenuVisible" @close="isUserMenuVisible = false" />
            </Teleport>

            <AppLogo />
            <SearchBar />

            <div class="hidden lg:flex gap-4 xl:gap-8 items-center">
                <div class="flex gap-0 lg:gap-8 items-center" v-if="token">
                    <IconVerticalGroup icon-name="solar:user-linear" class="relative" @click="isUserDropdownVisible = !isUserDropdownVisible">
                        Moje konto

                        <div class="absolute w-[220px] top-full h-fit rounded-sm bg-light-gray border border-mid-gray z-30" v-show="isUserDropdownVisible">
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
                    {{ totalPrice }} zł
                </IconVerticalGroup>
            </div>

            <NuxtIcon class="block lg:hidden" name="solar:hamburger-menu-linear" size="2.5rem" @click="isUserMenuVisible = !isUserMenuVisible"/>
        </header>
    </div>
    <SubHeader />
</template>

<script setup>
    const { useAccessToken, cart } = useStore();
    const token = useAccessToken();
    const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0));

    const isCartOpened = ref(false);
    const isUserMenuVisible = ref(false);
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