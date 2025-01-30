<template>
    <div class="flex h-[100vh]">
        <div class="w-full flex flex-col justify-center items-center">
            <CenterHeader class="mb-8">Zaloguj się</CenterHeader>
            <ResponseMessage>
                {{ responseMessage }}
            </ResponseMessage>

            <form class="flex flex-col gap-8">
                <ValidateInput caption="E-mail:" type="email" v-model="loginData.email" placeholder="Adres e-mail" />

                <div>
                    <ValidateInput caption="Hasło:" type="password" v-model="loginData.password" placeholder="Wprowadź hasło" />
                    <p class="mt-6">
                        Nie masz konta? 
                        <NuxtLink to="/rejestracja">Zrejestruj się</NuxtLink>
                    </p>
                </div>

                <PrimaryButton 
                    class="w-full mt-8 h-12" 
                    @click.prevent="login()" 
                    :loading="pending">Zaloguj się</PrimaryButton>
            </form>
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

    const responseMessage = ref();
    const isPending = ref(false);
    async function login() {
        isPending.value = true;

        const response = await $fetch('/api/auth/login', {
            method: 'POST',
            body: loginData.value
        });

        if(response.access_token) {
            const { useAccessToken, isAdmin } = useStore();
            const token = useAccessToken();
            const isUserAdmin = isAdmin();

            token.value = response.access_token;
            isUserAdmin.value = response.is_admin;

            await navigateTo('/');
        } else if(response.message) {
            responseMessage.value = response.message;
        }

        isPending.value = false;
    }

    const pending = computed(() => {
        return isPending.value ? true : false;
    });
</script>