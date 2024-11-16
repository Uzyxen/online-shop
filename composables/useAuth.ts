export default () => {
    const useAccessToken = () => useState('access_token');
    const useAccessUser = () => useState('access_user');

    const setToken = (newToken: string) => {
        const accessToken = useAccessToken();
        accessToken.value = newToken;
    }

    const setUser = (newUser: any) => {
        const accessUser = useAccessUser();
        accessUser.value = newUser;
    }

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data: any = await $fetch('/api/auth/refresh', { method: 'POST' });

                setToken(data.access_token);
                setUser(data.user);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };

    const refreshAuth = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await refreshToken();

                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        setToken,
        setUser,
        useAccessUser,
        refreshAuth
    }
}