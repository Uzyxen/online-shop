import { eq } from "drizzle-orm";
import db from "../connection";
import { productsTable } from "../schema";

export const getProductsFromSubcategory = async (id: number) => {
    const result = await db.select().from(productsTable).where(eq(productsTable.subcategoryId, id));

    return result;
}