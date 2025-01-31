import { eq } from "drizzle-orm";
import db from "../connection";
import { addresses } from "../schema/addresses";

export const getAllUserAddresses = async (id: number) => {
    const result = await db.query.addresses.findMany({
        where: eq(addresses.userId, id)
    });

    return result;
}