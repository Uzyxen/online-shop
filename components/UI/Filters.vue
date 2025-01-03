<template>
    <div class="w-72 h-fit bg-[#FFF] shadow-md">
        <ul v-for="i in 4" class="p-3" :key="i">
            type of filter {{ i }}
            <li v-for="j in 5" class="pl-3" :key="j">
                <input type="checkbox" class="ml-2" :id="'filter-' + i + j"/>
                <label :for="'filter-' + i + j">Filter {{ j }}</label>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>