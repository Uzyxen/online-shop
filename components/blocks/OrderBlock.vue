<template>
    <div>
        {{ order.id }} - {{ order.status }} - {{ order.date }} - {{ order.price }}
    </div>
</template>

<script setup>
    defineProps(['order']);
</script>