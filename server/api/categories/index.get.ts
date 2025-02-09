import { getAllCategoriesWithSubcategories } from "~/server/database/methods/categories";

export default defineEventHandler(async (event) => {
    return await getAllCategoriesWithSubcategories()
});