<script setup>
const props = defineProps(["study"]);
const informationProvider = computed(() =>{
  if(props.study?.protocolSection?.sponsorCollaboratorsModule?.responsibleParty?.investigatorFullName) {
    return props.study?.protocolSection?.sponsorCollaboratorsModule?.responsibleParty?.investigatorFullName+ ', ' + props.study?.protocolSection?.sponsorCollaboratorsModule?.responsibleParty?.investigatorAffiliation
  }
  else {
    return props.study?.protocolSection?.sponsorCollaboratorsModule?.leadSponsor?.name
  }
})
</script>
<template>
  <div class="mb-4 bg-white sticky top-0 px-5 ml-3 py-5 shadow-lg rounded flex flex-col">
  <h1
    class="bg-white text-primary text-3xl"
  >
    {{ props.study?.protocolSection?.identificationModule?.briefTitle }}
    <sup
      class="bg-blue-100 text-green-800 text-xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-green-800 ms-2"
      >{{ props.study?.protocolSection?.statusModule?.overallStatus }}</sup
    >
  </h1>
  <div class="grid grid-cols-2 mt-2 gap-2">
    <div><strong class="text-primary">ClinicalTrials.gov ID :</strong> <span>{{ props.study?.protocolSection?.identificationModule?.nctId }}</span> </div>
    <div> <strong class="text-primary">Sponsor :</strong> <span>{{ props.study?.protocolSection?.sponsorCollaboratorsModule?.leadSponsor?.name }}</span></div>
    <div><strong class="text-primary">Information provided by :</strong> <span>{{ informationProvider}}</span> </div>
    <div><strong class="text-primary"> Last Update Posted :</strong> <span> {{ props.study?.protocolSection?.statusModule?.lastUpdatePostDateStruct?.date }}</span></div>

  </div>
</div>
  <!-- Container for demo purpose -->

  <div
    class="container my-3 ml-6	w-[97%] md:pl-6 gap-5 py-6 border-4 border-white grid grid-cols-3 shadow-xl hover:shadow-2xl"
    id="study_overview"
  >
    <!-- Section: Design Block -->
    <section class="mb-32 col-start-1 col-end-3">
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
        >Study Overview
      </p>
      <p class="mb-3 text-primary border-b-2">
        <strong>Brief Summary</strong>
      </p>
      <p class="mb-3 whitespace-pre-wrap">
        {{ props.study?.protocolSection?.descriptionModule?.briefSummary }}
      </p>
      <p class="mb-3 text-primary border-b-2">
        <strong>Detailed Description</strong>
      </p>
      <p class="mb-3 whitespace-pre-wrap">
        {{
          props.study?.protocolSection?.descriptionModule?.detailedDescription
        }}
      </p>
      <p class="mb-3 text-primary">
        <strong>Official Title</strong>
      </p>

      <p class="mb-6">
        {{ props.study?.protocolSection?.identificationModule?.officialTitle }}
        <!-- A Phase 3, Randomized, Double-blind, Placebo Controlled, Multicenter Trial to Evaluate the Safety and
                Efficacy of BMS-298585 in Combination With Glyburide Therapy in Subjects With Type 2 Diabetes Who Have
                Inadequate Glycemic Control on Sulfonylurea Therapy Alone -->
      </p>

      <p
        class="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700"
      >
        <strong class="text-primary">Conditions:</strong>
        <span
          v-for="conditions in props.study?.protocolSection?.conditionsModule
            .conditions"
          :key="conditions"
        >
          {{ conditions }},
        </span>
      </p>

      <p class="mb-3 text-primary">
        <strong>Intervention / Treatment</strong>
      </p>
      <ul class="mb-6 list-inside list-disc">
        <li
          v-for="(armGroup, index) in props.study?.protocolSection?.armsInterventionsModule?.interventions"
          :key="armGroup"
        >
          {{ armGroup.name }}
        </li>
      </ul>
      <p class="mb-3">
        <strong class="text-primary">Other Study ID Numbers</strong>
      </p>
      <ul class="mb-6 list-inside list-disc">
        <li>
          {{
            props.study?.protocolSection?.identificationModule?.orgStudyIdInfo
              ?.id
          }}
        </li>
      </ul>
    </section>
    <div class="col-span-1">
      <p class="mb-3 mt-12 border-b-2">
        <strong class="text-primary">Study Start (Actual) </strong>
      </p>
      <span>2013-11-30</span>
      <p class="mb-3 mt-4 border-b-2">
        <strong class="text-primary">Primary completion (Actual) </strong>
      </p>
      <span>2022-11-31 </span>
      <p class="mb-3 mt-4 border-b-2">
        <strong class="text-primary">Study completion (Estimated) </strong>
      </p>
      <span>2024-12-31 </span>
      <p class="mb-3 mt-4 border-b-2">
        <strong class="text-primary">Enrollment (Estimated) </strong>
      </p>
      <span>2000 </span>
      <p class="mb-3 mt-4 border-b-2">
        <strong class="text-primary">Study Type </strong>
      </p>
      <span>Observational </span>
    </div>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>
