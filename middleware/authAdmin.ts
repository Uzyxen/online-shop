export default defineNuxtRouteMiddleware(async (to, from) => {
    const { useAccessToken } = useStore();
    const token: any = useAccessToken();

    if(!token.value) {
        return navigateTo('/logowanie');
    } else {
        const response: any = await $fetch('/api/auth/admin/authAdmin', {
            headers: {
                authorization: `Bearer ${token.value}`
            }
        });

        if(response.response === 403) {
            return navigateTo('/403');
        }
    }
});