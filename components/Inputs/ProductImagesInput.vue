<template>
    <div class="grid grid-cols-3 gap-4">
        <div>
            <label for="file-input" class="bg-light-gray border-2 border-blue-gray h-40 flex justify-center items-center cursor-pointer">
                <NuxtIcon name="solar:gallery-download-linear" size="4.2rem" class="text-black" />
            </label>

            <input class="hidden" type="file" id="file-input" multiple accept="image/*" @change="handleImageUpload" ref="fileInput">
        </div>

        <SelectedImageBlock v-for="image in images" :key="image.id" :image="image" />
    </div>
</template>

<script setup>
    const emit = defineEmits(['upload']);

    const images = ref([]);
    const formData = new FormData();

    function handleImageUpload(event) {
        const selectedImages = Array.from(event.target.files);

        selectedImages.forEach(image => {
            const imageUrl = URL.createObjectURL(image);

            images.value.push({ id: Date.now() + Math.random(), url: imageUrl, file: image });
            formData.append('image', image);
        });

        emit('upload', formData);
    }
</script>