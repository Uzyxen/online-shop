import { eq } from "drizzle-orm";
import db from "../connection";
import { subcategoryProperties } from "../schema/subcategoryProperties";

export const getPropertiesFromSubcategory = async (subcategoryId: number) => {
    const result = await db.query.subcategoryProperties.findMany({
        columns: {},
        where: eq(subcategoryProperties.subcategoryId, subcategoryId),
        with: {
            property: true,
        }
    })

    return result;
}