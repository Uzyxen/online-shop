import { eq } from "drizzle-orm";
import db from "./connection";
import { sessions } from "./schema/sessions";

export const getRefreshTokenByToken = async (token: string) => {
    const result = await db.select().from(sessions).where(eq(sessions.token, token));

    if(result[0]) return result[0].token;
}

export const deleteRefreshTokenByToken = async (token: string) => {
    const result = await db.delete(sessions).where(eq(sessions.token, token));

    return result;
}