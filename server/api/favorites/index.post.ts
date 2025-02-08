import { addToFavorites } from "~/server/database/methods/favorites";

export default defineAuthUserHandler(async (event) => {
    const user = event.context.user;
    const body = await readBody(event);
    const { productId } = body;

    return await addToFavorites(user.userId, productId);
});