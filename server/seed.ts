import db from "./database/connection";
import { categoriesTable, productsTable, subcategoriesTable } from "./database/schema";

async function main() {
    // default categories

    const categories = [
        { title: 'Laptopy' },
        { title: 'Komputery' },
        { title: 'Podzespoły komputerowe' },
        { title: 'Gaming' },
    ]

    const subCategories = [
        { title: 'Laptopy', categoryId: 1 },
        { title: 'Tablety', categoryId: 1 },
        { title: 'Laptopy biznesowe', categoryId: 1 },
        { title: 'Laptopy gamingowe', categoryId: 1 },
    ]

    const products = [
        { title: 'Laptop A', subcategoryId: 1, price: '1000' },
        { title: 'Tablet B', subcategoryId: 2, price: '500' },
        { title: 'Business Laptop C', subcategoryId: 3, price: '1500' },
        { title: 'Gaming Laptop D', subcategoryId: 4, price: '2000' },
    ];

    await db.insert(categoriesTable).values(categories);
    await db.insert(subcategoriesTable).values(subCategories);
    await db.insert(productsTable).values(products);
}

main();