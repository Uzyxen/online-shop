import { eq } from "drizzle-orm";
import db from "../connection";
import { subcategoriesTable } from "../schema";


export const getAllSubcategories = async (id: number) => {
    const result = await db.select().from(subcategoriesTable).where(eq(subcategoriesTable.categoryId, id));

    return result;
}

export const getSubcategoryByName = async (name: string) => {
    const result = await db.select({ id: subcategoriesTable.id }).from(subcategoriesTable).where(eq(subcategoriesTable.title, name));

    return result[0];
}