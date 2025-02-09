import db from "../connection";
import { productImages } from "../schema/productImages";

export const addImages = async (_productId: number, _imageUrl: string) => {
    const result = await db.insert(productImages).values({
        productId: _productId,
        imageUrl: _imageUrl
    });

    return result;
}