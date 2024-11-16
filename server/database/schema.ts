import { decimal, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: int().notNull().primaryKey().autoincrement(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
});

export const products = mysqlTable('products', {
    id: int().notNull().primaryKey().autoincrement(),
    name: varchar({ length: 100 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }) // decimal(10, 2) -> 99999999.99
})