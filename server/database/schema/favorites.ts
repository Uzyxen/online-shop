import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";
import { products } from "./products";

export const favorites = pgTable('favorites', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    userId: integer().references(() => users.id, { onDelete: 'cascade' }),
    productId: integer().references(() => products.id, { onDelete: 'cascade' }),
});
