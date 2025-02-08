export default defineNuxtPlugin(async (nuxtApp) => {
    const { categories, userFavorites, useAccessToken } = useStore();
    const token = useAccessToken();

    const { data }: any = await useFetch('/api/categories/');
    categories.value = data.value;

    const { data: favorites }: any = await useFetch('/api/favorites/products', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    });
    userFavorites.value = favorites.value.response;
});