<template>
    <div>
        <h1 class="text-5xl text-center pt-5">Konto</h1>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth-user'
    })
</script>