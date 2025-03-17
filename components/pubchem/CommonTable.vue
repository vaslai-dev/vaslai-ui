<script setup>



import PubchemAccordion from "../../components/pubchem/PubchemAccordion.vue";

import PubchemSubAccordion from "../../components/pubchem/PubchemSubAccordion.vue";




const props = defineProps({
    pubchemDatas: Object
});


const molecularFormula = computed(()=>{
    // track object for formula
    return ""
    // props?.pubchemDatas?.Section?.Section[2] ?? ''
    // ?.Section[2]?.Information[0]?.Value?.StringWithMarkup[0]?.String



})


</script>

<template>

    <div  class="  border-8 border-blue-100 ">
        <table class=" table-auto  border-collapse   "   >
           
           <thead>
            <tr >
                <th scope="col" ></th>
                <th scope="col"></th>
            </tr>
           </thead>
           <tbody>
            <tr class="border-b-2 px-8">
                <td class="w-1/5 font-semibold pl-4" >PubChem {{ pubchemDatas?.RecordType }}</td>
                <td class="w-4/5" >{{ pubchemDatas?.RecordNumber }}</td>
                
            </tr>
            <tr class="border-b-2">
                <td class="w-1/5 font-semibold pl-4"> Structure</td>
                <td  class="w-4/5"><div class="grid grid-cols-8 gap-4">
                    <div class="size-16 border-2  "><img src="https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1983&t=s" alt="">2d</div>
                    <div class="size-16 border-2 "><img src="https://pubchem.ncbi.nlm.nih.gov/image/img3d.cgi?&cid=1983&t=s" alt="">3D</div>
                   <div class="size-16 border-2"><img src="https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/key/30593018_1" alt="">Crystal</div>
                </div>
                    </td>
            </tr>
            <tr class="border-b-2">
                <td class="w-1/5 font-semibold pl-4">Chemical Safety</td>
                <td>
                    <div class="size-16"><img src="https://pubchem.ncbi.nlm.nih.gov/images/ghs/GHS07.svg" alt=""></div>
                    <div class="font-semibold text-blue-700  ">Laboratory Chemical Safety Summary (LCSS) Datasheet</div>
                </td>
            </tr>
            <tr class="border-b-2">
                <td class="w-1/5 font-semibold pl-4" >Molecular Formula</td>
                <td class="w-4/5" ><div><sub>{{ molecularFormula }}</sub>
                </div>
                <div class="font-semibold text-blue-700">HOC<sub>6</sub>H<sub>4</sub>NHCOCH<sub>3</sub>
                </div></td>

                
                
            </tr>
            <tr class="border-b-2">
                <td class="w-1/5 font-semibold pl-4" >Synonyms</td>
                <td class="w-4/5" ><div>acetaminophen</div>
                    <div>Paracetamol</div>
                    <div>4-Acetamidophenol</div>
                    <div>103-90-2</div>
                    <div>Tylenol</div>
                    
                </td>
                
            </tr>
            <tr class="border-b-2">
                <td class="w-1/5 font-semibold pl-4" >Molecular Weight</td>
                <td class="w-4/5" ><div> 151.16 g/mol</div>
                    <div class="italic text-sm ps-8">Computed by PubChem 2.2 (PubChem release 2021.10.14)</div>
                   
                </td>
                
            </tr>
            <tr class="border-b-2">
                <td class="w-1/5 font-semibold pl-4" >Dates</td>
                <td class="w-4/5" ><div>Create:</div>
                                    <div>27-05-2025</div>
                                </td>
                
            </tr>
            <tr class="border-b-2">
                <td class="w-1/5 font-semibold pl-4">Description</td>
                <td class="w-4/5" ><div>4-hydroxyacetanilide is an odorless white crystalline solid. Bitter taste. pH (saturated aqueous solution) about 6. (NTP, 1992)</div>
                <div class="italic text-sm ps-8">National Toxicology Program, Institute of Environmental Health Sciences, National Institutes of Health (NTP). 1992. National Toxicology Program Chemical Repository Database. Research Triangle Park, North Carolina.</div>
                
                                </td>
                               
                
            </tr>

           </tbody>
           



        </table>

      
        




    </div>


   

    <PubchemAccordion  v-for="(data, index) in pubchemDatas?.Section" :key="data?.TOCHeading" :pubChemData="data" :index="index+1"/>


    


    
    

    

    
 
    
    
   
    
    
</template>