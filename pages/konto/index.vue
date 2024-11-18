<template>
    <div class="px-20">
        
    </div>
</template>

<script setup>
    const userData = ref({
        firstName: '',
        lastName: ''
    })

    definePageMeta({
        middleware: 'auth-user'
    })
</script>