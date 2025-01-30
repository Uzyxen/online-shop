<template>
    <div class="border border-t-0 border-blue-gray p-2 flex first:border-t">
        <h1 class="flex-1">{{ session.createdAt }}</h1>

        <button @click="logoutFromSession(session.id)">Wyloguj</button>
    </div>
</template>

<script setup>
    defineProps(['session']);

    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const logoutFromSession = async id => {
        const response = await $fetch(`/api/sessions/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token.value}`
            }
        });

        console.log(response);
    }
</script>