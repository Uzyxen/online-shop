import { getPropertiesFromSubcategory } from "~/server/database/methods/properties";

export default defineCachedEventHandler(async (event) => {
    const subcategoryId: any = await getRouterParam(event, 'subcategoryId');

    return await getPropertiesFromSubcategory(subcategoryId);
}, {
    maxAge: 60 * 5
});