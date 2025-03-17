<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
// import { ChevronDownIcon } from "@vue-hero-icons/outline"

const actionsDrugs = [
  { name: 'Drug withdrawn' },
  { name: 'Dose reduced' },
  { name: 'Dose increased' },
  { name: 'Dose not changed' },
  { name: 'Unknown' },
  { name: 'Not applicable' },
]
const drugAdditionals = [ { name: 'Yes' },
  { name: 'No' },
  { name: 'Does not apply' },
]
const actionDrug = ref('')
const drugAdditional = ref('')
const drugadministrationroute = ref('')
const drugauthorizationnumb = ref('')
const drugbatchnumb = ref('')
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
    <h2 class="flex-1 ml-3 whitespace-nowrap font-medium">Filter for FDA</h2>
  
    <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <form class="">
        <!-- <div class="relative mb-10 w-full flex  items-center justify-between rounded-md">
          <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input type="name" name="search" class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
        </div> -->
  
        <div class="flex flex-col gap-5">
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Authority Numb</label>
            <input type="text" id="name" placeholder="Authority Numb" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Outcome measure</label>
            <input type="text" id="name" placeholder="Outcome measure " class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div class="flex flex-col border-b text-lg py-3 border-t font-medium text-gray-700">
            Patient
            <!-- <label for="name" class="text-sm font-medium text-gray-700">Patient</label> -->
            <!-- <input type="text" id="name" placeholder="Sponsor" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> -->
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Action Drug</label>
            <Listbox v-model="actionDrug">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full h-12 cursor-default rounded-lg bg-gray-100 py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                  <span class="block truncate">{{ actionDrug.name }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <ChevronDownIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-90 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="person in actionsDrugs"
                      :key="person.name"
                      :value="person"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-blue-100 text-blue-00' : 'text-gray-900',
                          'relative cursor-default select-none py-3 pl-10 pr-4',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                          ]"
                          >{{ person.name }}</span
                        >
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Active Substance Name</label>
            <input type="text" id="name" placeholder="Active Substance Name" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Drug Additional</label>
            <Listbox v-model="drugAdditional">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full h-12 cursor-default rounded-lg bg-gray-100 py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                  <span class="block truncate">{{ drugAdditional.name }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <ChevronDownIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-90 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="person in drugAdditionals"
                      :key="person.name"
                      :value="person"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-blue-100 text-blue-00' : 'text-gray-900',
                          'relative cursor-default select-none py-3 pl-10 pr-4',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                          ]"
                          >{{ person.name }}</span
                        >
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
            <!-- <input type="text" id="name" placeholder="Title" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> -->
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Drug Administration Route</label>
            <input v-model="drugadministrationroute" type="text" id="name" placeholder="Drug Administration Route" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Drug Authorization Numb</label>
            <input v-model="drugauthorizationnumb" type="text" id="name" placeholder="Drug Authorization Numb" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-medium text-gray-700">Drug Batch Numb</label>
            <input v-model="drugbatchnumb" type="text" id="name" placeholder="Drug Batch Numb" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
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
  
          <div class="flex flex-col gap-1">
            <h2 class="text-sm font-medium text-gray-700">Study Phase </h2>
            <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
              <input class="peer hidden" type="checkbox" name="Early_Phase_0" id="Early_Phase_0"  />
              <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_0"> </label>
              <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
              <span class="pointer-events-none z-10"> Early Phase 1</span>
            </div>
            <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
              <input class="peer hidden" type="checkbox" name="Early_Phase_1" id="Early_Phase_1"  />
              <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_1"> </label>
              <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
              <span class="pointer-events-none z-10">Phase 1</span>
            </div>
            <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
              <input class="peer hidden" type="checkbox" name="Early_Phase_2" id="Early_Phase_2"  />
              <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_2"> </label>
              <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
              <span class="pointer-events-none z-10">Phase 2</span>
            </div>
            <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
              <input class="peer hidden" type="checkbox" name="Early_Phase_3" id="Early_Phase_3"  />
              <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_3"> </label>
              <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
              <span class="pointer-events-none z-10">Phase 3</span>
            </div>
            <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
              <input class="peer hidden" type="checkbox" name="Early_Phase_4" id="Early_Phase_4"  />
              <label class="absolute left-0 top-0 h-full w-full cursor-pointer rounded border peer-checked:border-blue-600 peer-checked:bg-blue-100" for="Early_Phase_4"> </label>
              <div class="absolute left-4 h-3 w-3 rounded border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2"></div>
              <span class="pointer-events-none z-10">Phase 4</span>
            </div>
            <div class="relative flex w-60 items-center rounded bg-gray-50 py-2 px-4 pl-14 font-medium text-gray-700">
              <input class="peer hidden" type="checkbox" name="NA" id="NA"  />
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
          <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:text-gray-800 focus:ring">Reset</button>
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