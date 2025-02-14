import db from "../database/connection";
import { seed } from "drizzle-seed";
import { categories } from "../database/schema/categories";
import { subcategories } from "../database/schema/subcategories";
import { products } from "../database/schema/products";

async function main() {
    const database = db;
    
    await seed(database, 
        { 
            categories: categories, 
            subcategories: subcategories,
            products: products
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
                        'podzespoly-komputerowe',
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
                }),
                url: f.valuesFromArray({
                    values: [
                        'laptopy',
                        'tablety',
                        'laptopy-biznesowe',
                        'laptopy-gamingowe',
                        'tablety-graficzne'
                    ]
                }),
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
                url: f.valuesFromArray({
                    values: [
                        'laptop-dell-inspiron-15-3000',
                        'laptop-lenovo-ideapad-3',
                        'laptop-hp-pavilion-15',
                        'laptop-acer-aspire-5',
                        'laptop-asus-vivobook-15',
                        'laptop-dell-inspiron-15-3000',
                        'laptop-lenovo-ideapad-3',
                    ]
                }),
                price: f.int({ minValue: 1000, maxValue: 5000 }),
            }
        },
    }));
}

main();