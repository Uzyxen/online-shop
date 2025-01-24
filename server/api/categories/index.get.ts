import { getAllCategoriesWithSubcategories } from "~/server/database/methods/categories";

export default defineCachedEventHandler(async (event) => {
    return await getAllCategoriesWithSubcategories()
}, {
    maxAge: 5 * 60
});