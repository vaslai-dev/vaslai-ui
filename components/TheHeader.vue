
import { NuxtLink } from '#build/components';
<script setup>
const isOpenDropdown = ref(false);

const toggleDropdown = (state) => {
    isOpenDropdown.value = state  ? true : false;
}; 
</script>
<template>
    <!-- component -->
    <!-- This is an example component -->
    
    <div class="max-w-full bg-white">
        
        <nav class="border-gray-200 px-1 py-4  mx-4 mb-9">
            <div class="container mx-auto flex flex-wrap items-center justify-between">
                <!-- <a href="#" class="flex">
                    <svg class="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                                fill="#76A9FA"></path>
                            <path
                                d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                                fill="#A4CAFE"></path>
                            <path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                                fill="#1C64F2"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="51" height="70" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
                </a> -->
                <div class="flex md:order-1 my-5">
                    <!-- <div class="relative mr-3 md:mr-0 hidden md:block">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="email-adress-icon"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                            placeholder="Search...">
                    </div> -->
                    <button data-collapse-toggle="mobile-menu-3" type="button"
                        class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                        aria-controls="mobile-menu-3" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
                    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <NuxtLink to="/" activeClass="text-blue-700"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                                Home
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/clinical-trial" activeClass="text-blue-700"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                                ClinicalTrails.Gov
                            </NuxtLink>
                        </li>
                        <li @mouseover="toggleDropdown(false)">
                            <a href="https://www.vaslai.com/dailymed"
                                activeClass="text-blue-700" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent
                                md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                                DailyMed
                            </a>
                        </li>

                        <li class="relative" aria-checked="true" @mouseover="toggleDropdown(true)" >
                            <div to="/fda-org" activeClass="text-blue-700" 
                            
                                class="text-gray-700 hover:bg-gray-50 cursor-pointer border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                                Drugs.FDA</div>
                                <div v-if="isOpenDropdown" @mouseover="toggleDropdown(true)" @mouseleave="toggleDropdown(false)" class="absolute -right-20 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div class="p-4">
                                    <NuxtLink to="/fda-org" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                            </svg>
                                        </div>
                                        <div class="flex-auto">
                                            <a href="#" class="block font-semibold text-gray-900">
                                                Drugs@FDA
                                            <span class="absolute inset-0"></span>
                                            </a>
                                            <p class="mt-1 text-gray-600">Drugs</p>
                                        </div>
                                    </NuxtLink>
                                        <NuxtLink to="/fda-org" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                            </svg>
                                        </div>
                                        <div class="flex-auto">
                                            <a href="#" class="block font-semibold text-gray-900">
                                                Adverse Events
                                            <span class="absolute inset-0"></span>
                                            </a>
                                            <p class="mt-1 text-gray-600">Get a better understanding of your traffic</p>
                                        </div>
                                    </NuxtLink>
                                    <NuxtLink class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                            </svg>
                                        </div>
                                        <div class="flex-auto">
                                            <a href="#" class="block font-semibold text-gray-900">
                                                Product Labeling
                                            <span class="absolute inset-0"></span>
                                            </a>
                                            <p class="mt-1 text-gray-600">Speak directly to your customers</p>
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </li>
                        <!-- <li>

                            <NuxtLink to="/clinical-location" activeClass="text-blue-700"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                                PDBE
                            </NuxtLink>
                        </li> -->
                        <li @mouseover="toggleDropdown(false)">
                            <NuxtLink to="/pubchem" activeClass="text-blue-700"
                                class="bg-blue-700 md:bg-transparent text-gray-700 block pl-3 pr-4 py-2  md:p-0 rounded"
                                aria-current="page">PubChem</NuxtLink>
                        </li>
                        <li @mouseover="toggleDropdown(false)">
                            <NuxtLink to="/analytics" activeClass="text-blue-700"
                                class="bg-blue-700 md:bg-transparent text-gray-700 block pl-3 pr-4 py-2  md:p-0 rounded"
                                aria-current="page">Analytics</NuxtLink>
                        </li>
                        <!-- <li>
                            <NuxtLink to="/clinical-location" activeClass="text-blue-700"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                                FDA</NuxtLink>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
