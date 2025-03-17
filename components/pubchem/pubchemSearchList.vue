<script setup>
const props = defineProps({
  data: Array,
});
const router = useRouter()

const getPubChemId = async (name) =>{
  console.log( name);
  // api call 
  // https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/Paracetamol/cids/TXT
  try {
    const data = await $fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${name}/cids/json`, {
      method: 'GET',
    });
    router.push({path:`pubchem/${data?.IdentifierList?.CID[0]}`})
  } catch (error) {
    alert(error);
  }

}
</script>
<template>
  <div class="shadow-grey-400 bg-[#dce5f6] py-8">
    <div class="cursor-pointer ms-16 flex flex-col space-y-4 rounded-b-lg rounded-t-lg text-sky-700">
      <li v-for="item in data" :key="item" class="hover:text-sky-900" @click="getPubChemId(item)">{{ item }}</li>
    </div>
  </div>
</template>
