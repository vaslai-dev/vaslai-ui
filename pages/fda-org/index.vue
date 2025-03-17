<script setup>
import { ref } from "vue";
import  SearchList from "~/components/fda/SearchList.vue";
import { useFdaStore } from "~/store/Fda";
import CommonAccordion from "~/components/common/CommonAccordion.vue"
definePageMeta({
  layout: "fda-org",
});
const searchBy = ref("products.brand_name:");
const searchValue = ref('')
const router = useRouter()
const route = useRoute()
const store = useFdaStore()
const {fetchFdaData} = store
const {fdaData, getTitle} = storeToRefs(store)
const getRouteQuery = computed(()=> {
  let selectedQuery = Object.keys(route.query)[0]
  return { [selectedQuery]: searchValue.value }
})
let debounceTimeout =ref(null)
const submitForm = () =>{
  // router.push({  query:  getRouteQuery.value})
  fetchFdaData('wwwwwwwwwwww')
  console.log(fdaData, route, "ssssssssssss")
}

watch(searchValue, ()=>{
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    router.push({  query:  getRouteQuery.value})
  }, 500);
})


</script>
<template>
  <div class="mx-1 bg-white py-2 px-2">
    <TitleHeader
      class="mx-1 my-2"
      :isSearch="false"
      :isDownload="false"
      :isFilter="false"
      >Drugs FDA</TitleHeader
    >
    <h2 class="py-2 mx-2 text-gray-700">
      Search By Drug Name, Active Ingredient or Application Number.
    </h2>
    <ul
      class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li
        class="w-full border-b border-gray-200 sm:border-b-0  sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center ps-3" @click="router.push({  query: { 'products.brand_name': searchValue } })">
          <input
            id="horizontal-list-radio-license"
            v-model="searchBy"
            type="radio"
            value="products.brand_name:"
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label
            for="horizontal-list-radio-license"
            class="w-full py-3 ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
            >Drug Name
          </label>
        </div>
      </li>
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center ps-3" @click="router.push({  query: { 'products.active_ingredients.name:': searchValue } })">
          <input
            id="horizontal-list-radio-id"
            v-model="searchBy"
            type="radio"
            value="products.active_ingredients.name:"
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label
            for="horizontal-list-radio-id"
            class="w-full py-3 ms-2 text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300"
            >Active Ingredient</label
          >
        </div>
      </li>
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center ps-3" @click="router.push({ query: { 'application_number': searchValue } })">
          <input
            id="horizontal-list-radio-military"
            v-model="searchBy"
            type="radio"
            value="application_number"
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label
            for="horizontal-list-radio-military"
            class="w-full py-3 ms-2 text-sm font-medium cursor-pointer text-gray-900"
            >Application Number</label
          >
        </div>
      </li>
    </ul>
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
          :disabled="searchValue.length<4"
          :class="{'bg-blue-500':searchValue.length > 4}"
          class="absolute inset-y-0 right-0 px-4 py-2 mt-10 bg-blue-100 text-white rounded-r-md focus:outline-none"
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
    

   <CommonAccordion :fdaData="getTitle" ></CommonAccordion>

   


    
  </div>
</template>
<!-- searchbox starts here -->
