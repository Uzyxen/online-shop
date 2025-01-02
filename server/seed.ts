import db from "./database/connection";
import { categoriesTable, subcategoriesTable } from "./database/schema";

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

    await db.insert(categoriesTable).values(categories);
    await db.insert(subcategoriesTable).values(subCategories);
}

main();