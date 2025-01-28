import { getUserSessions } from "~/server/database/methods/sessions";

export default defineAuthUserHandler(async (event) => {
    const user = event.context.user;

    if(user) {
        return await getUserSessions(user.userId);
    }
});