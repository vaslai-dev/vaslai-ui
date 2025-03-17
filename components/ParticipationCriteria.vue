<script setup>
const props = defineProps(["study"]);
function replaceAsterisksWithBulletsForInclusion(text) {
  // const inclusion = text.split('* ')
  let inclusion = text?.split("Exclusion Criteria:")[0];
  inclusion = inclusion?.split("Inclusion Criteria:\n\n*")[1];
  return "<li>" + inclusion?.split("* ").join("</li><li>") + "</li>";
}
function replaceAsterisksWithBulletsForExclusion(text) {
  const exclusion = text?.split("Exclusion Criteria:\n\n*")[1];
  return "<li>" + exclusion?.split("* ").join("</li><li>") + "</li>";
}
// const  replaceAsterisksWithBullets = (text) => {
//     // Replace asterisks with bullet points
//     return '<li>' + text.split('* ').join('</li><li>') + '</li>';
// }
</script>
<template>
  <!-- Container for demo purpose -->

  <div
    class="container w-[97%] my-my-3 mx-6 md:px-6 gap-5 py-6 border-4  border-white grid grid-cols-3 shadow-lg hover:shadow-2xl"
    id="Criteria"
  >
    <!-- Section: Design Block -->
    <section class="mb-10 col-start-1 col-end-3">
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
        >Participation Criteria
      </p>
      <!-- <p class="mb-3  border-b-2">
                <strong>Participation Criteria</strong>
            </p> -->
      <p class="mb-3">
        Researchers look for people who fit a certain description, called
        eligibility criteria. Some examples of these criteria are a person's
        general health condition or prior treatments.
      </p>

      <p class="mb-3">
        <strong class="text-primary">Eligibility Criteria </strong>
      </p>

      <!-- <p class="mb-6">
                A Phase 3, Randomized, Double-blind, Placebo Controlled, Multicenter Trial to Evaluate the Safety and
                Efficacy of BMS-298585 in Combination With Glyburide Therapy in Subjects With Type 2 Diabetes Who Have
                Inadequate Glycemic Control on Sulfonylurea Therapy Alone
            </p> -->

      <p
        class="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700"
      >
        <strong>Description:</strong>
      </p>

      <!-- <p class="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
                libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
                inventore perspiciatis possimus quia incidunt maiores molestias eaque
                nam commodi! Magnam, labore.
            </p> -->

      <p class="mb-3">
        <strong class="text-primary">Inclusion Criteria: </strong>
      </p>
      <ul
        class="mb-6 list-inside list-disc ml-5"
        v-html="
          replaceAsterisksWithBulletsForInclusion(
            props.study?.protocolSection?.eligibilityModule?.eligibilityCriteria
          )
        "
      ></ul>
      <p class="mb-3">
        <strong class="text-primary">Exclusion Criteria: </strong>
      </p>
      <ul
        class="mb-6 list-inside list-disc ml-5"
        v-html="
          replaceAsterisksWithBulletsForExclusion(
            props.study?.protocolSection?.eligibilityModule?.eligibilityCriteria
          )
        "
      ></ul>

      <!-- <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                temporibus nulla voluptatibus accusantium sapiente doloremque.
                Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
                nostrum in accusantium dolore veritatis eius est?
            </p> -->
    </section>
    <div class="col-span-1">
      <p class="mb-3 mt-12 border-b-2">
        <strong class="text-primary">Ages Eligible for Study </strong>
      </p>
      <span
        >18 Years to 90 Years <br />
        (Adult,Older Adult)</span
      >
      <p class="mb-3 mt-6 border-b-2">
        <strong class="text-primary">Sexes Eligible for Study </strong>
      </p>
      <span>All</span>
      <p class="mb-3 mt-4 border-b-2">
        <strong class="text-primary">Accepts Healthy Volunteers </strong>
      </p>
      <span>No</span>
      <p class="mb-3 mt-4 border-b-2">
        <strong class="text-primary">Sampling Method </strong>
      </p>
      <span>Non-Probability Sample</span>
    </div>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>