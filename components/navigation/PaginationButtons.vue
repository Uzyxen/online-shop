<template>
    <div class="mb-20 flex gap-3 self-center mt-10">
        <button @click="index--; pageChange()">
            Poprzednia strona
        </button>

        <div class="flex gap-2">
            <button v-for="i in 3" class="border border-blue p-1 w-10">{{ i }}</button>

            <input type="text" v-model="index" class="border border-dark-gray w-10 text-center p-1" @blur="pageChange()" />

            <button class="border border-blue p-1 w-10" @click="index = pages">
                {{ pages }}
            </button>
        </div>

        <button @click="index++; pageChange()">
            Następna strona
        </button>
    </div>
</template>

<script setup>
    defineProps(['pages']);
    const emit = defineEmits(['pageChange']);

    const index = ref(1);
    function pageChange() {
        emit('pageChange', (index.value -1) * 20);
    }
</script>