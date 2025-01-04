import { sql } from 'drizzle-orm';
import { boolean, datetime, decimal, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: int().notNull().primaryKey().autoincrement(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    isAdmin: boolean().notNull().default(false),
});

export const products = mysqlTable('products', {
    id: int().notNull().primaryKey().autoincrement(),
    name: varchar({ length: 100 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }) // decimal(10, 2) -> 99999999.99
});

export const refreshTokens = mysqlTable('refresh_tokens', {
    id: int().notNull().primaryKey().autoincrement(),
    token: text().unique(),
    createdAt: datetime().default(sql`now()`),
    updatedAt: datetime(), 
    userId: int().references(() => users.id, { onDelete: 'cascade' })
});

export const categoriesTable = mysqlTable('categories', {
    id: int().notNull().primaryKey().autoincrement(),
    title: varchar({ length: 100 }).notNull(),
});

export const subcategoriesTable = mysqlTable('subcategories', {
    id: int().notNull().primaryKey().autoincrement(),
    title: varchar({ length: 100 }).notNull(),
    categoryId: int().references(() => categoriesTable.id, { onDelete: 'cascade' })
});

export const productsTable = mysqlTable('products', {
    id: int().notNull().primaryKey().autoincrement(),
    title: varchar({ length: 100 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }).notNull(),
    subcategoryId: int().references(() => subcategoriesTable.id, { onDelete: 'cascade' })
});

export const propertiesTable = mysqlTable('properties', {
    id: int().notNull().primaryKey().autoincrement(),
    name: varchar({ length: 100 }).notNull().unique(),
});

export const subcategoryProperties = mysqlTable('subcategory_properties', {
    id: int().notNull().primaryKey().autoincrement(),
    subcategoryId: int().references(() => subcategoriesTable.id, { onDelete: 'cascade' }),
    propertyId: int().references(() => propertiesTable.id, { onDelete: 'cascade' }),
});
