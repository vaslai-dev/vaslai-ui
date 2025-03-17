<script setup>
import { ref } from "vue";
import pubchemSearchList from "../../components/pubchem/pubchemSearchList.vue";

const props = defineProps({
  dataTitle: String,
  subData: Array,
});

const showModal = ref(false);
</script>


<template>
  <div class="my-4">
    <div class="border shadow-xl bg-blue-100 border-blue-100 rounded-b-lg rounded-t-lg">
      <h1 class="cursor-pointer text-xl text-grey-300 font-bold my-3 ms-8" @click="showModal = !showModal">
        {{ dataTitle }}
      </h1>
    </div>
    <pubchemSearchList v-show="showModal" :data="subData" />
  </div>
</template>


