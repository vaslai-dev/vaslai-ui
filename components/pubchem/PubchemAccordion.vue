<script setup>
import { IconDownload } from "@tabler/icons-vue";
import { ref } from "vue";
import PubchemTable from "/components/pubchem/PubchemTable.vue";
import PubchemTable2 from "/components/pubchem/PubchemTable2.vue"

const showModal = ref(false);
const props = defineProps(['pubChemData', 'index'])
</script>

<template>
<div class="border-b-[6px]  border-blue-100 ">
    <div class=" flex justify-start py-2">
        <div class="w-11/12 flex items-end gap-3" :id="index">
            <h1 class="text-4xl mt-12 font-semibold ">{{props.index +' '+ props?.pubChemData?.TOCHeading }}</h1>
            <IconDownload  size="30" color="gray" stroke="gray" stroke-width="2" class="cursor-pointer" />


        </div>


        <!-- <div  class="ms-12  "  @click="showModal = !showModal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 mt-14 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          
        </div> -->
         


         
        
          

        
    </div>

    <div  class="bg-gray-100 p-6"><p class="font-semibold break-all">{{ props?.pubChemData?.Description }}</p>
        
        <div
        class="text-orange-700 font-bold my-3 gap-5 break-all "  
        v-if="props?.pubChemData?.hasOwnProperty('Information') &&  props?.pubChemData?.Information[0].hasOwnProperty('Value') && props?.pubChemData?.Information[0]?.Value?.hasOwnProperty('StringWithMarkup') &&
        props?.pubChemData?.Information[0]?.Value?.StringWithMarkup?.length < 3"
       >
        
        <div v-for="data in props?.pubChemData?.Information[0]?.Value?.StringWithMarkup" :keys="data">
            {{ data?.String }}        </div>
        
       
        
    
               

          
            <div  v-if="props?.pubChemData?.Information[0].hasOwnProperty('Reference')">
                {{ props?.pubChemData?.Information[0].hasOwnProperty('Reference') && props?.pubChemData?.Information[0]?.Reference[0] }}
            </div>

           
        </div>
        <div class="bg-[white] p-4 text-xl" v-else-if="props?.pubChemData?.hasOwnProperty('Information') &&  props?.pubChemData?.Information[0].hasOwnProperty('Value') && props?.pubChemData?.Information[0]?.Value?.hasOwnProperty('StringWithMarkup') &&
            props?.pubChemData?.Information[0]?.Value?.StringWithMarkup?.length > 2"  v-for="data in props?.pubChemData?.Information[0]?.Value?.StringWithMarkup" :keys="data">
            {{ data?.String }}
        </div>


        <PubchemTable v-for="info in props?.pubChemData?.Information " :keys="info?.ReferenceNumber"  :info="info"  > </PubchemTable>


        <div  v-for="(subData, subIndex)  in props?.pubChemData?.Section" :key="subData.TOCHeading" >
           <!-- <PubchemTable2></PubchemTable2> -->
           <h1 class="text-3xl mt-6 " :id="props.index+'.'+(subIndex+1)" >{{props.index+'.'+(subIndex+1) +' '+ subData?.TOCHeading }} </h1>
        <p class="break-all">
            {{ subData?.Description }}

            Read more at: <a :href="subData?.URL" class="text-blue-500 break-words ">{{ subData?.URL }}</a></p>
            <PubchemAccordion class="bg-white font-medium text-base p-8 max-w-screen-md	 " v-if="subData?.Section" v-for="(data, index) in subData?.Section" :key="data?.TOCHeading" :pubChemData="data" :index="props.index+'.'+(subIndex+1) +'.'+ (index+1)"/>
        </div>
            <!-- <h1  class="text-3xl mt-6">3D Conformer</h1>
            <p>A three-dimensional (3D) structure representation of the compound. This 3D structure is not experimentally determined, but computed by PubChem. This structure may or may not be the same as the inherent structure of the compound you would expect to see in vacuum or in the gas phase, because the underlying computational algorithm aims to generate a protein-bound structure, which would be observed in a protein-ligand complex. More detailed information on this conformer model can be found in Kim et al., J. Cheminform. 2013, 5, 1.

                Read more at: <span class="text-blue-500">https://doi.org/10.1186/1758-2946-5-1</span> </p>
                <h1  class="text-3xl mt-6">Crystal Structures</h1>
                <p>This section provides links to crystallographic information from various sources.</p> -->    
    </div>
</div>

    
</template>
