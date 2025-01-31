import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const categories = pgTable('categories', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 100 }).notNull(),
    url: varchar({ length: 100 }).notNull(),
});
