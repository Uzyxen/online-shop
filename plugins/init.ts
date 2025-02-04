export default defineNuxtPlugin(async (nuxtApp) => {
    const { categories } = useStore();

    const { data }: any = await useFetch('/api/categories/');
    categories.value = data.value;
});