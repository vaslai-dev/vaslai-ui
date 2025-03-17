<script setup>

import {defineProps} from "vue"
const router = useRouter()

const {Data} = defineProps(['Data'])
</script>

<template>
  <div class="  shadow-grey-400 bg-[#dce5f6] py-8 ">
    <div class="  cursor-pointer ms-16  flex flex-col space-y-4 rounded-b-lg rounded-t-lg   text-sky-700 ">
   <li class="  hover:text-sky-900" v-for="subData in Data" :key="subData.application_number" @click="router.push({ path: `/fda-org/${subData.application_number}` })">{{ subData?.application_number }}
     ({{ subData.brand_name }}) || {{ subData.dosage_form }} || {{ subData.route }} || ({{ subData.marketing_status }}) </li>
    </div>
    
  </div>
</template>