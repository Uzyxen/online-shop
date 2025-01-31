import { integer, pgTable } from "drizzle-orm/pg-core";
import { subcategories } from "./subcategories";
import { properties } from "./properties";

export const subcategoryProperties = pgTable('subcategory_properties', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    subcategoryId: integer().references(() => subcategories.id, { onDelete: 'cascade' }),
    propertyId: integer().references(() => properties.id, { onDelete: 'cascade' }),
});