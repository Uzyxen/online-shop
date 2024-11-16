import { getRefreshTokenByToken } from "~/server/database/refreshTokens";
import { getUserById } from "~/server/database/users";

export default defineEventHandler(async (event) => {
    const cookies = parseCookies(event);
    const refreshToken = cookies.refresh_token;

    if(!refreshToken) {
        return {
            message: 'Invalid refresh token'
        }
    }

    const refreshTokenFromDB = await getRefreshTokenByToken(refreshToken);

    if(!refreshTokenFromDB) {
        return {
            message: 'Invalid refresh token'
        }
    }

    const token: any = await validateRefreshToken(refreshTokenFromDB);

    try {
        const user: User = await getUserById(token.userId);
        const { accessToken } = generateTokens(user);

        return {
            access_token: accessToken
        }
    } catch (error) {
        return {
            message: 'Something went wrong'
        }
    }
})