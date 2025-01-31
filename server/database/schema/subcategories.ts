import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { categories } from "./categories";

export const subcategories = pgTable('subcategories', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 100 }).notNull(),
    categoryId: integer().references(() => categories.id, { onDelete: 'cascade' }),
});