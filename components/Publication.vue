<script setup>
const props = defineProps(["study"]);
</script>
<template>
  <!-- Container for demo purpose -->

  <div
    class="container w-[97%] my-3 mx-6 md:px-6 gap-5 py-6 border-4 border-white grid grid-cols-12 shadow-lg hover:shadow-2xl"
    id="publication"
  >
    <!-- Section: Design Block -->
    <section class="mb-32 col-start-1 col-end-12">
      <p
        class="mb-6 text-primary flex items-center font-bold uppercase text-danger dark:text-danger-500"
      >
        Publications
      </p>
      <!-- <p class="mb-3  border-b-2">
                <strong>Participation Criteria</strong>
            </p> -->
      <p class="mb-3">
        The person responsible for entering information about the study
        voluntarily provides these publications. These may be about anything
        related to the study.
      </p>
      <!-- <p class="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
                libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
                inventore perspiciatis possimus quia incidunt maiores molestias eaque
                nam commodi! Magnam, labore.
            </p> -->
      <div>
        <p class="mb-3 border-b-2">
          <span class="font-bold text-gray-600"> General Publications </span>
        </p>
        <ul
          class="font-medium text-gray-500 list-disc px-5"
          v-if="
            props.study?.protocolSection?.referencesModule?.references.length >
            0
          "
          v-for="referenceModule in props.study?.protocolSection
            ?.referencesModule?.references"
          :key="referenceModule"
        >
          <li class="py-2">
            {{ referenceModule?.citation }}
            <!-- Study Director:Bristol-Myers Squibb,Bristol-Myers Squibb -->
          </li>
        </ul>
        <!-- <ul>
                    <li>
                        referencesModule

                    </li>
                </ul> -->
        <p v-else>No publications available</p>
      </div>
    </section>
  </div>
  <!-- Container for demo purpose -->
</template>