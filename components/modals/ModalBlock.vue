<template>
    <Transition name="opacity">
        <div v-show="isModalVisible" class="fixed flex justify-center items-center top-0 left-0 size-full z-30 bg-black-40">
            <Transition>
                <div v-if="isModalVisible" class="bg-blue-gray-ultra-light w-[600px] h-[650px] flex flex-col gap-4">
                    <button class="mt-2 ml-1 block w-fit" @click="$emit('close')">
                        <NuxtIcon name="solar:arrow-left-linear" size="2.5rem" mode="svg" class="cursor-pointer" @click="$emit('close')" />
                    </button>

                    <slot />
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup>
    defineProps(['isModalVisible']);
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

    .opacity-enter-active,
    .opacity-leave-active {
        transition: opacity 0.2s ease-in-out;
    }

    .opacity-enter-from,
    .opacity-leave-to {
        opacity: 0;
    }

</style>