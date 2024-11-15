import { eq } from "drizzle-orm";
import db from "~/server/database/connection";
import { users } from "~/server/database/schema";
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = await db.select().from(users).where(eq(users.email, body.email)); 

    // email exists in database
    if(result.length > 0) {
        const passwordHash = result[0].password; // password hash
        const passwordVerified = await bcrypt.compare(body.password, passwordHash);

        if(passwordVerified) {
            return {
                message: 'password verified'
            }
        } else {
            return {
                message: 'Invalid credentials'
            }
        }
    } else {
        return {
            message: 'user does not exists'
        }
    }
})