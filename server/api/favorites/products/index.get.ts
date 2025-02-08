import { getFavoriteIds } from "~/server/database/methods/favorites";

export default defineAuthUserHandler(async (event) => {
    const user = event.context.user;
    
    if(user) {
        return await getFavoriteIds(user.userId);
    }
});