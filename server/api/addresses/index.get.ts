import { getAllUserAddresses } from "~/server/database/methods/addresses";

export default defineAuthUserHandler(async (event) => {
    const user = event.context.user;

    if(user) {
        return await getAllUserAddresses(user.userId);
    }
});