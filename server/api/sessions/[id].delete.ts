import { deleteUserSession } from "~/server/database/methods/sessions";

export default defineAuthUserHandler(async (event) => {
    const id: any = await getRouterParam(event, 'id');
    const user = event.context.user;

    if(user) {
        return await deleteUserSession(id, user.userId);
    }
});