import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { categories } from "./categories";
import { relations } from "drizzle-orm";

export const subcategories = pgTable('subcategories', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 100 }).notNull(),
    categoryId: integer().references(() => categories.id, { onDelete: 'cascade' }),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
    subcategories: many(subcategories), 
}));

export const subcategoriesRelations = relations(subcategories, ({ one }) => ({
    category: one(categories, {
        fields: [subcategories.categoryId],
        references: [categories.id],
    }),
}));