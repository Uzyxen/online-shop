import { integer, pgTable } from "drizzle-orm/pg-core";
import { subcategories } from "./subcategories";
import { properties } from "./properties";
import { relations } from "drizzle-orm";
import { categories } from "./categories";

export const subcategoryProperties = pgTable('subcategory_properties', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    subcategoryId: integer().references(() => subcategories.id, { onDelete: 'cascade' }),
    propertyId: integer().references(() => properties.id, { onDelete: 'cascade' }),
});

export const subcategoryPropertiesRelations = relations(subcategoryProperties, ({ one }) => ({
    subcategory: one(subcategories, {
        fields: [subcategoryProperties.subcategoryId],
        references: [subcategories.id],
    }),
    property: one(properties, {
        fields: [subcategoryProperties.propertyId],
        references: [properties.id],
    }),
}));

export const subcategoriesRelations = relations(subcategories, ({ one, many }) => ({
    category: one(categories, {
        fields: [subcategories.categoryId],
        references: [categories.id],
    }),
    properties: many(subcategoryProperties),
}));