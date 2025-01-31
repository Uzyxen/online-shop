import { eq, like } from "drizzle-orm";
import db from "../connection";
import { categories } from "../schema/categories";

export const getAllCategoriesWithSubcategories = async () => {
    const result = await db.query.categories.findMany();

    return result;
}

export const getCategoryByURL = async (url: string) => {
    const result = await db.select({ id: categories.id }).from(categories).where(eq(categories.url, url));

    return result[0];
}

export const getCategoriesByName = async (name: string) => {
    const result = await db.select().from(categories).where(like(categories.title, `%${name}%`));

    return result;
}