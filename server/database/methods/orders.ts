import { eq } from "drizzle-orm";
import db from "../connection";
import { orders } from "../schema/orders";

export const getAllOrders = async () => {
    const result = await db.query.orders.findMany();

    return result;
}

export const getOrderById = async (id: number) => {
    const result = await db.query.orders.findFirst({
        where: eq(orders.id, id)
    });

    return result;
}