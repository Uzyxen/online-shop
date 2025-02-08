import { deleteFavorite } from "~/server/database/methods/favorites";

export default defineAuthUserHandler(async (event) => {
    const id: any = await getRouterParam(event, 'id');
    const user = event.context.user;
    
    if(user) {
        return await deleteFavorite(user.userId, id);
    }
});