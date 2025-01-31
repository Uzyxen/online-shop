import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const properties = pgTable('properties', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({ length: 100 }).notNull().unique(),
});