<template>
    <div class="px-3 sm:px-5 md:px-10 px-20 pb-16">
        <HorizontalTextLine>Konto</HorizontalTextLine>
        <ul class="grid gap-2 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            <AnimatedBlock :page="{ title: 'Moje zamówienia', icon: 'solar:clipboard-list-linear', path: '/konto/zamowienia' }" />
            <AnimatedBlock :page="{ title: 'Zakupione produkty', icon: 'solar:box-minimalistic-linear', path: '/konto/produkty' }" />
            <AnimatedBlock :page="{ title: 'Zapisane produkty', icon: 'solar:heart-linear', path: '/konto/zapisane' }" />
            <AnimatedBlock :page="{ title: 'Ksiąkża adresowa', icon: 'solar:book-2-linear', path: '/konto/ksiazka-adresowa' }" />
            <AnimatedBlock :page="{ title: 'Zapisane konfiguracje', icon: 'solar:monitor-linear', path: '/konto/konfiguracje-pc' }" />
            <AnimatedBlock :page="{ title: 'Ustawienia', icon: 'solar:settings-linear', path: '/konto/ustawienia' }" />
            <AnimatedBlock :page="{ title: 'Bezpieczeństwo', icon: 'solar:lock-linear', path: '/konto/bezpieczenstwo' }" />
        </ul>
    </div>
</template>

<script setup>
    const userData = ref({
        firstName: '',
        lastName: ''
    })

    definePageMeta({
        middleware: 'auth-user'
    })
</script>