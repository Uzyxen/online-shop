export default defineAuthUserHandler(async (event) => {
    const user = event.context.user;
    return { user }
});