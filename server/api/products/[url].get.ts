import { getProductInfo } from "~/server/database/methods/products";

export default defineEventHandler(async (event) => {
    const url: any = await getRouterParam(event, 'url');

    return await getProductInfo(url);
});