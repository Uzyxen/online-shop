import db from "../connection"
import { favorites } from "../schema/favorites";

export const addToFavorites = async (_userId: number, _productId: number) => {
    const result = await db.insert(favorites).values({
        userId: _userId,
        productId: _productId
    });

    return result;
}