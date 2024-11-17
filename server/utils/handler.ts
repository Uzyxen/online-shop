import type { EventHandler, EventHandlerRequest } from 'h3';

export const defineAuthUserHandler = <T extends EventHandlerRequest, D> (handler: EventHandler<T, D>): EventHandler<T, D> =>
    defineEventHandler<T>(async event => {
        try {
            const token: any = event.node.req.headers['authorization']?.split(' ')[1];

            if(token) {
                const user = await useAuth(token);

                if(user) {
                    event.context.user = user;
                    const response = await handler(event);
                    return { response };
                } else {
                    return { error: 'Unauthorized', statusCode: 401 };
                }
            } else {
                return { error: 'Token not provided', statusCode: 400 };
            }
        } catch(error) {
            return { error: 'Internal Server Error', details: error, statusCode: 500 };
        }
    });