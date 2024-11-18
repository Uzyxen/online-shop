import { getAllCategories } from "~/server/database/methods/categories";

export default defineEventHandler(async (event) => {
    return await getAllCategories()
});