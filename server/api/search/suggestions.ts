import { getCategoriesByName } from "~/server/database/methods/categories";
import { getProductsByName } from "~/server/database/methods/products";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const products = await getProductsByName(body.value);
    const categories = await getCategoriesByName(body.value);

    return {
        products,
        categories
    };
});