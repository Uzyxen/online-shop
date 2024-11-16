import { eq } from "drizzle-orm";
import db from "./connection";
import { refreshTokens } from "./schema";

export const getRefreshTokenByToken = async (token: string) => {
    const result = await db.select().from(refreshTokens).where(eq(refreshTokens.token, token));

    if(result[0]) return result[0].token;
}