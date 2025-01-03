import { eq, like } from "drizzle-orm";
import db from "../connection";
import { productsTable } from "../schema";

export const getProductsFromSubcategory = async (id: number) => {
    const result = await db.select().from(productsTable).where(eq(productsTable.subcategoryId, id));

    return result;
}

export const getProductsByName = async (name: string) => {
    const result = await db.selectDistinct().from(productsTable).where(like(productsTable.title, `%${name}%`));

    return result;
}