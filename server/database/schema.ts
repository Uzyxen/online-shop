import { sql } from 'drizzle-orm';
import { boolean, timestamp, numeric, integer, text, varchar, pgTable } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    isAdmin: boolean().notNull().default(false),
});

export const products = pgTable('products', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({ length: 100 }).notNull(),
    price: numeric({ precision: 10, scale: 2 })
});

export const refreshTokens = pgTable('refresh_tokens', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    token: text().unique(),
    createdAt: timestamp({ precision: 6 }).default(sql`now()`),
    updatedAt: timestamp({ precision: 6 }),
    userId: integer().references(() => users.id, { onDelete: 'cascade' }),
});

export const categoriesTable = pgTable('categories', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 100 }).notNull(),
});

export const subcategoriesTable = pgTable('subcategories', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 100 }).notNull(),
    categoryId: integer().references(() => categoriesTable.id, { onDelete: 'cascade' }),
});

export const productsTable = pgTable('products', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 100 }).notNull(),
    price: numeric({ precision: 10, scale: 2 }).notNull(),
    subcategoryId: integer().references(() => subcategoriesTable.id, { onDelete: 'cascade' }),
});

export const propertiesTable = pgTable('properties', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({ length: 100 }).notNull().unique(),
});

export const subcategoryProperties = pgTable('subcategory_properties', {
    id: integer().notNull().primaryKey().generatedByDefaultAsIdentity(),
    subcategoryId: integer().references(() => subcategoriesTable.id, { onDelete: 'cascade' }),
    propertyId: integer().references(() => propertiesTable.id, { onDelete: 'cascade' }),
});
