import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const sessions = pgTable('sessions', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    token: text().unique(),
    createdAt: timestamp({ precision: 0 }).defaultNow(),
    updatedAt: timestamp({ precision: 0 }),
    userId: integer().references(() => users.id, { onDelete: 'cascade' }),
});