import 'dotenv/config';
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from '@vercel/postgres';
import * as addresses from './schema/addresses';
import * as categories from './schema/categories';
import * as products from './schema/products';
import * as properties from './schema/properties';
import * as sessions from './schema/sessions';
import * as subcategories from './schema/subcategories';
import * as subcategoryProperties from './schema/subcategoryProperties';
import * as users from './schema/users';
import * as favorites from './schema/favorites';
import * as productImages from './schema/productImages';

const db = drizzle(sql, { schema: {
    ...addresses, 
    ...categories,
    ...products,
    ...properties,
    ...sessions,
    ...subcategories,
    ...subcategoryProperties,
    ...users,
    ...favorites,
    ...productImages
}});

export default db;