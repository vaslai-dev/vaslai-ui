<script setup>
const props = defineProps(["study"]);
</script>
<template>
  <!-- Container for demo purpose -->

  <div
    class="container w-[97%] my-3 mx-6 md:px-6 gap-5 py-6 border-4 border-white grid grid-cols-12 shadow-lg hover:shadow-2xl"
    id="Collaborators"
  >
    <!-- Section: Design Block -->
    <section class="mb-5 col-start-1 col-end-12">
      <p
        class="mb-6 text-primary flex items-center font-bold uppercase text-danger dark:text-danger-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-5 h-5 mr-3"
        >
          <path
            d="M6.375 5.5h.875v1.75h-.875a.875.875 0 1 1 0-1.75ZM8.75 10.5V8.75h.875a.875.875 0 0 1 0 1.75H8.75Z"
          />
          <path
            fill-rule="evenodd"
            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.25 3.75a.75.75 0 0 1 1.5 0V4h2.5a.75.75 0 0 1 0 1.5h-2.5v1.75h.875a2.375 2.375 0 1 1 0 4.75H8.75v.25a.75.75 0 0 1-1.5 0V12h-2.5a.75.75 0 0 1 0-1.5h2.5V8.75h-.875a2.375 2.375 0 1 1 0-4.75h.875v-.25Z"
            clip-rule="evenodd"
          />
        </svg>

        Collaborators and Investigators
      </p>
      <!-- <p class="mb-3  border-b-2">
                <strong>Participation Criteria</strong>
            </p> -->
      <p class="mb-3">
        This is where you will find people and organizations involved with this
        study.
      </p>
      <div class="py-6">
        <p class="mb-2 border-b-2">
          <span class="font-bold text-gray-600"> Sponsor </span>
        </p>
        <div class="font-medium text-gray-500 px-5">
          {{
            props.study?.protocolSection?.sponsorCollaboratorsModule
              ?.leadSponsor?.name
          }}
        </div>
      </div>

      <div class="py-6">
        <p class="mb-2 border-b-2">
          <span class="font-bold text-gray-600"> Collaborators </span>
        </p>
        <ul
          class="font-medium text-gray-500 list-disc px-5"
          v-for="collaborators in props.study?.protocolSection
            ?.sponsorCollaboratorsModule?.collaborators"
        >
          <li>{{ collaborators.name }}</li>
        </ul>
      </div>
      <div class="py-6">
        <p class="mb-2 border-b-2">
          <span class="font-bold text-gray-600"> Investigators </span>
        </p>
        <ul
          class="font-medium text-gray-500 list-disc px-5"
          v-for="overallOfficials in props.study?.protocolSection
            ?.contactsLocationsModule?.overallOfficials"
          :key="overallOfficials"
        >
          <li>
            {{
              `${overallOfficials?.role}: ${overallOfficials?.name}, ${overallOfficials?.affiliation}`
            }}
            <!-- Study Director:Bristol-Myers Squibb,Bristol-Myers Squibb -->
          </li>
        </ul>
      </div>

      <!-- <p class="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
                libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
                inventore perspiciatis possimus quia incidunt maiores molestias eaque
                nam commodi! Magnam, labore.
            </p> -->

      <!-- <p class="mb-3">
                <strong>Design Details:
                </strong>
            </p> -->
      <!-- <ul class="mb-6 list-inside list-disc">
                <li>
                    <span class="font-bold"> Primary Purpose :</span> <span>Diagnostic</span>
                </li>
                <li>
                    <span class="font-bold"> Allocation :</span><span>Randomized</span>
                </li>
                <li>
                    <span class="font-bold"> Interventional Model :</span> <span>Parallel Assignment</span>
                </li>
                <li>
                    <span class="font-bold"> Masking :</span> <span>None (Open Label)</span>
                </li>
            </ul> -->

      <!-- <p class="mb-3">
                <span class="font-bold text-gray-600 ">
                    Arms and Interventions
                </span>
            </p> -->

      <!-- <table class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    class="text-xs border-collapse	 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="border border-slate-300 py-4 px-3">Participant Group/Arm</th>
                        <th class="border border-slate-300 py-4 px-3">Intervention/Treatment
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 py-4 px-3">
                            <p>Active Comparator: Group 1</p>
                            <p>Subjects with T2DM - Dapagliflozin 5 mg
                            </p>
                        </td>
                        <td class="border border-slate-300 py-7 px-7">
                            Drug: Dapagliflozin
                            <ul class="list-disc">
                                <li>Tablets, Oral, Once Daily, up to 29 days:</li>
                                <li>Other Names:
                                    <ul class="list-disc list-inside">
                                        <li>BMS-512148
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 py-4 px-3">
                            <p>Active Comparator: Group 2</p>
                            <p>Subjects with T2DM - Dapagliflozin 5 mg
                            </p>
                        </td>
                        <td class="border border-slate-300 py-7 px-7">
                            Drug: Dapagliflozin
                            <ul class="list-disc">
                                <li>Tablets, Oral, Once Daily, up to 29 days:</li>
                                <li>Other Names:
                                    <ul class="list-disc list-inside">
                                        <li>BMS-512148
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 py-4 px-3">
                            <p>Active Comparator: Group 3</p>
                            <p>Subjects with T2DM - Dapagliflozin 5 mg
                            </p>
                        </td>
                        <td class="border border-slate-300 py-7 px-7">
                            Drug: Dapagliflozin
                            <ul class="list-disc">
                                <li>Tablets, Oral, Once Daily, up to 29 days:</li>
                                <li>Other Names:
                                    <ul class="list-disc list-inside">
                                        <li>BMS-512148
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table> -->
      <!-- <p class="mb-3 mt-7">
                <strong>What is the study measuring?
                </strong>
            </p> -->
      <!-- <p class="mb-3">
                <span class="font-bold text-gray-600 ">
                    Primary Outcome Measures
                </span>
            </p> -->
      <!-- <table class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    class="text-xs border-collapse	 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="border border-slate-300 py-4 px-3">Outcome Measure </th>
                        <th class="border border-slate-300 py-4 px-3">Measure Description
                        </th>
                        <th class="border border-slate-300 py-4 px-3">Time Frame
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 py-4 px-3">
                            The change in urinary glucose excretion dynamics
                        </td>
                        <td class="border border-slate-300 py-7 px-7"></td>
                        <td class="border border-slate-300 py-7 px-7">
                            after 7 days of treatment
                        </td>
                    </tr>
                </tbody>
            </table> -->
      <!-- <p class="mb-3 mt-10">
                <span class="font-bold text-gray-600 ">
                    Secondary Outcome Measures
                </span>
            </p> -->
      <!-- <table class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    class="text-xs border-collapse	 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="border border-slate-300 py-4 px-3">Outcome Measure </th>
                        <th class="border border-slate-300 py-4 px-3">Measure Description
                        </th>
                        <th class="border border-slate-300 py-4 px-3">Time Frame
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 py-4 px-3">
                            Differences in urinary glucose between healthy and diabetic subjects
                        </td>
                        <td class="border border-slate-300 py-7 px-7"></td>
                        <td class="border border-slate-300 py-7 px-7">
                            at 7 days
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 py-4 px-3">
                            Changes in liver glucose production
                        </td>
                        <td class="border border-slate-300 py-7 px-7"></td>
                        <td class="border border-slate-300 py-7 px-7">
                            at one day
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 py-4 px-3">
                            Glucose effects on tubular markers
                        </td>
                        <td class="border border-slate-300 py-7 px-7"></td>
                        <td class="border border-slate-300 py-7 px-7">
                            at one day
                        </td>
                    </tr>

                </tbody>
            </table> -->
    </section>
    <!-- <div class="col-span-1">wwwwwwwwww</div> -->
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>