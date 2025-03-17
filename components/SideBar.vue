<script setup>
const route = useRoute()
const aggFilters = ref([]);
const router = useRouter()
import { useClinicalTrial } from '~/store/clinicalTrial';

const resetFilter =() => {
  router.push('/')
  aggFilters.value = []
  filterClinicalTrial()
}
const {filterClinicalTrial} =useClinicalTrial() 
const clinicalTrialSearch = () => {
  filterClinicalTrial()
}
</script>
<template>
  <div>
    <button
      data-drawer-target="sidebar-multi-level-sidebar"
      data-drawer-toggle="sidebar-multi-level-sidebar"
      aria-controls="sidebar-multi-level-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="sidebar-multi-level-sidebar"
      class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-sm"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <!-- <SearchBar /> -->
        <!-- <div class="m-10 w-screen max-w-screen-md"> -->

<div class="flex flex-col">
  <h2 class="flex-1 ml-3 whitespace-nowrap font-medium">Filter for Clinical Trials</h2>

  <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
    <form class="" @submit.prevent="clinicalTrialSearch">
      <!-- <div class="relative mb-10 w-full flex  items-center justify-between rounded-md">
        <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" class=""></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
        </svg>
        <input type="name" name="search" class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
      </div> -->

      <div class="flex flex-col gap-5">
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="name" placeholder="Title" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Outcome measure</label>
          <input type="text" id="name" placeholder="Outcome measure " class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Sponsor</label>
          <input type="text" id="name" placeholder="Sponsor" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Sponsor (Lead)</label>
          <input type="text" id="name" placeholder="Sponsor (Lead)" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Study IDs</label>
          <input type="text" id="name" placeholder="Study IDs" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="name" placeholder="Title" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Condition/disease</label>
          <input type="text" id="name" placeholder="Condition/disease" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Intervention/treatment</label>
          <input type="text" id="name" placeholder="Intervention/treatment" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="name" placeholder="Location" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>

        <div class="flex flex-col gap-2">
          <!-- <label for="manufacturer" class="text-sm font-medium text-stone-600">Study Status </label> -->
          <h2 class="text-sm font-medium text-gray-700">Study Status</h2>
            <label for="manufacturer" class="text-sm font-medium text-stone-600">Looking for participants </label>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name=" NOT_YET_RECRUITING" id=" NOT_YET_RECRUITING"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for=" NOT_YET_RECRUITING"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> NOT YET RECRUITING</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="Recruiting" id="Recruiting"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Recruiting"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> Recruiting</span>
          </div>
          <label for="manufacturer" class="text-sm font-medium text-stone-600">No longer looking for participants </label>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="ACTIVE_NOT_RECRUITING" id="ACTIVE_NOT_RECRUITING"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="ACTIVE_NOT_RECRUITING"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> ACTIVE NOT RECRUITING</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="TERMINATED" id="TERMINATED "  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="TERMINATED"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> TERMINATED</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="COMPLETED" id="COMPLETED"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="COMPLETED"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> COMPLETED</span>
          </div>
          <label for="manufacturer" class="text-sm font-medium text-stone-600">Other</label>

          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="ENROLLING_BY_INVITATION" id="ENROLLING_BY_INVITATION"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="ENROLLING_BY_INVITATION"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> ENROLLING BY INVITATION</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="SUSPENDED" id="SUSPENDED"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="SUSPENDED"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> SUSPENDED</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name=" WITHDRAWN" id=" WITHDRAWN"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for=" WITHDRAWN"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">  WITHDRAWN</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="UNKNOWN" id="UNKNOWN"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="UNKNOWN"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> UNKNOWN</span>
          </div>
          <label for="manufacturer" class="text-sm font-medium text-stone-600">Expanded access </label>

          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="AVAILABLE" id="AVAILABLE"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="AVAILABLE"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> AVAILABLE</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="NO_LONGER_AVAILABLE" id="NO_LONGER_AVAILABLE"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="NO_LONGER_AVAILABLE"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> NO LONGER AVAILABLE</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="TEMPORARILY_NOT_AVAILABLE" id="TEMPORARILY_NOT_AVAILABLE"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="TEMPORARILY_NOT_AVAILABLE"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> TEMPORARILY NOT AVAILABLE</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="APPROVED_FOR_MARKETING" id="APPROVED_FOR_MARKETING"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="APPROVED_FOR_MARKETING"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> APPROVED FOR MARKETING</span>
          </div>
        </div>

        <div class="flex flex-col gap-1" @change="() => {
          router.push({ query: { aggFilters: `phase:${aggFilters.join(' ')}` } })
        }">
          <h2 class="text-sm font-medium text-gray-700">Study Phase </h2>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" v-model="aggFilters" value="0" name="Early_Phase_0" id="Early_Phase_0"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_0"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> Early Phase 1</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" v-model="aggFilters" value="1" name="Early_Phase_1" id="Early_Phase_1"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_1"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Phase 1</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" v-model="aggFilters" value="2" name="Early_Phase_2" id="Early_Phase_2"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_2"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Phase 2</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" v-model="aggFilters" value="3" name="Early_Phase_3" id="Early_Phase_3"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_3"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Phase 3</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" v-model="aggFilters" value="4" name="Early_Phase_4" id="Early_Phase_4"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_4"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Phase 4</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" v-model="aggFilters" value="NA" name="NA" id="NA"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="NA"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Not applicable</span>
          </div>
       

          <!-- <label for="date" class="text-sm font-medium text-stone-600">Date of Entry</label>
          <input type="date" id="date" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> -->
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium text-gray-700">Study Results</h2>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="With_results" id="With_results"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="With_results"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> With results</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="Without_results" id="Without_results"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Without_results"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Without results</span>
          </div>          
          <!-- <label for="date" class="text-sm font-medium text-stone-600">Date of Entry</label>
          <input type="date" id="date" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> -->
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium text-gray-700">Study Documents </h2>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="Study_protocols" id="Study_protocols"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Study_protocols"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> Study protocols</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="Statistical_analysis" id="Statistical_analysis"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Statistical_analysis"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Statistical analysis plans (SAPs)</span>
          </div>   
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="Informed_consent" id="Informed_consent"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Informed_consent"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Informed consent forms (ICFs)</span>
          </div>         
          <!-- <label for="date" class="text-sm font-medium text-stone-600">Date of Entry</label>
          <input type="date" id="date" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> -->
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium text-gray-700">Funder Type</h2>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="NIH" id="NIH"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="NIH"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10"> NIH</span>
          </div>
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="federal_agency" id="federal_agency"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="federal_agency"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Other U.S. federal agency</span>
          </div>   
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="Industry" id="Industry"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Industry"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">Industry</span>
          </div>  
          <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
            <input class="peer hidden" type="checkbox" name="All_others" id="All_others"  />
            <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="All_others"> </label>
            <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
            <span class="pointer-events-none z-10">All others (individuals, universities, organizations)</span>
          </div>        
          <!-- <label for="date" class="text-sm font-medium text-stone-600">Date of Entry</label>
          <input type="date" id="date" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> -->
        </div>
        

        <!-- <div class="flex flex-col">
          <label for="status" class="text-sm font-medium text-stone-600">Status</label>

          <select id="status" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option>Dispached Out</option>
            <option>In Warehouse</option>
            <option>Being Brought In</option>
          </select>
        </div> -->
      </div>

      <div class="mt-6 sticky bottom-0 grid w-full grid-cols-2 justify-end space-x-4 md:flex bg-white z-40">
        <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:text-gray-800 focus:ring" @click="resetFilter">Reset</button>
        <button class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:bg-blue-700 focus:ring">Search</button>
      </div>
    </form>
  </div>
</div>

<!-- </div> -->

      </div>
    </aside>
  </div>
</template>