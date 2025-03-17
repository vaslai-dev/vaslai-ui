<script setup>
import SideBar from "~/components/DailyMed/SideBar.vue";
</script>
<template>
  <div class="bg-[#91a6d317] ml-16 lg:ml-24 h-fit relative">
    <SideBar />
    <TheHeader />
    <!-- <BreadCrumbs /> -->
    <slot />
  </div>
</template>
