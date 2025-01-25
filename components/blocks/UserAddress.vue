<template>
    <div class="rounded-sm w-full h-44 border-2 border-blue-gray cursor-pointer hover:border-blue hover:bg-blue-gray-light transition-colors">
        <div class="size-full p-4 flex flex-col gap-5">
            <h1 class="font-medium text-lg">{{ address.firstName }} {{ address.lastName }}</h1>

            <div class="flex flex-col gap-1">
                <h4>{{ address.street }} {{ address.streetNumber }}</h4>
                <h4>{{ address.zip }} {{ address.city }}</h4>
                <h4>{{ address.phoneNumber }}</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        address: Object
    })
</script>