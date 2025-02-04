<template>
    <div class="grid grid-cols-4">
        <p class="text-center border-r border-gray p-2">{{ order.id }}</p>
        <p class="text-center border-r border-gray p-2">{{ translate(order.status) }}</p>
        <p class="text-center border-r border-gray p-2">{{ order.date }}</p>
        <p class="text-center p-2">{{ order.price }} zł</p>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        order: Order;
    }>();

    const translate = (status: string) => {
        switch (status) {
            case 'placed':
                return 'Złożone';
            case 'cancelled':
                return 'Anulowane';
            case 'progress':
                return 'W trakcie';
            default:
                return 'Nieznany';
        }
    };
</script>