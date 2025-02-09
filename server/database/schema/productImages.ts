import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { products } from "./products";
import { relations } from "drizzle-orm";

export const productImages = pgTable('product_images', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    productId: integer().references(() => products.id, { onDelete: 'cascade' }),
    imageUrl: varchar({ length: 500 }).notNull(),
});

export const productsRelations = relations(products, ({ many }) => ({
    images: many(productImages), 
}));

export const productImagesRelations = relations(productImages, ({ one }) => ({
    product: one(products, {
        fields: [productImages.productId],
        references: [products.id],
    }),
}));
