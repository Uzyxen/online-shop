export default () => {
    const useAccessToken = () => useState('access_token');
    const isAdmin = () => useState('is_admin');

    const categories = useState('categories');
    const userFavorites = useState('user_favorites');

    return {
        useAccessToken,
        isAdmin,
        categories,
        userFavorites
    }
}