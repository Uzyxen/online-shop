<template>
    <div class="mb-20 flex gap-3">
        <button @click="index--; $emit('pageChange', (index - 1) * 20)">
            Poprzednia strona
        </button>

        <input type="text" v-model="index" class="border border-dark-gray w-10 text-center p-1" @blur="$emit('pageChange', (index - 1) * 20)" />

        <button @click="index++; $emit('pageChange', (index - 1) * 20)">
            Następna strona
        </button>
    </div>
</template>

<script setup>
    const index = ref(1);
</script>