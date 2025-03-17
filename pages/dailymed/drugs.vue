<script setup>
definePageMeta({
    layout: 'daily-med-layout'
})
const { data:drugNames, pending, error, refresh } = await useFetch('https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames.json', {
    lazy: true,
    server: true
})

</script>
<template>
    <TitleHeader class="mx-10 my-2" :isSearch="false" :isDownload="false" :isFilter="false">Drugs</TitleHeader>
    <div class="relative overflow-x-auto mx-8 rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-5">
                        Index
                    </th>
                    <th scope="col" class="px-6 py-5">
                        Drug Name
                    </th>
                    <th scope="col" class="px-6 py-3 w-44">
                        Drug Type
                    </th>
                    <!-- <th scope="col" class="px-6 py-3">
                        type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        coding System
                    </th> -->
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    v-for="(drugName, index) in drugNames.data">
                    <td class="px-6 py-4">
                        {{ index+1 }}
                    </td>
                    <td class="px-6 py-4">
                        {{ drugName.drug_name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ drugName.name_type }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>