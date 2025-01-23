export default () => {
    const useAccessToken = () => useState('access_token');
    const isAdmin = () => useState('is_admin');

    const categories = useState('categories');

    return {
        useAccessToken,
        isAdmin,
        categories
    }
}