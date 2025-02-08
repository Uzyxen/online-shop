import { eq } from "drizzle-orm";
import db from "../connection"
import { favorites } from "../schema/favorites";
import { products } from "../schema/products";

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
            products: true
        },
    })

    return result;
}