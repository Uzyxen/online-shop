import { integer, numeric, pgTable, varchar } from "drizzle-orm/pg-core";
import { subcategories } from "./subcategories";
import { products } from "./products";

export const productImages = pgTable('product_images', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    productId: integer().references(() => products.id, { onDelete: 'cascade' }),
    imageUrl: varchar({ length: 500 }).notNull(),
});