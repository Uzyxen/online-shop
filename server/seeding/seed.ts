import * as schema from "../database/schema";
import db from "../database/connection";
import { seed } from "drizzle-seed";

async function main() {
    const database = db;
    
    await seed(database, { categories: schema.categoriesTable, subcategories: schema.subcategoriesTable }).refine((f) => ({
        categories: {
            count: 10,
            columns: {
                title: f.valuesFromArray({
                    values: [
                        'Laptopy',
                        'Komputery',
                        'Podzespoły komputerowe',
                        'Gaming',
                        'Telewizory',
                        'Smartfony',
                        'Tablety',
                        'Monitory',
                        'Drukarki',
                        'Akcesoria komputerowe'
                    ]
                })
            },
            with: {
                subcategories: 5
            }
        },
        subcategories: {
            columns: {
                title: f.valuesFromArray({
                    values: [
                        'Laptopy',
                        'Tablety',
                        'Laptopy biznesowe',
                        'Laptopy gamingowe',
                        'Tablety graficzne'
                    ]
                })
            }
        }
    }));
}

main();