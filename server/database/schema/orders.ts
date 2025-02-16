import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const orders = pgTable('orders', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    userId: integer().references(() => users.id, { onDelete: 'cascade' }),
    date: varchar().notNull(),
    status: varchar().notNull(),
    total: integer().notNull(),
    address: varchar().notNull(),
    payment: varchar().notNull(),
    delivery: varchar().notNull(),
    comment: varchar().notNull(),
});