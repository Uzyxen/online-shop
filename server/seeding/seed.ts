import * as schema from "../database/schema";
import db from "../database/connection";
import { seed } from "drizzle-seed";

async function main() {
    const database = db;
    
    await seed(database, 
        { 
            categories: schema.categoriesTable, 
            subcategories: schema.subcategoriesTable,
            products: schema.productsTable
        }).refine((f) => ({
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
                    ],
                    isUnique: true
                }),
                url: f.valuesFromArray({
                    values: [
                        'laptopy',
                        'komputery',
                        'podzespoły-komputerowe',
                        'gaming',
                        'telewizory',
                        'smartfony',
                        'tablety',
                        'monitory',
                        'drukarki',
                        'akcesoria-komputerowe'
                    ],
                    isUnique: true
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
            },
            with: {
                products: 7
            }
        },
        products: {
            columns: {
                title: f.valuesFromArray({
                    values: [
                        'Laptop Dell Inspiron 15 3000',
                        'Laptop Lenovo IdeaPad 3',
                        'Laptop HP Pavilion 15',
                        'Laptop Acer Aspire 5',
                        'Laptop Asus VivoBook 15',
                        'Laptop Dell Inspiron 15 3000',
                        'Laptop Lenovo IdeaPad 3',
                    ]
                }),
                price: f.int({ minValue: 1000, maxValue: 5000 }),
            }
        },
    }));
}

main();