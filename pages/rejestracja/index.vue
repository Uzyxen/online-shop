<template>
    <div class="flex h-[100vh]">
        <div class="w-3/5 flex flex-col justify-center items-center">
            <CenterHeader>Zarejestruj się</CenterHeader>

            <form class="flex flex-col gap-12">
                <ValidateInput 
                    caption="E-mail:" 
                    type="email" 
                    :max-length="255" 
                    v-model="registerData.email" />

                <ValidateInput 
                    caption="Hasło:" 
                    type="password"
                    :min-length="8"
                    :max-length="50"
                    v-model="registerData.password" />

                <div>
                    <ValidateInput 
                    caption="Potwórz hasło:" 
                    type="password" 
                    :min-length="8"
                    :max-length="50"
                    v-model="registerData.passwordRepeat" />

                    <p class="mt-6">
                        Masz już konto? 
                        <NuxtLink to="/logowanie">Zaloguj się</NuxtLink>
                    </p>
                </div>

                <PrimaryButton class="w-full mt-8 h-12" @click.prevent="register()">Utwórz konto</PrimaryButton>
            </form>
        </div>

        <div class="bg-blue w-2/5 h-full">

        </div>
    </div>
</template>

<script setup>
    const registerData = ref({
        email: '',
        password: '',
        passwordRepeat: ''
    });

    definePageMeta({
        layout: 'clear'
    });

    async function register() {
        const response = await $fetch('/api/auth/register', {
            method: 'POST',
            body: registerData.value
        });

        if(response && response.message === 'created') {
            await navigateTo('/logowanie');
        }
    }
</script>