import db from "../connection";
import { categoriesTable } from "../schema";


export const getAllCategories = async () => {
    const result = await db.select().from(categoriesTable);

    return result;
}