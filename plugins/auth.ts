export default defineNuxtPlugin(async (nuxtApp) => {
    const { useAccessToken } = useStore();
    const token = useAccessToken();

    if(!token.value) {
        const { data }: any = await useFetch('/api/auth/refresh', {
            method: 'post'
        });

        if(data.value?.access_token) {
            token.value = data.value.access_token;
        }
    }
});