export default () => {
    const useAccessToken = () => useState('access_token');
    const isAdmin = () => useState('is_admin');

    return {
        useAccessToken,
        isAdmin
    }
}