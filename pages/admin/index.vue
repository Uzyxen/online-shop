<template>
    <div class="mx-20 pb-16">
        <HorizontalTextLine>Produkty</HorizontalTextLine>
        <ul class="grid gap-2 mt-4 grid-cols-5">
            <AnimatedBlock :page="{ title: 'Dodaj nowy produkt', icon: 'solar:widget-add-linear', path: '/admin/dodaj-produkt' }" />
            <AnimatedBlock :page="{ title: 'Przeglądaj produkty', icon: 'solar:box-minimalistic-linear', path: '/admin/produkty' }" />
        </ul>

        <HorizontalTextLine class="mt-10">Kategorie</HorizontalTextLine>
        <ul class="grid gap-2 mt-4 grid-cols-5">
            <AnimatedBlock :page="{ title: 'Zarządzanie kategoriami', icon: 'solar:folder-with-files-linear', path: '/admin/kategorie' }" />
        </ul>

        <HorizontalTextLine class="mt-10">Zamówienia</HorizontalTextLine>
        <ul class="grid gap-2 mt-4 grid-cols-5">
            <AnimatedBlock :page="{ title: 'Przeglądaj zamówienia', icon: 'solar:cart-linear', path: '/admin/zamowienia' }" />
            <AnimatedBlock :page="{ title: 'Przeglądaj zwroty', icon: 'solar:undo-left-round-linear', path: '/admin/zwroty' }" />
        </ul>

        <HorizontalTextLine class="mt-10">Zgłoszenia uytkowników</HorizontalTextLine>
        <ul class="grid gap-2 mt-4 grid-cols-5">
            <AnimatedBlock :page="{ title: 'Przeglądaj zgłoszenia', icon: 'solar:danger-circle-linear', path: '/admin/zgloszenia' }" />
        </ul>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth-admin'
    });
    
</script>