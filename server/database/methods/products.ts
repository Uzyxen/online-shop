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

export const getProductInfo = async (id: number) => {
    const result = await db.select().from(productsTable).where(eq(productsTable.id, id));

    return result[0];
}