import { eq } from "drizzle-orm";
import db from "~/server/database/connection";
import { refreshTokens, users } from "~/server/database/schema";
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = await db.select().from(users).where(eq(users.email, body.email)); 

    // email exists in database
    if(result.length > 0) {
        const passwordHash = result[0].password; // password hash
        const passwordVerified = await bcrypt.compare(body.password, passwordHash);

        if(passwordVerified) {
            const user = result[0] as User;
            const { accessToken, refreshToken } = generateTokens(user);

            // save refresh token in db
            await db.insert(refreshTokens).values({ 
                token: refreshToken,
                userId: user.id
            });

            // send refresh token to the http-only cookie

            sendRefreshToken(event, refreshToken); 

            return {
                access_token: accessToken
            }
        } else {
            return {
                message: 'Nieprawidłowe dane logowanie!'
            }
        }
    } else {
        return {
            message: 'Nie znaleziono użytkownika o takich danych!'
        }
    }
})