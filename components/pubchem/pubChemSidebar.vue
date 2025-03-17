<script setup>
import PanelMenu from "primevue/panelmenu";
import { ref } from "vue";
import { usePubChem } from "~/store/pubchem";

const pubChemStore = usePubChem();
const { getSideBarData: sideBarData } = storeToRefs(pubChemStore);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    console.log(section.offsetTop);
    window.scrollTo({
      top: section.offsetTop - 150,
      behavior: "smooth", // You can change this to 'auto' for instant scroll
    });
  }
};
const openItems = ref(new Set());

const isOpen = (index) => {
  return openItems.value.has(index);
};
const toggle = (index) => {
  toggleItem(index);
};

const toggleItem = (index) => {
  if (openItems.value.has(index)) {
    openItems.value.delete(index);
  } else {
    openItems.value.add(index);
  }
};
</script>

<template>
  <div
    class="grid gap-4 col-span-2 grid-cols-subgrid sticky top-0 self-start divide-y divide-slate-500"
  >
    <div class="pl-2">
      <h1 class="text-2xl b py-2">CONTENTS</h1>
      <h2 class="py-1 pl-2 font-medium">Title and Summary</h2>

      <!-- 1 Structures -->
      <div v-for="sideData in sideBarData" :key="sideData.index">
        <div
          class="flex justify-between hover:border-l-4 border-t-2 border-b-2 hover:border-blue-500 hover:bg-blue-200 pl-2 cursor-pointer"
          @click="toggle(sideData.index)"
        >
          <ul class="font-medium" @click="scrollToSection(sideData.index)">
            {{
              sideData.index + " " + sideData.title
            }}
          </ul>
          <svg
            v-if="sideData?.subData?.length > 0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            class="size-1 h-5 pt-1 pr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div
          v-if="isOpen(sideData.index)"
          class="pl-4"
          v-for="sideData2 in sideData.subData"
          :key="sideData2.index"
        >
          <!-- Sub-Accordion: Computed Descriptors -->
          <div
            class="flex justify-between hover:border-l-4 border-t-2 border-b-2 hover:border-blue-500 hover:bg-blue-200 pl-2 cursor-pointer"
            @click="toggle(sideData2.index)"
          >
            <ul @click="scrollToSection(sideData2.index)">
              {{
                sideData2.index + " " + sideData2.title
              }}
            </ul>
            <svg
              v-if="sideData2?.subData?.length > 0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="size-1 h-5 pt-1 pr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div
            v-if="isOpen(sideData2.index)"
            class="pl-4"
            v-for="sideData3 in sideData2?.subData"
            :key="sideData3.index"
          >
            <ul
              class="hover:border-l-4 border-t-2 border-b-2 hover:border-blue-500 hover:bg-blue-200 cursor-pointer"
              @click="scrollToSection(sideData3.index)"
            >
              {{
                sideData3.index + " " + sideData3.title
              }}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
