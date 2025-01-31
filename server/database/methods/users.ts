import { eq } from "drizzle-orm";
import db from "../connection";
import { users } from "../schema/users";

export const getUserById = async (id: number) => {
    const result = await db.select().from(users).where(eq(users.id, id));

    return result[0];
}