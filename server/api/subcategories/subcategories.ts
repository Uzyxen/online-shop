import { getCategoryByName } from "~/server/database/methods/categories";
import { getAllSubcategories } from "~/server/database/methods/subcategories";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const category = await getCategoryByName(body.name);
    return await getAllSubcategories(category.id);
});