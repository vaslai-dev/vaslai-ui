<script setup>
definePageMeta({
    layout: 'daily-med-layout'
})
const { data: rxNormS, pending, error, refresh } = await useFetch('https://dailymed.nlm.nih.gov/dailymed/services/v2/rxcuis.json', {
    lazy: true,
    server: true
})

</script>
<template>
    <TitleHeader class="mx-10 my-2" :isSearch="false" :isDownload="false" :isFilter="false">Rx Norm</TitleHeader>
    <div class="relative overflow-x-auto mx-8 rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-5">
                        rxcui
                    </th>
                    <th scope="col" class="px-6 py-5">
                        rxstring
                    </th>
                    <th scope="col" class="px-6 py-3 w-44">
                        rxtty
                        {{ rxNorm }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    v-for="(rxNorm, index) in rxNormS?.data">
                    <td class="px-6 py-4">
                        {{ rxNorm.rxcui }}
                    </td>
                    <td class="px-6 py-4">
                        {{ rxNorm.rxstring }}
                    </td>
                    <td class="px-6 py-4">
                        {{ rxNorm.rxtty }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>