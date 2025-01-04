import db from "./database/connection";
import { categoriesTable, productsTable, propertiesTable, subcategoriesTable, subcategoryProperties } from "./database/schema";

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

    const properties = [
        { name: 'Procesor' },
        { name: 'Pamięć RAM' },
        { name: 'Dysk' },
        { name: 'Karta graficzna' },
    ]

    const _subcategoryProperties = [
        { subcategoryId: 1, propertyId: 1 },
        { subcategoryId: 1, propertyId: 2 },
        { subcategoryId: 1, propertyId: 3 },
        { subcategoryId: 1, propertyId: 4 },
        { subcategoryId: 2, propertyId: 1 },
        { subcategoryId: 2, propertyId: 2 },
        { subcategoryId: 2, propertyId: 3 },
        { subcategoryId: 2, propertyId: 4 },
        { subcategoryId: 3, propertyId: 1 },
        { subcategoryId: 3, propertyId: 2 },
        { subcategoryId: 3, propertyId: 3 },
        { subcategoryId: 3, propertyId: 4 },
        { subcategoryId: 4, propertyId: 1 },
        { subcategoryId: 4, propertyId: 2 },
        { subcategoryId: 4, propertyId: 3 },
        { subcategoryId: 4, propertyId: 4 },
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
    await db.insert(propertiesTable).values(properties);
    await db.insert(subcategoryProperties).values(_subcategoryProperties);
}

main();