<script setup>
// import pubChemSidebar from '../../';   
const  pubChemSidebar =  defineAsyncComponent(()=> import  ("~/components/pubchem/pubChemSidebar.vue"))




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
    <div class="bg-blue-100 ml-12  ">
        <!-- <SideBar /> -->
        <TheHeader />
        <!-- <BreadCrumbs /> -->
        <div class="grid grid-cols-12 ">
             <pubChemSidebar></pubChemSidebar>
            <slot />
        </div>

    </div>
</template>