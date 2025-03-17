<script setup>
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        console.log(section.offsetTop);
        window.scrollTo({
            top: section.offsetTop - 150,
            behavior: 'smooth' // You can change this to 'auto' for instant scroll
        });
    }

}
</script>
<template>
    <div class="bg-[#91a6d317] ml-16">
        <!-- <SideBar /> -->
        <TheHeader />
        <!-- <BreadCrumbs /> -->
        <div class="grid grid-cols-12">
            <div class=" grid  gap-4  col-span-2 grid-cols-subgrid ms-10 sticky top-0 self-start divide-y divide-slate-300">
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50  hover:text-primary hover:-translate-x-2" @click="scrollToSection('study_overview')">Study Overview</div>
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50 hover:text-primary hover:-translate-x-2" @click="scrollToSection('Contacts')">Contacts and Locations</div>
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50 hover:text-primary hover:-translate-x-2" @click="scrollToSection('Criteria')">Participation Criteria</div>
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50 hover:text-primary hover:-translate-x-2" @click="scrollToSection('Study_Plan')">Study Plan</div>
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50 hover:text-primary hover:-translate-x-2" @click="scrollToSection('Collaborators')">Collaborators and Investigators</div>
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50 hover:text-primary hover:-translate-x-2" @click="scrollToSection('publication')">Publications</div>
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50 hover:text-primary hover:-translate-x-2" @click="scrollToSection('studyRecord')">Study Record Dates</div>
                <div class="col-span-2 cursor-pointer transition ease-in-out delay-50 hover:text-primary hover:-translate-x-2">More Information</div>
            </div>
            <slot />
        </div>

    </div>
</template>