export default defineNuxtPlugin(async (nuxtApp) => {
    const { useAccessToken, isAdmin } = useStore();

    const token = useAccessToken();
    const admin = isAdmin();

    if(!token.value) {
        const { data }: any = await useFetch('/api/auth/refresh', {
            method: 'post'
        });

        if(data.value?.access_token) {
            token.value = data.value.access_token;
        }

        if(data.value?.is_admin) {
            admin.value = data.value.is_admin
        }

        console.log(data.value);
    }
});