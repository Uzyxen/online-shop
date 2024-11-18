import { sql } from 'drizzle-orm';
import { datetime, decimal, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: int().notNull().primaryKey().autoincrement(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
});

export const products = mysqlTable('products', {
    id: int().notNull().primaryKey().autoincrement(),
    name: varchar({ length: 100 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }) // decimal(10, 2) -> 99999999.99
});

export const categoriesTable = mysqlTable('categories', {
    id: int().notNull().primaryKey().autoincrement(),
    name: varchar({ length: 100 }).notNull(),
});

export const refreshTokens = mysqlTable('refresh_tokens', {
    id: int().notNull().primaryKey().autoincrement(),
    token: text().unique(),
    createdAt: datetime().default(sql`now()`),
    updatedAt: datetime(), 
    userId: int().references(() => users.id, { onDelete: 'cascade' })
});