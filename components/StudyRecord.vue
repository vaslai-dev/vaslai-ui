<script setup>
const props = defineProps(["study"]);
</script>
<template>
  <!-- Container for demo purpose -->

  <div
    class="container w-[97%] my-3 mx-6 md:px-6 gap-5 py-6 border-4 border-white grid grid-cols-12 shadow-lg hover:shadow-2xl"
    id="studyRecord"
    ref="studyRecord"
  >
    <!-- Section: Design Block -->
    <section class="mb-32 col-start-1 col-end-12">
      <p
        class="mb-6 text-primary flex items-center font-bold uppercase text-danger dark:text-danger-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>

        Study Record Dates
      </p>
      <!-- <p class="mb-3  border-b-2">
                <strong>Participation Criteria</strong>
            </p> -->
      <p class="mb-3">
        These dates track the progress of study record and summary results
        submissions to ClinicalTrials.gov. Study records and reported results
        are reviewed by the National Library of Medicine (NLM) to make sure they
        meet specific quality control standards before being posted on the
        public website.
      </p>

      <!-- <p class="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
                libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
                inventore perspiciatis possimus quia incidunt maiores molestias eaque
                nam commodi! Magnam, labore.
            </p> -->

      <!-- <p class="mb-3">
                <span class="font-bold text-gray-600 ">
                    Arms and Interventions
                </span>
            </p> -->
      <div class="grid grid-cols-2 gap-3">
        <table
          class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs border-collapse text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="border border-slate-300 py-4 px-3">
                Study Registration Dates
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 py-3 px-3">
                <p>
                  First Submitted :
                  <span>{{
                    props.study?.protocolSection?.statusModule
                      ?.studyFirstSubmitDate
                  }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 py-3 px-3">
                <p>
                  First Submitted that Met QC Criteria :
                  <span>{{
                    props.study?.protocolSection?.statusModule
                      ?.studyFirstSubmitQcDate
                  }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 py-3 px-3">
                <p>
                  First Posted (Estimated) :
                  <span
                    >{{
                      props.study?.protocolSection?.statusModule
                        ?.studyFirstPostDateStruct?.date
                    }}
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs border-collapse text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="border border-slate-300 py-4 px-3">
                Study Record Updates
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 py-3 px-3">
                <p>
                  Last Update Submitted that met QC Criteria :
                  <span>{{
                    props.study?.protocolSection?.statusModule
                      ?.lastUpdateSubmitDate
                  }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 py-3 px-3">
                <p>
                  Last Update Posted :
                  <span>{{
                    props.study?.protocolSection?.statusModule
                      ?.lastUpdatePostDateStruct?.date
                  }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 py-3 px-3">
                <p>
                  Last Verified :
                  <span>{{
                    props.study?.protocolSection?.statusModule
                      ?.statusVerifiedDate
                  }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- <div class="col-span-1">wwwwwwwwww</div> -->
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>