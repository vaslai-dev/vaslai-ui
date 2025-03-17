<script setup>
const CommonTable = defineAsyncComponent(() =>
  import('~/components/pubchem/CommonTable.vue')
)
// import CommonTable from "~/components/pubchem/CommonTable.vue"

// api call 
// https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/31264/JSON/
// api call using usefetch 

  // api call 
  // https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/Paracetamol/cids/TXT


  import { ref, onMounted } from 'vue';
import { usePubChem } from '~/store/pubchem';
  const pubChemStore  = usePubChem();

  definePageMeta({
    layout: 'pubchemlayout'
})


const pubchemData = ref({
  Record: {
    RecordType: "",
    RecordNumber: "",
    RecordTitle: "",
    section: []
  }
});

const route = useRoute()


const fetchData = async () => {
  console.log("abcdef",route);
  const id = route.params?.id
  try {
    const data = await $fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/${id}/JSON/`, {
      method: 'GET',
    });
    pubchemData.value = data.Record;
    pubChemStore.fetchSideBarData(data.Record)
  } catch (error) {
    alert(error);
  }
};

onMounted(() => {
  fetchData();
});

</script>

<template>
   
<div class="bg-white grid col-span-10 ">
    <div class="m-6  ">
<h2 class="Text-sm " >COMPOUND SUMMARY</h2>
<h1 class="text-3xl  ">{{ pubchemData.RecordTitle }}</h1>

<div class="max-w-screen-lg">
    <CommonTable  :pubchemDatas="pubchemData" v-if="pubchemData" />
</div>
</div>

</div>


</template>