import { and, eq } from "drizzle-orm";
import db from "../connection";
import { sessions } from "../schema/sessions";

export const getUserSessions = async (id: number) => {
    const result = await db.select().from(sessions).where(eq(sessions.userId, id));

    return result;
}

export const deleteUserSession = async (id: number, userId: number) => {
    const result = await db.delete(sessions).where(and(eq(sessions.id, id), eq(sessions.userId, userId)));

    return result;
}