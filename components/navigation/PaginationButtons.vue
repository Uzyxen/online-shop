<template>
    <div class="mb-20">
        <button @click="index--; $emit('pageChange', (index - 1) * 20)">
            Poprzednia strona
        </button>

        {{ index }}

        <button @click="index++; $emit('pageChange', (index - 1) * 20)">
            Następna strona
        </button>
    </div>
</template>

<script setup>
    const index = ref(1);
</script>