<template>
    <div class="flex h-[100vh]">
        <div class="w-3/5 flex flex-col justify-center items-center">
            <h2 class="text-5xl font-semibold text-blue mb-24">Zarejestruj się</h2>

            <form class="flex flex-col gap-12">
                <ValidateInput caption="E-mail:" type="email" />
                <ValidateInput caption="Hasło:" type="password" />

                <div>
                    <ValidateInput caption="Potwórz hasło:" type="password" />
                    <p class="mt-6">
                        Masz już konto? 
                        <NuxtLink to="/logowanie">Zaloguj się</NuxtLink>
                    </p>
                </div>

                <PrimaryButton class="w-full mt-16 h-12">Utwórz konto</PrimaryButton>
            </form>
        </div>

        <div class="bg-blue w-2/5 h-full">

        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'clear'
    });
</script>