<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
    const { refreshAuth } = useAuth();
    
    onMounted(() => {
      refreshAuth();
    });
</script>

<style>
  body {
    background-color: #FAFAFA;
    font-family: "Rubik", sans-serif;
  }

  body > * {
    box-sizing: border-box;
  }
</style>
