import { getOrderById } from "~/server/database/methods/orders";

export default defineAuthUserHandler(async (event) => {
    const user: User = event.context.user;
    const id: any = await getRouterParam(event, 'id');

    if(user && user.isAdmin) {
        return await getOrderById(id);
    }

    return 403;
});