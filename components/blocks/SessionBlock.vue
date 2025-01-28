<template>
    <div>
        {{ session.createdAt }}
    </div>
</template>

<script setup>
    defineProps(['session']);
</script>