<template>
    <div class="flex flex-col gap-3">
        <p class="text-base font-medium">{{ caption }}</p>
        <input 
            :type="type"
            v-model="model" 
            :minlength="minLength"
            :maxlength="maxLength"
            @blur="validateLength"
            class="w-[450px] p-2.5 outline-none border border-blue-gray text-base rounded-sm"
            :placeholder="placeholder"
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
        maxLength: Number,
        placeholder: String
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