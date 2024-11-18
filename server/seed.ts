import db from "./database/connection";
import { categoriesTable } from "./database/schema";

async function main() {
    // default categories

    const categories = [
        { name: 'Laptopy' },
        { name: 'Komputery' },
        { name: 'Podzespoły komputerowe' },
        { name: 'Gaming' },
    ]

    await db.insert(categoriesTable).values(categories);
}

main();