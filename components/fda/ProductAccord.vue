<template>
    <div class="pt-2 ">
      <div class=" border border-blue-100 rounded-b-lg rounded-t-lg ">
        <div @click="isOpen = !isOpen" class=" flex justify-between cursor-pointer items-center rounded-b-lg rounded-t-lg bg-blue-100  text-sky-700 ">
  
          <h1 class=" ml-1 p-6  font-bold text-2xl tracking-wide">{{ props.title }}</h1>
          <button class="mr-8 "> Click me</button>
  
        </div>
        <div :class="isOpen ? 'd-block' : 'hidden'">
          <div class="p-8">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border">
  
              <thead class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    DRUG NAME
                  </th>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    Active Ingredients
                  </th>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    Strength
                  </th>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    Dosage Form/Route
                  </th>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    Marketing status
                  </th>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    Te Code
                  </th>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    RLD
                  </th>
                  <th scope="col" class="px-6 py-5 border-r-2">
                    RS
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer">
                  <td class="px-6 py-4 border-r">
                    AREDIA
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    PAMIDRONATE DISODIUM
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    30MG/VIAL **Federal Register determination that product was not discontinued or withdrawn for safety
                    or effectiveness reasons**
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    INJECTABLE;INJECTION
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    Discontinued
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    None
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    Yes
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    No
                  </td>
  
                </tr>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer">
                  <td class="px-6 py-4 border-r">
                    AREDIA
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    PAMIDRONATE DISODIUM
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    30MG/VIAL **Federal Register determination that product was not discontinued or withdrawn for safety
                    or effectiveness reasons**
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    INJECTABLE;INJECTION
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    Discontinued
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    None
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    No
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    No
                  </td>
  
                </tr>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer">
                  <td class="px-6 py-4 border-r">
                    AREDIA
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    PAMIDRONATE DISODIUM
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    30MG/VIAL **Federal Register determination that product was not discontinued or withdrawn for safety
                    or effectiveness reasons**
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    INJECTABLE;INJECTION
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    Discontinued
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    None
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    No
  
                  </td>
                  <td class="px-6 py-4 border-r">
                    No
                  </td>
  
                </tr>
              </tbody>
            </table>
            <h2 class="font-semibold mt-3">Total No of Entries</h2>
  
  
          </div>
        </div>
      </div>
    </div>
  
  </template>

  <script setup>
// import {IconSearch} from '@tabler/icons-vue'
// import { IconAdjustmentsHorizontal } from '@tabler/icons-vue';
// import { IconDownload } from '@tabler/icons-vue'



const isOpen = ref(false)
// const title = defineModel()
// const emit =  defineEmits('downloadExcel')
const props = defineProps(['title'])


</script>
  <!-- <script>
  
  
  export default {
    data: () => {
      return {
        isOpen: false
      }
    },
    name: 'Accordion',
    props: {
      title: String,
    }
  
  
  }
  
  
  </script> -->