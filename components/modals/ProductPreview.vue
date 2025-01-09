<template>
    <Transition>
        <div class="fixed flex justify-center items-center left-0 top-0 size-full z-[999]" v-if="isVisible">
            <div class="bg-gray size-full m-4 h-[98%] shadow-md rounded-sm">
                <NuxtIcon name="solar:arrow-left-linear" size="2.5rem" mode="svg" class="absolute left-7 top-6 cursor-pointer" @click="$emit('close')" />

                <h1>
                    {{ product.title }}
                </h1>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    defineProps(['isVisible', 'product']);
</script>

<style>
    .v-enter-active,
    .v-leave-active {
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
        transform: scale(0.9);
        opacity: 0;
    }
</style>