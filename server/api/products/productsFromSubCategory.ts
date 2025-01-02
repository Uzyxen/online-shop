import { getProductsFromSubcategory } from "~/server/database/methods/products";
import { getSubcategoryByName } from "~/server/database/methods/subcategories";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const subCategory = await getSubcategoryByName(body.name);
    return await getProductsFromSubcategory(subCategory.id);
});