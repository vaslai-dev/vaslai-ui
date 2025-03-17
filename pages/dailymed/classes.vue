<script setup>
definePageMeta({
    layout: 'daily-med-layout'
})
const { data: drugClasses, pending, error, refresh } = await useFetch('https://dailymed.nlm.nih.gov/dailymed/services/v2/drugclasses.json', {
    lazy: true,
    server: true
})

</script>
<template>
    <TitleHeader class="mx-10 my-2" :isSearch="false" :isDownload="false" :isFilter="false">Drug Classes</TitleHeader>
    <div class="relative overflow-x-auto mx-8 rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-5">
                        code
                    </th>
                    <th scope="col" class="px-6 py-3">
                        name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        coding System
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    v-for="drugClass in drugClasses?.data ">
                    <td class="px-6 py-4">
                        {{ drugClass.code }}
                    </td>
                    <td class="px-6 py-4">
                        {{ drugClass.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ drugClass.type }}
                    </td>
                    <td class="px-6 py-4">
                        {{ drugClass.codingSystem }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>