import { eq } from "drizzle-orm";
import db from "../connection";
import { refreshTokens } from "../schema";

export const getUserSessions = async (id: number) => {
    const result = await db.select().from(refreshTokens).where(eq(refreshTokens.userId, id));

    return result;
}