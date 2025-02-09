import { integer, pgTable } from "drizzle-orm/pg-core";
import { products } from "./products";
import { properties } from "./properties";

export const productProperties = pgTable('product_properties', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    productId: integer().references(() => products.id, { onDelete: 'cascade' }),
    propertyId: integer().references(() => properties.id, { onDelete: 'cascade' }),
});