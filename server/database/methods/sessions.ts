import { and, eq } from "drizzle-orm";
import db from "../connection";
import { refreshTokens } from "../schema";

export const getUserSessions = async (id: number) => {
    const result = await db.select().from(refreshTokens).where(eq(refreshTokens.userId, id));

    return result;
}

export const deleteUserSession = async (id: number, userId: number) => {
    const result = await db.delete(refreshTokens).where(and(eq(refreshTokens.id, id), eq(refreshTokens.userId, userId)));

    return result;
}