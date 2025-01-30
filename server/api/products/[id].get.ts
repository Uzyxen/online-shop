import { getProductInfo } from "~/server/database/methods/products";

export default defineEventHandler(async (event) => {
    const id: any = await getRouterParam(event, 'id');

    return await getProductInfo(id);
});