<template>
    <div v-if="status === 'pending'">
        <Loader />
    </div>

    <section class="mx-20" v-else>
        <h1 class="text-xl mt-3">Aktywne sesje</h1>

        <button @click="logoutFromAll">Wyloguj z wszystkich sesji</button>
        <div class="mt-5">
            <SessionBlock v-for="session in sessions.response" :key="session.id" :session="session"/>
        </div>
    </section>
</template>

<script setup>
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    const { status, data: sessions } = await useLazyFetch('/api/sessions', {
        headers: {
            authorization: `Bearer ${token.value}`
        }
    });

    const logoutFromAll = async () => {
        const response = await $fetch('/api/sessions/', {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token.value}`
            }
        })
    }
</script>