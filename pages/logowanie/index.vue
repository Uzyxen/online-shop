<template>
    <div class="flex h-[100vh]">
        <div class="w-3/5 flex flex-col justify-center items-center">
            <h2 class="text-5xl font-semibold text-blue mb-24">Zaloguj się</h2>

            <form class="flex flex-col gap-12">
                <ValidateInput caption="E-mail:" type="email" v-model="loginData.email" />

                <div>
                    <ValidateInput caption="Hasło:" type="password" v-model="loginData.password" />
                    <p class="mt-6">
                        Nie masz konta? 
                        <NuxtLink to="/rejestracja">Zrejestruj się</NuxtLink>
                    </p>
                </div>

                <PrimaryButton class="w-full mt-16 h-12">Zaloguj się</PrimaryButton>
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
</script>