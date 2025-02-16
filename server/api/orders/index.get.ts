import { getAllOrders } from "~/server/database/methods/orders";

export default defineAuthUserHandler(async (event) => {
    const user: User = event.context.user;

    if(user && user.isAdmin) {
        return await getAllOrders();
    }

    return 403;
});