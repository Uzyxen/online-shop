import { eq } from "drizzle-orm";
import db from "../connection";
import { subcategories } from "../schema/subcategories";

export const getAllSubcategories = async (id: number) => {
    const result = await db.select().from(subcategories).where(eq(subcategories.categoryId, id));

    return result;
}

export const getSubcategoryByName = async (name: string) => {
    const result = await db.select({ id: subcategories.id }).from(subcategories).where(eq(subcategories.title, name));

    return result[0];
}