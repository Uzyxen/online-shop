import { reset } from "drizzle-seed";
import db from "../database/connection";
import * as addresses from '../database/schema/addresses';
import * as categories from '../database/schema/categories';
import * as products from '../database/schema/products';
import * as properties from '../database/schema/properties';
import * as sessions from '../database/schema/sessions';
import * as subcategories from '../database/schema/subcategories';
import * as subcategoryProperties from '../database/schema/subcategoryProperties';
import * as users from '../database/schema/users';

async function main() {
    const database = db;
    await reset(database, {
            ...addresses,
            ...categories,
            ...products,
            ...properties,
            ...sessions,
            ...subcategories,
            ...subcategoryProperties,
            ...users,
        }
    );
}

main();