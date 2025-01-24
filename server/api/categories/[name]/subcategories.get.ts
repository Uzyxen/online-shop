import { getCategoryByName } from "~/server/database/methods/categories";
import { getAllSubcategories } from "~/server/database/methods/subcategories";

export default defineCachedEventHandler(async (event) => {
    const name: any = await getRouterParam(event, 'name');

    const category = await getCategoryByName(name);
    return await getAllSubcategories(category.id);
}, {
    maxAge: 5 * 60
});