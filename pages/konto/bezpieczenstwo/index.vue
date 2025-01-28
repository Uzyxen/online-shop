<template>
    <div>
        <div v-for="session in sessions.response">{{ session.createdAt }}</div>
    </div>
</template>

<script setup>
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const { data: sessions } = await useFetch('/api/sessions', {
        headers: {
            authorization: `Bearer ${token.value}`
        }
    });
</script>