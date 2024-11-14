<template>
    <div class="flex flex-col gap-3">
        <p class="text-base font-semibold">{{ caption }}</p>
        <input 
            :type="type"
            v-model="model" 
            :minlength="minLength"
            :maxlength="maxLength"
            @blur="validateLength"
            class="w-[500px] p-2.5 bg-gray outline-none border-b-[3px] border-gray"
            :class="{ 'border-red': error }">
        
        <span class="text-red text-right">
            {{ errorMessage }}
        </span>
    </div>
</template>

<script setup>
    const model = defineModel();

    const props = defineProps({
        caption: String,
        type: String,
        minLength: Number,
        maxLength: Number
    })

    const error = ref(false);
    const errorMessage = ref('');

    function setError(message) {
        error.value = true;
        errorMessage.value = message;
    }

    function clearError() {
        error.value = false;
        errorMessage.value = '';
    }

    function validateLength() {
        if(model.value.length <= 0) {
            setError('Pole nie może być puste');
        } else {
            if(model.value.length < props.minLength || model.value.length > props.maxLength) {
                setError('Długość nie może być mniejsza od ' + props.minLength + ' oraz większa od ' + props.maxLength);
            } else {
                clearError();
            }
        }
    }
</script>