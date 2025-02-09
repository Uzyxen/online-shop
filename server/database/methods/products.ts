import { count, eq, like } from "drizzle-orm";
import db from "../connection";
import { products } from "../schema/products";

export const getProductsFromSubcategory = async (id: number) => {
    const result = await db.select().from(products).where(eq(products.subcategoryId, id));

    return result;
}

export const getProductsByName = async (name: string) => {
    const result = await db.selectDistinct({ title: products.title }).from(products).where(like(products.title, `%${name}%`)).groupBy(products.title);

    return result;
}

export const getAllProducts = async (offset: number) => {
    const result = await db.query.products.findMany({
        limit: 20,
        offset: offset,
        with: {
            images: true
        }
    });

    return result;
}

export const getNumberOfProducts = async () => {
    const result = await db.select({ count: count() }).from(products);

    return result[0];
}

export const getProductInfo = async (url: string) => {
    const result = await db.select().from(products).where(eq(products.url, url));

    return result[0];
}

export const addProduct = async (product: any) =>{
    const result = await db.insert(products).values({
        title: product.title,
        url: convertToUrl(product.title),
        description: product.description,
        price: product.price,
        subcategoryId: product.subcategoryId
    }).returning({ insertedId: products.id });

    return result[0].insertedId;
}