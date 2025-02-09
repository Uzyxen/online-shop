import { put } from "@vercel/blob";
import { addImages } from "~/server/database/methods/images";

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);

    if(formData) {
        const productId = formData.find(data => data.name === 'productId')?.data.toString();

        formData.forEach(async file => {
            if(file.name === 'image'){
                const { url } = await put(file.filename!, file.data, { access: 'public' });

                await addImages(Number(productId), url);
            }
        });
    }
});