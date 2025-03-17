<script setup>
import Gallery from '~/components/DailyMed/Gallery.vue';

const isGalleryModal = ref(false)
definePageMeta({
    layout: 'daily-med-layout'
})
const openDropdownIndex = ref(-1);
const { data: splList, pending, error, refresh } = await useFetch('https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json', {
    lazy: true,
    server: true
})
const toggleDropdown = (index) => {
    openDropdownIndex.value = openDropdownIndex.value === index ? -1 : index;
};  
const galleryDialog = () => {
    console.log("ssssssssssssssssssssss");
}
const downloadLink = (setid) => {
return `https://dailymed.nlm.nih.gov/dailymed/downloadpdffile.cfm?setId=${setid}`
}
  
const generateExternalLink = (id) => {
return `https://65fb3acd69184a147283d85c-jazzy-fudge.netlify.app/dailymed/dailymed-media?id=${id}`}
</script>
<template>

    <TitleHeader class="mx-10 my-2" :isSearch="false" :isDownload="false" :isFilter="false">Structured Product Labels</TitleHeader>
    <div class="relative overflow-x-auto mx-8 rounded-lg">
        <Gallery v-if="isGalleryModal" :isGalleryModal="isGalleryModal" @galleryDialog ="galleryDialog"/>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-5">
                        Set id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        spl version
                    </th>
                    <th scope="col" class="px-6 py-3">
                        published date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    v-for="(spl, index) in splList?.data" :key="spl.setid">
                    <td class="px-6 py-4">
                        {{ spl.setid }}
                    </td>
                    <td class="px-6 py-4">
                        {{ spl.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ spl.spl_version }}
                    </td>
                    <td class="px-6 py-4">
                        {{ spl.published_date }}
                    </td>
                    <td class="px-6 py-4 relative cursor-pointer" @mouseleave="toggleDropdown(-1)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             @mouseover="toggleDropdown(index)"  stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                        <div v-if="openDropdownIndex === index" 
                            class="z-10  bg-white divide-y absolute top-15 right-7 divide-gray-100 w-32 rounded-lg shadow  dark:bg-gray-700">
                            <ul class="py-2 divide-y divide-gray-200 text-sm text-gray-700 dark:text-gray-200" @mouseleave="toggleDropdown(-1)">
                                <li>
                                    <a :href="generateExternalLink(spl?.setid)" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        View Package photos</a> 
                                </li>
                                <li>
                                    <a :href="downloadLink(spl?.setid)" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Drug Label Information</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Packaging</a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>