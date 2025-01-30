import { getProductInfo } from "~/server/database/methods/products";

export default defineCachedEventHandler(async (event) => {
    const url: any = await getRouterParam(event, 'url');

    return await getProductInfo(url);
}, {
    maxAge: 5 * 60,
});