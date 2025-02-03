<template>
    <div>
        {{ order.id }} - {{ translate(order.status) }} - {{ order.date }} - {{ order.price }} zł
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