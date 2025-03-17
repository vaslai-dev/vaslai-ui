<script setup>
import {ref} from 'vue'
import  SearchList from "~/components/fda/SearchList.vue";
import {defineProps} from "vue"
const showModal = ref(false)

const {fdaData: fdaDataS } = defineProps(['fdaData'])
</script>

<template>
<div class="my-4"  >
    <!-- v-for="data in fdaDataS" :key="fdaData.application_number" -->
    <div class="  border shadow-xl  bg-blue-100 border-blue-100 rounded-b-lg rounded-t-lg">
        <h1 class="cursor-pointer  text-xl  text-grey-300 font-bold my-3  ms-8" @click="showModal = !showModal">{{ fdaData && fdaData[0].brand_name }}</h1>
    </div>
    <SearchList v-show="showModal " :Data="fdaData" />
</div>
        
</template>