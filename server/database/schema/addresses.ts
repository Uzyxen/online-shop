import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const addresses = pgTable('addresses', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    firstName: varchar({ length: 100 }).notNull(),
    lastName: varchar({ length: 100 }).notNull(),
    street: varchar({ length: 50 }).notNull(),
    streetNumber: varchar({ length: 15 }).notNull(),
    city: varchar({ length: 50 }).notNull(),
    zip: varchar({ length: 10 }).notNull(),
    phoneNumber: varchar({ length: 9 }).notNull(),
    selected: boolean(),
    userId: integer().references(() => users.id, { onDelete: 'cascade' }),
});