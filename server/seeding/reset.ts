import * as schema from "../database/schema";
import { reset } from "drizzle-seed";
import db from "../database/connection";

async function main() {
    const database = db;
    await reset(database, schema);
}

main();