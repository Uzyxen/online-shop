import db from "../connection";

export const getAllOrders = async () => {
    const result = await db.query.orders.findMany();

    return result;
}