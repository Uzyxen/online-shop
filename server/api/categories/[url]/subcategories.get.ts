import { getCategoryByURL } from "~/server/database/methods/categories";
import { getAllSubcategories } from "~/server/database/methods/subcategories";

export default defineCachedEventHandler(async (event) => {
    const url: any = await getRouterParam(event, 'url');

    const category = await getCategoryByURL(url);
    return await getAllSubcategories(category.id);
}, {
    maxAge: 5 * 60
});