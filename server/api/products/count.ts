import { getNumberOfProducts } from "~/server/database/methods/products";

export default defineEventHandler(async (event) => {
    return await getNumberOfProducts();
});