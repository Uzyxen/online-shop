import { addProduct } from "~/server/database/methods/products";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    return addProduct(body);
});