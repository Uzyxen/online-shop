import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    isAdmin: boolean().notNull().default(false),
});