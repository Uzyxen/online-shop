<template>
    <div class="flex h-[100vh]">
        <div class="w-3/5 flex flex-col justify-center items-center">
            <CenterHeader>Zaloguj się</CenterHeader>

            <form class="flex flex-col gap-12">
                <ValidateInput caption="E-mail:" type="email" v-model="loginData.email" />

                <div>
                    <ValidateInput caption="Hasło:" type="password" v-model="loginData.password" />
                    <p class="mt-6">
                        Nie masz konta? 
                        <NuxtLink to="/rejestracja">Zrejestruj się</NuxtLink>
                    </p>
                </div>

                <PrimaryButton class="w-full mt-8 h-12" @click.prevent="login()">Zaloguj się</PrimaryButton>
            </form>
        </div>

        <div class="bg-blue w-2/5 h-full">

        </div>
    </div>
</template>

<script setup>
    const loginData = ref({
        email: '',
        password: ''
    });

    definePageMeta({
        layout: 'clear'
    });

    async function login() {
        const response = await $fetch('/api/auth/login', {
            method: 'POST',
            body: loginData.value
        });

        if(response.access_token && response.user) {
            const { setToken, setUser } = useAuth();

            setToken(response.access_token);
            setUser(response.user);

            await navigateTo('/');
        }
    }
</script>