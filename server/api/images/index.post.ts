import { put } from "@vercel/blob";

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);

    if(formData) {
        formData.forEach(async file => {
            const { url } = await put(file.filename!, file.data, { access: 'public' });
        });
    }
});