<script setup>

import { usePubChem } from "~/store/pubchem";

const pubChemStore = usePubChem();
const { referenceData } = storeToRefs(pubChemStore);

const showModal1 = ref(false);

const toggleModal = () => {
    showModal1.value = !showModal1.value;
}


const getrefrencedata = computed(() => {
    
    
  return referenceData.value.filter(data => data.ReferenceNumber === props?.info?.ReferenceNumber);
})

const props = defineProps(["info"])

</script>

<template>

    <div  v-for="data in getrefrencedata" :key="data.ReferenceNumber" >
        <div class="flex gap-2 text-green-600 pt-4  cursor-pointer" @click="toggleModal">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 ">
             <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
             <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
           </svg>

           <h1 v-if="data?.hasOwnProperty('SourceName')"> {{ data?.SourceName }}</h1>
        </div>

        <!-- {{ props?.info?.Value?.StringWithMarkup?.[0]?.String }} -->

        <div v-show="showModal1" class="bg-green-100 mt-4 ">
         
         <div class="grid grid-cols-3 px-8 text-xl py-4 border-b-2 " v-if="data?.hasOwnProperty('SourceName')">
             <ul>Source</ul>
             <ul class="text-blue-500">{{ data?.SourceName }}</ul>
         </div>

         <div class="grid grid-cols-3 px-8 text-xl py-4 border-b-2 " v-if="data?.hasOwnProperty('Name')">
             <ul>Record Name</ul>
             <ul>{{ data?.Name }}</ul>
         </div>

         <div class="grid grid-cols-3 px-8 text-xl py-4 border-b-2 " v-if="data?.hasOwnProperty('URL')">
             <ul>URL</ul>
             <ul class="text-blue-500 cursor-pointer">{{ data?.URL }}</ul>
         </div>

         <div class="grid grid-cols-3 px-8 text-xl py-4 border-b-2 " v-if="data?.hasOwnProperty('Description')">
            <ul>Description</ul>
            <ul >{{ data?.Description }}</ul>
        </div>

        <div class="grid grid-cols-3 px-8 text-xl py-4 border-b-2 " v-if="data?.hasOwnProperty('LicenseURL')">
            <ul>License</ul>
            <ul class="text-blue-500 cursor-pointer">{{ data?.LicenseURL }}</ul>
        </div>
         
        </div>
     </div>
</template>