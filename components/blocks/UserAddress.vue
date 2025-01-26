<template>
    <div 
        class="rounded-sm w-full h-48 border-2 border-blue-gray cursor-pointer hover:border-blue hover:bg-blue-gray-light transition-colors" 
        :class="{ 'bg-blue-gray-light': address.selected }"
        @click="$emit('select')">
        <div class="size-full p-4 flex flex-col relative">
            <div>
                <input type="checkbox" :checked="address.selected" class="absolute top-2 right-2" />
            </div>

            <h1 class="font-medium text-lg mt-3">{{ address.firstName }} {{ address.lastName }}</h1>

            <div class="flex flex-col gap-1 mt-5">
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