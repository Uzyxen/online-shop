import jwt from 'jsonwebtoken';

// generate

const generateAccessToken = (user: User) => {
    const config = useRuntimeConfig();

    return jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, config.jwtAccessSecret, {
        expiresIn: '10m'
    });
}

const generateRefreshToken = (user: User) => {
    const config = useRuntimeConfig();

    return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
        expiresIn: '30d'
    });
}

export const generateTokens = (user: User) => { 
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
};

// validate

export const validateRefreshToken = async (token: string) => {
    const config = useRuntimeConfig();

    const decoded: any = jwt.verify(token, config.jwtRefreshSecret);

    if(decoded) {
        return decoded;
    }
}

export const validateAccessToken = async (token: string) => {
    const config = useRuntimeConfig();

    try {
        const user =  jwt.verify(token, config.jwtAccessSecret);
        return user;

    } catch (error) {
        return null;
    }
}

export const useAuth = (token: string) => {
    try {
        const user = validateAccessToken(token);
        return user;
    } catch (error) {
        return null;
    }
};

// send

export const sendRefreshToken = (event: any, token: any) => {
    setCookie(event, 'refresh_token', token, {
        httpOnly: true,
        sameSite: true
    });
}