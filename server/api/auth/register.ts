import { eq } from "drizzle-orm";
import db from "~/server/database/connection";
import { users } from "~/server/database/schema";
import bcrypt from 'bcrypt'

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
                    const salt = await bcrypt.genSalt();
                    const hashedPassword = await bcrypt.hash(body.password, salt);

                    await db.insert(users).values({
                        email: body.email,
                        password: hashedPassword
                    });
            
                    return {
                        message: 'created'
                    }
                }
            }
        }
    }
})