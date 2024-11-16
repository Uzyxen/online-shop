import { getUserById } from "../database/users";

export default defineEventHandler(async (event) => {
    const token: any = event.node.req.headers['authorization']?.split(' ')[1];
    const decoded: any = validateAccessToken(token);

    if(decoded === null) {
        return;
    } 

    try {
        const userId = decoded.userId;
        const user = await getUserById(userId);  

        event.context.auth = { user }
    } catch (error) {
        return;
    }
});