<script setup>
import { ref, computed } from "vue";
import pubchemAccordion from "~/components/common/pubchemAccordion.vue";


definePageMeta({
    layout: 'pubchem-main'
})
const searchValue = ref('');
const pubchemData = ref({
  dictionary_terms: {
    compound: [],
    gene: [],
    taxonomy: []
  }
});

const submitForm = async () => {
  console.log("abcdef", searchValue.value);
  try {
    const data = await $fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/autocomplete/compound,gene,taxonomy/${searchValue.value}`, {
      method: 'GET',
    });
    pubchemData.value = data.dictionary_terms;
  } catch (error) {
    alert(error);
  }
};

const dictionaryTermsTitles = computed(() => Object.keys(pubchemData.value).filter(key => pubchemData.value[key].length > 0));
</script>

<template>
  <div class="bg-white">
    <div class="m-6">
      <div class="mx-1 bg-white py-2 px-2">
        <TitleHeader class="mx-1 my-2">PubChem </TitleHeader>
        <h2 class="py-2 mx-2 text-gray-700">Search By Drug Name</h2>
        <div class="flex justify-center my-7">
          <div class="relative">
            <input
              v-model="searchValue"
              type="text"
              placeholder="Search..."
              class="border border-gray-300 rounded-l-md px-6 py-2 mt-10 pr-20 focus:outline-none w-96"
            />
            <button
              type="button"
              :disabled="searchValue.length < 4"
              :class="{'bg-blue-500': searchValue.length >= 4, 'bg-blue-100': searchValue.length < 4}"
              class="absolute inset-y-0 right-0 px-4 py-2 mt-10 text-white rounded-r-md focus:outline-none"
              @click="submitForm"
            >
              Search
            </button>
            <button
              type="button"
              class="absolute inset-y-0 right-20 px-4 py-2 mt-10 bg-gray-300 text-gray-700 rounded-r-md hover:bg-gray-400 focus:outline-none"
              @click="searchValue=''"
            >
              Clear
            </button>
          </div>
        </div>
        <div>
          <pubchemAccordion
            v-for="title in dictionaryTermsTitles"
            :key="title"
            :data-title="title"
            :sub-data="pubchemData[title]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
