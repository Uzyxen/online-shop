<template>
    <Transition>
        <div v-if="isVisible" class="fixed w-[500px] top-4 bg-light-gray p-4 shadow-md flex flex-col gap-3">
            <div>
                <h1 class="text-lg">Konto z adresem <span class="font-semibold">{{ email }}</span> już istnieje</h1>
                <h2 class="mt-4">Czy chcesz się zalogować?</h2>
            </div>

            <PrimaryButton class="w-full">Przejdź do logowania</PrimaryButton>
            <SecondaryButton class="w-full" @click="$emit('close')">Anuluj</SecondaryButton>
        </div>
    </Transition>
</template>

<script setup>
    defineProps(['email', 'isVisible']);
</script>

<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: transform .4s cubic-bezier(0.63, 0.04, 0, 1.4);
    }

    .v-enter-from,
    .v-leave-to {
        transform: translateY(-110%);
    }
</style>