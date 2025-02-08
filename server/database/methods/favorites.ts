import { eq } from "drizzle-orm";
import db from "../connection"
import { favorites } from "../schema/favorites";

export const addToFavorites = async (_userId: number, _productId: number) => {
    const result = await db.insert(favorites).values({
        userId: _userId,
        productId: _productId
    });

    return result;
}

export const getFromFavorites = async (_userId: number) => {
    const result = await db.query.favorites.findMany({
        where: eq(favorites.userId, _userId),
        with: {
            product: true
        },
    })

    return result.map(favorite => favorite.product);
}

export const getFavoriteIds = async (_userId: number) => {
    const result = await db.query.favorites.findMany({
        columns: {
            productId: true
        },
        where: eq(favorites.userId, _userId),
    });

    return result;
}