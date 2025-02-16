import { integer, pgTable } from "drizzle-orm/pg-core";
import { users } from "./users";

export const orders = pgTable('orders', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    userId: integer().references(() => users.id, { onDelete: 'cascade' }),
    date: integer().notNull(),
    status: integer().notNull(),
    total: integer().notNull(),
    address: integer().notNull(),
    payment: integer().notNull(),
    delivery: integer().notNull(),
    comment: integer().notNull(),
});