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

            await db.insert(refreshTokens).values({ // save refresh token in db
                token: refreshToken,
                userId: user.id
            });

            sendRefreshToken(event, refreshToken); // send refresh token to the http-only cookie

            return {
                access_token: accessToken
            }
        } else {
            return {
                message: 'Invalid credentials'
            }
        }
    } else {
        return {
            message: 'user does not exist'
        }
    }
})