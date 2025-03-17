
<script setup>
import FDASideBar from '~/components/fda/FDASideBar.vue';

</script>
<template>
    <div class="ml-16 lg:ml-64">
      <FDASideBar />
      <TheHeader />
    <!-- <BreadCrumbs /> -->
      <slot />
    </div>
  </template>
  
