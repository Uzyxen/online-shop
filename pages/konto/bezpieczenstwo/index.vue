<template>
    <section class="mx-20">
        <h1 class="text-xl mt-3">Aktywne sesje</h1>

        <div class="mt-5">
            <SessionBlock v-for="session in sessions.response" :key="session.id" :session="session"/>
        </div>
    </section>
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