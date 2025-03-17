<script setup>
const props = defineProps(["study"]);
</script>
<template>
  <!-- Container for demo purpose -->

  <div
    class="container w-[97%] my-3 mx-6 md:px-6 gap-5 py-6 border-4 border-white grid grid-cols-12 shadow-lg hover:shadow-2xl"
    id="Study_Plan"
  >
    <!-- Section: Design Block -->
    <section class="mb-5 col-start-1 col-end-12">
      <p
        class="mb-6 text-primary flex items-center font-bold uppercase text-danger dark:text-danger-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="mr-2 h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          /></svg
        >Study Plan
      </p>
      <!-- <p class="mb-3  border-b-2">
                <strong>Participation Criteria</strong>
            </p> -->
      <p class="mb-3">
        This section provides details of the study plan, including how the study
        is designed and what the study is measuring.
      </p>

      <p
        class="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700"
      >
        <strong>How is the study designed?</strong>
      </p>
      <!-- <p class="mb-3">
                <strong>
                </strong>
            </p> -->

      <!-- <p class="mb-6">
                A Phase 3, Randomized, Double-blind, Placebo Controlled, Multicenter Trial to Evaluate the Safety and
                Efficacy of BMS-298585 in Combination With Glyburide Therapy in Subjects With Type 2 Diabetes Who Have
                Inadequate Glycemic Control on Sulfonylurea Therapy Alone
            </p> -->

      <!-- <p class="mb-6">
                A Phase 3, Randomized, Double-blind, Placebo Controlled, Multicenter Trial to Evaluate the Safety and
                Efficacy of BMS-298585 in Combination With Glyburide Therapy in Subjects With Type 2 Diabetes Who Have
                Inadequate Glycemic Control on Sulfonylurea Therapy Alone
            </p> -->

      <!-- <p
                class="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Optio odit consequatur porro sequi ab distinctio
                modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
                illum saepe mollitia ut voluptatum.
            </p> -->

      <!-- <p class="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
                libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
                inventore perspiciatis possimus quia incidunt maiores molestias eaque
                nam commodi! Magnam, labore.
            </p> -->

      <p class="text-primary mb-3">
        <strong>Design Details: </strong>
      </p>
      <ul class="mb-6 list-inside list-disc">
        <li>
          <span class="font-bold"> Primary Purpose :</span>
          <span>{{
            props.study?.protocolSection?.designModule?.designInfo
              ?.primaryPurpose
          }}</span>
        </li>
        <li>
          <span class="font-bold"> Allocation :</span
          ><span>{{
            props.study?.protocolSection?.designModule?.designInfo?.allocation
          }}</span>
        </li>
        <li>
          <span class="font-bold"> Interventional Model :</span>
          <span>{{
            props.study?.protocolSection?.designModule?.designInfo
              ?.interventionModel
          }}</span>
        </li>
        <li>
          <span class="font-bold"> Interventional Model Description:</span>
          <span>{{
            props.study?.protocolSection?.designModule?.designInfo
              ?.interventionModelDescription
          }}</span>
        </li>

        <li>
          <span class="font-bold"> Masking :</span>
          <span
            >{{
              props.study?.protocolSection?.designModule?.designInfo?.maskingInfo?.masking
            }}
            (Open Label)</span
          >
        </li>
      </ul>

      <p class="mb-3">
        <span class="font-bold text-gray-600"> Arms and Interventions </span>
      </p>

      <table
        class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs border-collapse text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="border border-slate-300 py-4 px-3">
              Participant Group/Arm
            </th>
            <th class="border border-slate-300 py-4 px-3">
              Intervention/Treatment
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="armGroups in props.study?.protocolSection
              ?.armsInterventionsModule?.armGroups"
            :key="armGroups"
          >
            <td class="border border-slate-300 py-4 px-3">
              <p class="mb-4">{{ `${armGroups?.type}: ${armGroups?.label}` }}</p>
              <p>{{ armGroups?.description }}</p>
            </td>
            <!-- v-if="!intervention?.armGroupLabels.includes(armGroups?.label)" -->
            <td
              class="border border-slate-300 py-7 px-7"
              v-for="intervention in props.study?.protocolSection
                ?.armsInterventionsModule?.interventions"
              :key="intervention?.type"
            >
              {{ `${intervention.type}: ${intervention.name}` }}
              <!-- Drug: Dapagliflozin -->
              <ul class="list-disc">
                <li>{{ intervention?.description }}</li>
                <li>
                  Other Names:
                  <ul class="list-disc list-inside">
                    <li
                      v-for="otherName in intervention?.otherNames"
                      :key="otherName"
                    >
                      {{ otherName }}
                      <!-- BMS-512148 -->
                    </li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
          <!-- <tr>
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
                    </tr> -->
        </tbody>
      </table>
      <p class="mb-3 mt-7">
        <strong class="text-primary">What is the study measuring? </strong>
      </p>
      <p class="mb-3">
        <span class="font-bold text-gray-600"> Primary Outcome Measures </span>
      </p>
      <table
        class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs border-collapse text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="border border-slate-300 py-4 px-3">Outcome Measure</th>
            <th class="border border-slate-300 py-4 px-3">
              Measure Description
            </th>
            <th class="border border-slate-300 py-4 px-3">Time Frame</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="primaryOutcomes in props.study?.protocolSection
              ?.outcomesModule?.primaryOutcomes"
            :key="primaryOutcomes"
          >
            <td class="border border-slate-300 py-4 px-3">
              {{ primaryOutcomes?.measure }}
            </td>
            <td class="border border-slate-300 py-7 px-7">
              {{ primaryOutcomes?.description }}
            </td>
            <td class="border border-slate-300 py-7 px-7">
              {{ primaryOutcomes?.timeFrame }}
            </td>
          </tr>
        </tbody>
      </table>
      <p class="mb-3 mt-10">
        <span class="font-bold text-gray-600">
          Secondary Outcome Measures
        </span>
      </p>
      <table
        class="w-full text-sm text-left border-collapse rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs border-collapse text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="border border-slate-300 py-4 px-3">Outcome Measure</th>
            <th class="border border-slate-300 py-4 px-3">
              Measure Description
            </th>
            <th class="border border-slate-300 py-4 px-3">Time Frame</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="secondaryOutcomes in props.study?.protocolSection
              ?.outcomesModule?.secondaryOutcomes"
            :key="secondaryOutcomes"
          >
            <td class="border border-slate-300 py-4 px-3">
              {{ secondaryOutcomes?.measure }}
            </td>
            <td class="border border-slate-300 py-7 px-7">
              {{ secondaryOutcomes?.description }}
            </td>
            <td class="border border-slate-300 py-7 px-7">
              {{ secondaryOutcomes?.timeFrame }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- <div class="col-span-1">wwwwwwwwww</div> -->
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>