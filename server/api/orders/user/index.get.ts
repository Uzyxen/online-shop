import { getOrdersByUserId } from "~/server/database/methods/orders";

export default defineAuthUserHandler(async (event) => {
    const user = event.context.user;

    if(user) {
        return await getOrdersByUserId(user.userId);
    }

    return 403;
});