export default defineAuthUserHandler(async (event) => {
    const user: User = event.context.user;

    if(user.isAdmin) {
        return { user }
    }

    return 403;
});