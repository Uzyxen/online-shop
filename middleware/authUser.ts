const { useAccessToken } = useStore();

export default defineNuxtRouteMiddleware(async (to, from) => {
    const token: any = useAccessToken();

    if(!token.value) {
        return navigateTo('/logowanie');
    } else {
        const response = await $fetch('/api/auth/authUser', {
            headers: {
                authorization: `Bearer ${token.value}`
            }
        });

        if(!response) {
            return navigateTo('/logowanie');
        }
    }
});