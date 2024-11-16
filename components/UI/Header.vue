<template>
    <header class="h-24 bg-light-gray flex items-center px-20 border-b-2 border-gray justify-between">
        <Teleport to="#teleports">
            <SideCart :is-opened="isCartOpened" @hide-cart="isCartOpened = false" /> <!-- will render inside #teleports -->
        </Teleport>

        <AppLogo />
        <SearchBar />

        <div class="flex gap-8 items-center">
            <div class="flex gap-8 items-center" v-if="user">
                <IconVerticalGroup icon-name="mol-icon:user" class="relative" @click="isUserDropdownVisible = !isUserDropdownVisible">
                    Moje konto

                    <div class="absolute w-[200px] top-full h-fit bg-light-gray border-[1px] border-mid-gray" v-if="user" v-show="isUserDropdownVisible">
                        <ul class="flex flex-col">
                            <li v-for="link in links" class="p-2 py-3 hover:bg-mid-gray">
                                {{ link.name }}
                            </li>

                            <SecondaryButton class="w-full text-red" @click="logOut()">Wyloguj się</SecondaryButton>
                        </ul>
                    </div>
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
    const { useAccessUser } = useAuth();
    const user = useAccessUser();

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
            const { setToken, setUser } = useAuth();

            setToken(null);
            setUser(null);
        }
    }

</script>