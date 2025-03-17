<script setup>
import {IconSearch} from '@tabler/icons-vue'
import { IconAdjustmentsHorizontal } from '@tabler/icons-vue';
import { IconDownload } from '@tabler/icons-vue'



const searchQuery = ref('')
const title = defineModel()
const emit =  defineEmits('downloadExcel')
const props = defineProps(['isSearch', 'isDownload', 'isFilter'])


</script>
<template>
    <div class="flex justify-between">
        <h6 class="text-lg font-bold dark:text-white">   <slot>
            
        </slot> 
    </h6>
        
        <div class="flex align-middle gap-3 justify-center">
            <div class="relative mr-3 md:mr-0 hidden md:block" v-if="props.isSearch">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="email-adress-icon" v-model="title"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                            placeholder="Search by NCTID or name">
                    </div>
            <IconDownload v-if="props.isDownload" size="25" color="gray" stroke="gray" stroke-width="1" class="cursor-pointer" @click="emit('downloadExcel')"/>
            <IconAdjustmentsHorizontal v-if="props.isFilter" size="25" color="gray" stroke="gray" stroke-width="1"/>
        </div>
    </div>
</template>
