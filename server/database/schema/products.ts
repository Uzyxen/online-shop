import { integer, numeric, pgTable, varchar } from "drizzle-orm/pg-core";
import { subcategories } from "./subcategories";

export const products = pgTable('products', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 100 }).notNull(),
    url: varchar({ length: 100 }).notNull(),
    price: numeric({ precision: 10, scale: 2 }).notNull(),
    subcategoryId: integer().references(() => subcategories.id, { onDelete: 'cascade' }),
});