import { eq } from "drizzle-orm";
import db from "../connection";
import { subcategoriesTable } from "../schema";


export const getAllSubcategories = async (id: number) => {
    const result = await db.select().from(subcategoriesTable).where(eq(subcategoriesTable.categoryId, id));

    return result;
}