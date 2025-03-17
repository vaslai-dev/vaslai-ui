<template>
  <div class="pt-2">
    <div class="border border-blue-100 rounded-b-lg rounded-t-lg">
      <div
        @click="isOpen = !isOpen"
        class="flex justify-between items-center cursor-pointer rounded-b-lg rounded-t-lg bg-blue-100 text-sky-700"
      >
        <h1 class="ml-1 p-6 font-bold text-2xl tracking-wide">{{ title }}</h1>
        <button class="mr-8">Click me</button>
      </div>
      <div :class="isOpen ? 'd-block' : 'hidden'">
        <div class="p-8">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-5 border-r-2">Action Date</th>
                <th scope="col" class="px-6 py-5 border-r-2">Submission</th>
                <th scope="col" class="px-6 py-5 border-r-2">Type</th>

                <th scope="col" class="px-6 py-5 border-r-2">
                  Patient Package Insert
                </th>

                <th scope="col" class="px-6 py-5 border-r-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer"
              >
                <td class="px-6 py-4 border-r">05/31/2012</td>
                <td class="px-6 py-4 border-r">SUPPL-41</td>
                <td class="px-6 py-4 border-r">Labeling</td>

                <td class="px-6 py-4 border-r">
                  <a href="#">Label (PDF) Letter (PDF) </a>
                </td>
                <td class="px-6 py-4 border-r"></td>
              </tr>
              <tr
                class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer"
              >
                <td class="px-6 py-4 border-r">04/07/2011</td>
                <td class="px-6 py-4 border-r">SUPPL-39</td>
                <td class="px-6 py-4 border-r">Labeling</td>

                <td class="px-6 py-4 border-r">
                  <a href="#">Label (PDF) Letter (PDF) Review</a>
                </td>
                <td class="px-6 py-4 border-r"></td>
              </tr>
              <tr
                class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer"
              >
                <td class="px-6 py-4 border-r">12/12/2008</td>
                <td class="px-6 py-4 border-r">SUPPL-35</td>
                <td class="px-6 py-4 border-r">Labeling</td>

                <td class="px-6 py-4 border-r">
                  <a href="#">Label (PDF) Letter (PDF) Review</a>
                </td>
                <td class="px-6 py-4 border-r"></td>
              </tr>
              <tr
                class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer"
              >
                <td class="px-6 py-4 border-r">12/11/2007</td>
                <td class="px-6 py-4 border-r">SUPPL-34</td>
                <td class="px-6 py-4 border-r">Labeling</td>

                <td class="px-6 py-4 border-r">
                  <a href="#">Label (PDF) Letter (PDF) Review</a>
                </td>
                <td class="px-6 py-4 border-r"></td>
              </tr>
            </tbody>
          </table>
          <h2 class="font-semibold mt-3">Total No of Entries</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: false,
    };
  },
  name: "Accordion2",
  props: {
    title: String,
  },
};
</script>
