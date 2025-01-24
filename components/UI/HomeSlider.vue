<template>
    <div class="w-full h-[500px] bg-gray group relative">
        <button class="absolute z-20 left-0 top-0 h-full opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-200" @click="prevSlide">
            <NuxtIcon name="solar:alt-arrow-left-linear" size="4rem" />
        </button>

        <div class="size-full flex overflow-hidden">
            <div class="size-full flex-shrink-0 transition-transform duration-1000" v-for="slide in slides" :style="{ transform: `translateX(${-100 * currentSlide}%)`, backgroundColor: slide.color }">{{ slide.title }}</div>
        </div>

        <div class="absolute w-full flex justify-center bottom-5 gap-3  z-20 opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-200">
            <button v-for="i in slides.length" class="rounded-full border w-4 h-4 border-blue transition-colors duration-500" @click="currentSlide = i - 1" :class="{ 'bg-blue': currentSlide === i - 1 }"></button>
        </div>

        <button class="absolute z-20 right-0 top-0 h-full opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-200" @click="nextSlide">
            <NuxtIcon name="solar:alt-arrow-right-linear" size="4rem" />
        </button>
    </div>
</template>

<script setup>
    // develoment only

    const slides = [
        { title: 'test 1', color: 'gray' },
        { title: 'test 2', color: 'lightgray' },
        { title: 'test 3', color: 'darkgray' },
        { title: 'test 4', color: 'gray' },
        { title: 'test 5', color: 'darkgray' },
        { title: 'test 6', color: 'lightgray' },
    ]

    const currentSlide = ref(0);

    const prevSlide = () => {
        if (currentSlide.value === 0) {
            currentSlide.value = slides.length - 1;
        } else {
            currentSlide.value--;
        }
    }

    const nextSlide = () => {
        if (currentSlide.value === slides.length - 1) {
            currentSlide.value = 0;
        } else {
            currentSlide.value++;
        }
    }
</script>