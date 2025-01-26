import db from "~/server/database/connection";
import { addressesTable } from "~/server/database/schema";

export default defineAuthUserHandler(async (event) => {
    const user = event.context.user;
    const body = await readBody(event);

    if(user) {
        await db.insert(addressesTable).values({
            firstName: body.firstName,
            lastName: body.lastName,
            street: body.street,
            streetNumber: body.streetNumber,
            city: body.city,
            zip: body.zip,
            phoneNumber: body.phoneNumber,
            userId: user.userId,
            selected: false
        });

        return {
            message: 'created'
        }
    }
});