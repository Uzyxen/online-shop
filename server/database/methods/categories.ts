import { eq, like } from "drizzle-orm";
import db from "../connection";
import { categoriesTable } from "../schema";

export const getAllCategories = async () => {
    const result = await db.select().from(categoriesTable);

    return result;
}

export const getCategoryByName = async (name: string) => {
    const result = await db.select({ id: categoriesTable.id }).from(categoriesTable).where(eq(categoriesTable.title, name));

    return result[0];
}

export const getCategoriesByName = async (name: string) => {
    const result = await db.select().from(categoriesTable).where(like(categoriesTable.title, `%${name}%`));

    return result;
}