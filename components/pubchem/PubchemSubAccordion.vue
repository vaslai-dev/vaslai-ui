<script setup>
import { ref } from "vue";

const showModal = ref(false);

</script>

<template>
<div class="border-b-4  border-blue-100">
    <div class=" flex justify-start">
        <div class="w-11/12 "><h1 class="text-3xl mt-6  font-medium ">1.1 2D Structure</h1></div>


        <div  class="ms-8 "  @click="showModal = !showModal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class=" h-8 w-8 mt-8  ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-8 w-8 mt-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          
          </div>


         
        
          

        
    </div>
    <div v-show="showModal" class="bg-gray-100 p-6"><p>Structure depictions of this compound, including computationally generated two-dimensional (2D) and three-dimensional (3D) structures, as well as experimentally determined 3D single-crystal structures.</p>
        <h1 class="text-3xl mt-6">2D Structure</h1>
        <p>A two-dimensional (2D) structure representation of the compound. Because this structure is processed through chemical structure standardization (Hähnke et al., J. Cheminform. 2018, 10, 36), it is not necessarily the same as the structures provided by individual data contributors.

            Read more at: <span  class="text-blue-500">https://doi.org/10.1186/s13321-018-0293-8</span></p>
            <h1  class="text-3xl mt-6">3D Conformer</h1>
            <p>A three-dimensional (3D) structure representation of the compound. This 3D structure is not experimentally determined, but computed by PubChem. This structure may or may not be the same as the inherent structure of the compound you would expect to see in vacuum or in the gas phase, because the underlying computational algorithm aims to generate a protein-bound structure, which would be observed in a protein-ligand complex. More detailed information on this conformer model can be found in Kim et al., J. Cheminform. 2013, 5, 1.

                Read more at: <span class="text-blue-500">https://doi.org/10.1186/1758-2946-5-1</span> </p>
                <h1  class="text-3xl mt-6">Crystal Structures</h1>
                <p>This section provides links to crystallographic information from various sources.</p>
    </div>
</div>

    
</template>