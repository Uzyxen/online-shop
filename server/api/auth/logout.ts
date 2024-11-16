import { deleteRefreshTokenByToken } from "~/server/database/refreshTokens";

export default defineEventHandler(async (event) => {
    const cookies = parseCookies(event);
    const refreshToken = cookies.refresh_token;

    const result = await deleteRefreshTokenByToken(refreshToken);

    if(result) {
        return {
            message: 'OK'
        }
    }
});