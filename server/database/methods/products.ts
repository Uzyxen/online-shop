import { count, eq, like } from "drizzle-orm";
import db from "../connection";
import { productsTable } from "../schema";

export const getProductsFromSubcategory = async (id: number) => {
    const result = await db.select().from(productsTable).where(eq(productsTable.subcategoryId, id));

    return result;
}

export const getProductsByName = async (name: string) => {
    const result = await db.selectDistinct({ title: productsTable.title }).from(productsTable).where(like(productsTable.title, `%${name}%`)).groupBy(productsTable.title);

    return result;
}

export const getAllProducts = async (offset: number) => {
    const result = await db.query.productsTable.findMany({
        limit: 20,
        offset: offset,
    });

    return result;
}

export const getNumberOfProducts = async () => {
    const result = await db.select({ count: count() }).from(productsTable);

    return result[0];
}

export const getProductInfo = async (url: string) => {
    const result = await db.select().from(productsTable).where(eq(productsTable.url, url));

    return result[0];
}

export const addProduct = async (product: any) =>{
    const result = await db.insert(productsTable).values({
        title: product.title,
        url: product.url,
        price: product.price,
        subcategoryId: product.subcategoryId
    });

    return result;
}