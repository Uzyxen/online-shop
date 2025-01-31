import { getRefreshTokenByToken } from "~/server/database/refreshTokens";
import { getUserById } from "~/server/database/methods/users";

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

    try {
        const token: any = await validateRefreshToken(refreshTokenFromDB);
        const user: User = await getUserById(token.userId);

        const { accessToken } = generateTokens(user);

        return {
            access_token: accessToken,
            is_admin: user.isAdmin
        }
    } catch (error) {
        return {
            message: 'Something went wrong'
        }
    }
})