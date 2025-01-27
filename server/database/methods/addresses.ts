import { eq } from "drizzle-orm";
import db from "../connection";
import { addressesTable } from "../schema";

export const getAllUserAddresses = defineCachedFunction(async (id: number) => {
    const result = await db.query.addressesTable.findMany({
        where: eq(addressesTable.userId, id)
    });

    return result;
}, {
    maxAge: 5 * 60
});