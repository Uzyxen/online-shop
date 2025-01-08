import { getAllProducts } from "~/server/database/methods/products";

export default defineEventHandler(async (event) => {
    return await getAllProducts();
});