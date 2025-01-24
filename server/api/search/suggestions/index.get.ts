import { getCategoriesByName } from "~/server/database/methods/categories";
import { getProductsByName } from "~/server/database/methods/products";

export default defineEventHandler(async (event) => {
    const query = await getQuery(event);
    const searchTerm = query.value as string;

    const products = await getProductsByName(searchTerm);
    const categories = await getCategoriesByName(searchTerm);

    return {
        products,
        categories
    };
});