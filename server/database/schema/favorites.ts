import { integer, pgTable } from "drizzle-orm/pg-core";
import { users } from "./users";
import { products } from "./products";
import { relations } from "drizzle-orm";

export const favorites = pgTable('favorites', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    userId: integer().references(() => users.id, { onDelete: 'cascade' }),
    productId: integer().references(() => products.id, { onDelete: 'cascade' }),
});

export const favoritesRelations = relations(favorites, ({ one }) => ({
    user: one(users, {
        fields: [favorites.userId],
        references: [users.id],
    }),
    product: one(products, {
        fields: [favorites.productId],
        references: [products.id],
    })
}));