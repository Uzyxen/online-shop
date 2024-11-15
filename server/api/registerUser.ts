import { eq } from "drizzle-orm";
import db from "../database/connection";
import { users } from "../database/schema";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if(body.email && body.password && body.passwordRepeat) {
        if((body.password.length > 8 && body.password.length < 50) && (body.passwordRepeat.length > 8 && body.passwordRepeat.length < 50)) {
            if(body.password === body.passwordRepeat) {
                const result = await db.select().from(users).where(eq(users.email, body.email)); // get user by email

                // check if users exists
                if(result.length > 0) {
                    return {
                        message: 'user already exists'
                    }
                } else {
                    await db.insert(users).values({
                        email: body.email,
                        password: body.password
                    });
            
                    return {
                        message: 'created user'
                    }
                }
            }
        }
    }
})