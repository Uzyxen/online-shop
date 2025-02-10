import { getPropertiesFromSubcategory } from "~/server/database/methods/properties";

export default defineEventHandler(async (event) => {
    const subcategoryId: any = await getRouterParam(event, 'subcategoryId');

    return await getPropertiesFromSubcategory(subcategoryId);
});