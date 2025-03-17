<template>
  <!-- <TitleHeader class="mx-10 my-2">Location</TitleHeader> -->
  <div class=" mt-8 ps-3 shadow-2xl  pb-8">
    <h1 class="font-bold text-2xl pt-6">
      New Drug Application (NDA): <span class="text-indigo-900"> 020036</span>
    </h1>
    <h1 class="font-bold text-2xl">
      Company: <span class="text-indigo-900"> NOVARTIS</span>
    </h1>
    <div class="pt-6 pr-10 flex-grow">
      <ProductAccord title="Products on NDA 020036"/> 
      <ApprovalAccord
        title="Approval Date(s) and History,Letters,Labels,Reviews for NDA 020036"
      >
      </ApprovalAccord>
      <LabelsAccord title="Lables for NDA 020036"> </LabelsAccord>
    </div>
  </div>
</template>
<script setup>
import ApprovalAccord from '~/components/fda/ApprovalAccord.vue';
import LabelsAccord from '~/components/fda/LabelsAccord.vue';
import ProductAccord from '~/components/fda/ProductAccord.vue';
definePageMeta({
    layout: 'fda-org'
})

</script>

