<template>
    <div class="flex h-[100vh]">
        <div class="w-3/5 flex flex-col justify-center items-center">
            <UserExistsNotification :is-visible="isUserExistsNotificationVisible" :email="email" @close="isUserExistsNotificationVisible = false" />
            <CenterHeader>Zarejestruj się</CenterHeader>

            <form class="flex flex-col gap-8">
                <ValidateInput 
                    caption="E-mail:" 
                    type="email" 
                    :max-length="255" 
                    v-model="registerData.email"
                    placeholder="Adres e-mail" />

                <ValidateInput 
                    caption="Hasło:" 
                    type="password"
                    :min-length="8"
                    :max-length="50"
                    v-model="registerData.password"
                    placeholder="Wprowadź hasło" />

                <div>
                    <ValidateInput 
                    caption="Potwórz hasło:" 
                    type="password" 
                    :min-length="8"
                    :max-length="50"
                    v-model="registerData.passwordRepeat"
                    placeholder="Powtórz haslo" />

                    <p class="mt-6">
                        Masz już konto? 
                        <NuxtLink to="/logowanie">Zaloguj się</NuxtLink>
                    </p>
                </div>

                <PrimaryButton 
                    class="w-full mt-8 h-12" 
                    @click.prevent="register()"
                    :loading="loading">Utwórz konto</PrimaryButton>
            </form>
        </div>

        <div class="bg-gradient-to-br from-blue via-blue-medium to-blue-dark w-2/5 h-full flex items-center justify-center relative overflow-hidden">  
            <div class="flex flex-col gap-16">
                <div class="flex flex-col gap-2">
                    <h1 class="text-3xl text-blue-gray-ultra-light font-medium">MOLLEGRO</h1>
                    <hr class="border-0 h-[2px] bg-blue-gray-ultra-light">
                </div>

                <ul class="flex flex-col gap-7">
                    <li v-for="(item, index) in list" :key="index" class="flex items-center gap-4">
                        <div class="bg-blue-gray-20 p-2 rounded-sm">
                            <NuxtIcon name="material-symbols:check-rounded" size="2.5rem" mode="svg" class="text-blue-gray-ultra-light"/>
                        </div>

                        <span class="text-2xl text-blue-gray-ultra-light">{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const registerData = ref<Register>({
        email: '',
        password: '',
        passwordRepeat: ''
    });

    definePageMeta({
        layout: 'clear'
    });

    const list = [
        'Bezpieczne zakupy i płatności',
        'Ponad 1000 produktów w ofercie',
        'Wysyłka w 24h'
    ];

    const loading = ref(false);
    const isUserExistsNotificationVisible = ref(false);
    let email = '';
    async function register() {
        loading.value = true;

        const response = await $fetch('/api/auth/register', {
            method: 'POST',
            body: registerData.value
        });

        if(response && response.message === 'created') {
            await navigateTo('/logowanie');
        }

        if(response && response.message === 'exists') {
            email = registerData.value.email;
            isUserExistsNotificationVisible.value = true;
        }

        loading.value = false;
    }
</script>