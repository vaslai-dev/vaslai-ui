<script setup>
import { IconBriefcase } from "@tabler/icons-vue";
import { IconChartAreaLine } from "@tabler/icons-vue";
import { IconGraph } from "@tabler/icons-vue";
import card from "~/components/Card/card.vue";
import { IconBrandFacebook } from '@tabler/icons-vue';

definePageMeta({
  layout: "base-layout",
});

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        console.log(section.offsetTop);
        window.scrollTo({
            top: section.offsetTop -150,
            behavior: 'smooth' // You can change this to 'auto' for instant scroll
        });
    }

}

import { ref, onMounted, onBeforeUnmount } from "vue";

// State to track button visibility
const isVisible = ref(false);

// Scroll handler function
const handleScroll = () => {
  if (window.scrollY > 200) { // Show button after scrolling 200px
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Set up and clean up scroll event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
        <head>
            <title>AI-Powered Clinical Trial Data Management & Analysis | Vaslai</title>
            <meta name="description" content="Vaslai revolutionizes Clinical Trial Data Management, Collection, and Analysis with AI-powered solutions. Streamline research, gain real-time insights, and enhance trial accuracy. Try our 30-day free subscription today!" />
            <meta name="keywords" content="clinical trial data management, clinical trial data analysis, clinical trial data, clinical trial data management software, clinical trial data collection, clinical data trial analysis, clinical trial solutions, AI clinical trial software, clinical trial insights" />
        </head>
  <!-- Header -->
  <div class="bg-white">
    <!-- </header> -->
      
    <!-- Hero Section -->
    <!--<section class="bg-white py-20 fade-in">-->
    <div class="grid md:grid-cols-2 items-center justify-center pt-5"
      style="background-color: #e7eef4; background-repeat: no-repeat; background-size: cover; background-image: url('doctor.jpg') ; max-height:1000px; min-height:500px;">
      <div class="flex flex-col items-start justify-start gap-4 text-black mx-auto  ml-20 py-20">
        <h1 class="text-5xl font-bold mb-4 text-black">
          Streamline Clinical  Intelligence with Vasl AI
        </h1>
        <h3>
          QALB Holdings has created VASL AI, an on-demand Clinical Data Intelligence platform that offers a comprehensive solution to Every Need.
        </h3>
        <div style="color:#002261;">
          <h1 class="text-2xl font-bold text-blue">Connect with us  </h1>
          <!-- <p>Call Us at: +44 (0)20 8470 4967</p> -->
        </div>
        
        <div class="flex gap-4 ">
          <NuxtLink style="background-color:#2ea6f7;border-radius:1.6em" class=" text-white font-bold py-3 px-10   rounded hover:bg-blue-700 " to="/contact"> Contact Now >></NuxtLink>          
          <a href="#" style="background-color:#002261; border-radius:1.6em" class=" text-white font-bold py-3 px-10 rounded hover:bg-blue-700"  @click="scrollToSection('vasl-section')"> Discover More >></a>
        </div>
      </div>
      <!--<div class="mx-auto">
        <img
          src="~/public/hero.jpg"
          width="100%"
          height="100%"
          class="mx-auto"
          alt="Image"
        />
      </div>
    -->
    </div>
    <div style="background-color:#002261;color:white;display:flex;">
      <div style="margin-left:6%">
        <img
          src="~/public/free-trail.jpeg"
          width="200px"
          height="200px"
          class="mx-auto"
          alt="Image"  
          style="text-align:left"        
        />       
      </div>

      <div style="margin-left:40px;margin-top:40px">
        <h1 class="text-2xl font-bold mb-4">30 Days FREE TRIAL </h1>
        <h3> Get Hands on Our Tools and Gain Insights on  <br /> Medical Trial Data for 30 Days Free of Cost without any Credit Card.</h3>
      </div>

      <div style="margin-left:160px;margin-top:80px">
          <a href="signup" style="background-color:white; border-radius:1.6em" class="text-[#002261] font-bold py-3 px-10 rounded hover:bg-blue-700" @click="scrollToSection('vasl-section')">Start Free Trial  >> </a>
      </div>
    </div>

<!--
    <div style="display:flex;" >
      <div style="display:flex;margin:auto;text-align:left;margin-top:20px;margin-bottom:20px">
        <div>
          <img src="~/public/client.png"/>
        </div>
        <div style="margin-left:20px;">
          <h1 class="text-2xl font-bold mb-4">Client Support</h1>
          <hr />
        <h1> But must explain to you medical of and pain was.</h1>
         <hr />
        </div>
      </div>

      <div style="display:flex;text-align:left;margin:auto;margin-top:20px">

        <div>
        <img src="~/public/doct.png" /> 
        </div>
        <div  style="margin-left:20px;">
        <h1 class="text-2xl font-bold mb-4">Doctor Support</h1>
        <hr />  
        But must explain to you medical of and pain was.
         <hr />
        </div>
      </div>
      
    </div>

    <div style="text-align:center;margin:auto;margin-bottom:40px;">
          <a href="#" style="background-color:#2ea6f7; border-radius:1.6em" class=" text-white font-bold py-3 px-10 rounded hover:bg-blue-700" @click="scrollToSection('vasl-section')">About More >> </a>
    </div>
  -->
    <!-- Features Section -->
    <section class="py-16">
      <div class="container mx-auto text-center">
        <!-- <div class="grid grid-cols-1 md:grid-cols-1 gap-5"> -->
        <!-- <div class="bg-white p-5 rounded hover-card">
          <h3 class="text-2xl font-semibold mb-4"></h3>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
            maxime.
          </p>
        </div> -->
        <!-- </div> -->
        <div class="container mx-auto text-center">
          <div class="w-[70%] mx-auto">Vasl AI goes beyond traditional methods by leveraging a powerful combination of
            Machine Learning, Hyper Automation, and Data Analytics on defined ontologies. This unique approach enables
            Vasl AI to:
          </div>
          <div style="padding:60px;" class="grid grid-cols-1 md:grid-cols-4 rounded-lg">
            <div class="bg-[#002261] text-white p-6 hover-card flex flex-col items-center gap-4 hover:shadow-lg transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500  border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconBriefcase />
              </div>
              <h3 class="text-2xl font-semibold mb-4 pt-4">Deliver logical and accurate results</h3>
            </div>
            
            <div class="bg-[#002261] text-white p-6 hover-card flex flex-col items-center gap-4 hover:shadow-lg transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconChartAreaLine />
              </div>
              <h3 class="text-2xl font-semibold mb-4">Streamline access to information with Machine Learning</h3>
            </div>
            <div class="bg-[#002261] text-white p-6 hover-card flex flex-col items-center gap-4 hover:shadow-lg transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconGraph />
              </div>
              <h3 class="text-2xl font-semibold mb-4">Provide customized dashboards for various user groups</h3>
            </div>
            <div class="bg-[#002261] text-white p-6 hover-card flex flex-col items-center gap-4 hover:shadow-lg transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconBriefcase />
              </div>
              <h3 class="text-2xl font-semibold mb-4">Offer downloadable charts, graphs, and summaries</h3>
            </div>
            <!-- <div class="bg-white p-6 rounded shadow-md hover-card border">
        <h3 class="text-2xl font-semibold mb-4">Data Science</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div> -->
            <!-- <div class="bg-white p-6 rounded shadow-md hover-card border">
        <h3 class="text-2xl font-semibold mb-4">Data Science</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div> -->
            <!-- <div class="bg-white p-6 rounded shadow-md hover-card border">
        <h3 class="text-2xl font-semibold mb-4">Data Science</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div> -->
          </div>
        </div>
      </div>
    </section>

    <!--left column-->
    <div class="container bg-white mx-auto text-left cursor-pointer">
      <div class="bg-white px-10 pt-10 rounded">
        <h1 class="text-5xl text-blue-600 font-bold mb-2 text-center">Why Choose Us</h1>
        
      </div>
       
      
    </div>
     <div style="padding:60px;" class="grid grid-cols-1 md:grid-cols-3 gap-8 rounded">
            <div class="bg-white text-black p-6 hover-card flex flex-col items-center gap-4 hover:bg-[#002261] hover:text-white transition duration-300 rounded">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500  border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconBriefcase />
              </div>
               <div class="hover:underline">
              <!-- <h3 class="text-lg font-medium text-gray-800">Data Quality</h3> -->
              <p>
                <span class="font-bold ">Data Overload:</span> Sifting through massive amounts of data is a struggle.
                Vasl AI simplifies access to relevant information
              </p>
            </div>
            </div>
            
            <div class="bg-white text-black p-6 hover-card flex flex-col items-center gap-4 hover:bg-[#002261] hover:text-white transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconChartAreaLine />
              </div>
             <div class="hover:underline">
              <!-- <h3 class="text-lg font-medium text-gray-800">Data Quality</h3> -->
              <p>
                <span class="font-bold">Data Quality:</span> Manual data collection can be error-prone. Vasl AI ensures
                high-quality data through automation.
              </p>
            </div>
            </div>
            <div class="bg-white text-black p-6 hover-card flex flex-col items-center gap-4 hover:bg-[#002261] hover:text-white transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconGraph />
              </div>
             <div class="hover:underline">
              <!-- <h3 class="text-lg font-medium text-gray-800">Data Quality</h3> -->
              <p>
                <span class="font-bold">Actionable Insights: </span>Clients demand actionable insights. Vasl AI helps
                generate strategic reports that drive informed decision-making.
              </p>
            </div>
            </div>
            <div class="bg-white text-black p-6 hover-card flex flex-col items-center gap-4 hover:bg-[#002261] hover:text-white transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconBriefcase />
              </div>
              <div class=" hover:underline">
              <!-- <h3 class="text-lg font-medium text-gray-800">Data Quality</h3> -->
              <p>

                <span class="font-bold">Competitive Differentiation: </span> Standing out in a crowded market is
                crucial. Vasl AI empowers researchers with cutting-edge techniques for a competitive edge.

              </p>
            </div>
              </div>
            <div class="bg-white text-black p-6 hover-card flex flex-col items-center gap-4 hover:bg-[#002261] hover:text-white transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconBriefcase />
              </div>
              <div class="hover:underline">
              <!-- <h3 class="text-lg font-medium text-gray-800">Data Quality</h3> -->
              <p >
                <span class="font-bold"> Client Needs:</span> Meeting client demands for speed, budget, and scope is
                essential. Vasl AI delivers up-to-date insights efficiently.
              </p>
            </div>
            </div>
            <div class="bg-white text-black p-6 hover-card flex flex-col items-center gap-4 hover:bg-[#002261] hover:text-white transition duration-300">
              <div
                class="w-20 h-20 border-4 border-dotted hover:border-blue-500 border-indigo-600 flex justify-center items-center rounded-full hover:scale-150 transition duration-300">
                <IconBriefcase />
              </div>
              <div class="hover:underline">
              <!-- <h3 class="text-lg font-medium text-gray-800">Data Quality</h3> -->
              <p >
                <span class="font-bold"> Up-to-Date Data:</span> We are AI-enabled which helps to provide up-to-date data any time no more old reports always get what is latest.
              </p>
            </div>
            </div>
          </div>
    <!--right margin
    <div class="grid grid-cols-1 md:grid-cols-1 gap-2 bg-white">
      
      <div class="bg-white">
        <header class="flex flex-col justify-center py-16 px-4 md:px-8">
          <h1 class="text-5xl text-center font-bold text-blue-800">About Us</h1>
          <h1 class="text-3xl font-bold text-gray-800 my-6">
            We Complete Every Project With Extra Care As Customer Need
          </h1>
          <p class="text-xl text-gray-600 mt-4">
            QALB Holdings, a leading Al-powered tech firm based in London, UK,
            is revolutionizing the life sciences sector with Vasl Al. This
            groundbreaking technology empowers market researchers, business
            analysts, and other professionals with cutting-edge Al solutions for
            market research and competitive intelligence.
          </p>
          
        </header>
      </div>
    </div>
    -->
    <!--servicess-->
    <div class="container mx-auto text-center p-10 bg-[#F2FEFE]" id="vasl-section">
      <div>
        <h1 class="text-gray-700 font-bold text-3xl">The Vasl AI solutions</h1>
        <p class="mx-auto w-70 my-6">
          QALB Holdings has created Vasl AI, an on-demand Market Intelligence platform that offers a comprehensive
          solution:
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8   ">
        <div class="bg-white p-6 rounded shadow-md hover-card border cursor-pointer hover:shadow-lg transition duration-300">
          <h3 class="text-2xl font-semibold mb-4">Data Crawling and Storage</h3>
          <p class="text-gray-700">
            Vasl AI gathers data from various sources and stores it in a secure data warehouse.
          </p>
          <NuxtLink 
            style="background-color:#002261; width: 40px; height: 40px;float:right;margin-top:50px;" 
            class="text-white font-bold rounded-full flex items-center justify-center hover:bg-blue-700" 
            to="/contact"
          >
            1
          </NuxtLink>
        </div>
        <div class="bg-white p-6 rounded shadow-md hover-card border cursor-pointer hover:shadow-lg transition duration-300">
          <h3 class="text-2xl font-semibold mb-4">Data Processing</h3>
          <p class="text-gray-700">
            Experts develop algorithms for data mining, cleansing, and organization, making it user-friendly.
          </p>
           <NuxtLink 
            style="background-color:#002261; width: 40px; height: 40px;float:right;margin-top:30px;" 
            class="text-white font-bold rounded-full flex items-center justify-center hover:bg-blue-700" 
            to="/contact"
          >
            2
          </NuxtLink>
        </div>
        <div class="bg-white p-6 rounded shadow-md hover-card border cursor-pointer hover:shadow-lg transition duration-300">
          <h3 class="text-2xl font-semibold mb-4">Extensive Database</h3>
          <p class="text-gray-700">
            Vasl AI boasts a vast database encompassing millions of pharmaceutical & biotech products, thousands of
            indications, and hundreds of therapy areas.
          </p>
          <NuxtLink 
            style="background-color:#002261; width: 40px; height: 40px;float:right;margin-top:15px;" 
            class="text-white font-bold rounded-full flex items-center justify-center hover:bg-blue-700" 
            to="/contact"
          >
            3
          </NuxtLink>
        </div>
        <div class="bg-white p-6 rounded shadow-md hover-card border cursor-pointer hover:shadow-lg transition duration-300">
          <h3 class="text-2xl font-semibold mb-4">AI-Driven Insights</h3>
          <p class="text-gray-700">
            Vasl AI utilizes Machine Learning to provide logical and accurate solutions across various therapeutic areas
            and indications globally.
          </p>
          <NuxtLink 
            style="background-color:#002261; width: 40px; height: 40px;float:right;margin-top:20px;" 
            class="text-white font-bold rounded-full flex items-center justify-center hover:bg-blue-700" 
            to="/contact"
          >
            4
          </NuxtLink>
        </div>
        <div class="bg-white p-6 rounded shadow-md hover-card border cursor-pointer hover:shadow-lg transition duration-300">
          <h3 class="text-2xl font-semibold mb-4">Customizable Dashboards</h3>
          <p class="text-gray-700">
            Users can access information and dashboards tailored to their specific needs.
          </p>
          <NuxtLink 
            style="background-color:#002261; width: 40px; height: 40px;float:right;margin-top:40px;" 
            class="text-white font-bold rounded-full flex items-center justify-center hover:bg-blue-700" 
            to="/contact"
          >
            5
          </NuxtLink>
        </div>
        <!-- <div class="bg-white p-6 rounded shadow-md hover-card border cursor-pointer hover:shadow-lg transition duration-300">
          <h3 class="text-2xl font-semibold mb-4">Data Science</h3>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
            maxime.
          </p>
          
        </div> -->
      </div>
    </div>

    

    <!-- <div class="text-center pt-6">
      <h1 class="font-sans text-2xl font-medium text-blue-500">Latest News</h1>
  
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestias unde autem aspernatur quod, non
        voluptatum eius praesentium similique rem</h3>



    </div>
    <card></card> -->

    <!--<section class="bg-blue-600 py-20 text-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p class="mb-8">
          Contact us today to learn more about our services and how we can help
          your business grow.
        </p>
        <a
          href="#"
          class="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200"
          >Contact Us</a
        >
      </div>
    </section>
  -->

    <!-- <div class="container mx-auto text-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded shadow-md hover-card">
        <h3 class="text-2xl font-semibold mb-4">Data Science</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div>
      <div class="bg-white p-6 rounded shadow-md hover-card">
        <h3 class="text-2xl font-semibold mb-4">Data Engineering</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div>
      <div class="bg-white p-6 rounded shadow-md hover-card">
        <h3 class="text-2xl font-semibold mb-4">Facing AI Challenges</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div>
    </div>
  </div> -->

    <!-- Call to Action Section -->
    <!-- <section class="bg-blue-600 py-20 text-white">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p class="mb-8">
        Contact us today to learn more about our services and how we can help
        your business grow.
      </p>
      <a
        href="#"
        class="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200"
        >Contact Us</a
      >
    </div>
  </section> -->

    <!-- <div class="container mx-auto text-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded shadow-md hover-card">
        <h3 class="text-2xl font-semibold mb-4">Data Science</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div>
      <div class="bg-white p-6 rounded shadow-md hover-card">
        <h3 class="text-2xl font-semibold mb-4">Data Engineering</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div>
      <div class="bg-white p-6 rounded shadow-md hover-card">
        <h3 class="text-2xl font-semibold mb-4">Facing AI Challenges</h3>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          maxime.
        </p>
      </div>
    </div>
  </div> 

    <div style="height:70vh;margin:auto;display:flex;margin-bottom:20px;" class="bg-gradient-to-r from-[#00042c] to-[#171147] text-white">
       <div style="float:left;width:50%;text-align:center;margin-top:10%;">
          <NuxtLink style="background-color:#002261;border-radius:1.6em" class=" text-white font-bold py-3 px-10   rounded hover:bg-blue-700 " to="/contact">WATCH VIDEO </NuxtLink>          

       </div>

       <div style="float:right;width:50%;margin-top:5%;margin-right:2%;">
        <h2 class="text-5xl font-bold mb-4">
            Professional Medical Care Measure Medical.
        </h2>
        <p>
            We are privileged to work with hundreds of future-thinking medial, 
            including many of the world’s top hardware, software, and brands ,
            feel safe and comfortable in establishing.

        </p>
        <br/> <br />
          <a href="#" style="background-color:white; border-radius:1.6em" class="text-[#002261] font-bold py-3 px-10 rounded hover:bg-blue-700" @click="scrollToSection('vasl-section')">Video More >> </a>

       </div>
    </div> -->

    <div
          v-if="isVisible"
          @click="scrollToTop"
          class="fixed bottom-8 right-8 bg-[#002261] font-bold text-white p-4 rounded-full shadow-lg cursor-pointer transition-opacity duration-300 hover:bg-blue-800"
        >
     Go ↑
    </div>
    <!-- Footer -->

    <div class="bg-gradient-to-r from-[#00042c] to-[#171147]">
      <footer class="text-white font-bold">
        <div class="bg-dark-blue  text-white container mx-auto px-10 pt-5">
          <div class="flex flex-wrap justify-between items-start bg-dark-400 p-4 text-white ">
            <div class="bg-[#2ea6f7] w-full  sm:w-1/4  px-5">
              <div>
                <img src="~/public/Logo.png" class="h-[60px] w-[120px]  ">
              </div>
              <hr />
              <p class="text-white">Vasl Al is groundbreaking technology empowers market researchers, business analysts, and other professionals with cutting-edge Al solutions for market research and competitive intelligence.
              </p>

              <div class="flex mt-4 gap-2">
               <!--
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin " width="30"
                  height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
                -->

              </div>
            </div>
            <!--
            <div class="w-full sm:w-1/6 mb-4 sm:mb-0 ">
              <h3 class="mb-4 font-bold text-2xl border-b-4 pb-3 border-[#060c4a]">Servicees</h3>
            </div>
            -->
            <div class="w-full sm:w-1/6 mb-4 sm:mb-0 ">
              <h3 class="mb-4 font-bold text-2xl border-b-4 pb-3 border-[#060c4a]">Important Links</h3>
              <ul>
                <li><a href="About-us" class="text-gray-400 hover:text-white flex items-center">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 7l5 5l-5 5" />
                        <path d="M13 7l5 5l-5 5" />
                      </svg>
                    </div>
                    <span>About Us</span>
                  </a></li>
                <li><a href="Services" class="text-gray-400 hover:text-white flex items-center">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 7l5 5l-5 5" />
                        <path d="M13 7l5 5l-5 5" />
                      </svg></div><span>Services</span>
                  </a></li>
              </ul>
            </div>
            <div class="w-full sm:w-1/3">
              <h3 class="mb-4 font-bold text-2xl border-b-4 pb-3 border-[#060c4a] ">Information</h3>
              <ul>
                <div class="flex mt-4 gap-2">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-phone">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  <div class="flex flex-col gap-1">
                    <div class="text-gray-400 text-1xl  font-bold text-white ">Phone</div>
                    <span class="text-gray-400 text-white ">+44 (0)20 8470 4967</span>
                  </div>
                  
                </div>

                <div class="flex mt-4 gap-2">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                  <div class="flex flex-col gap-1">
                    <div class="text-gray-400 text-1xl  font-bold text-white ">Email</div>
                    <span class="text-gray-400 text-white ">Sales@vaslai.com</span>
                  </div>
                  
                </div>
                <div class="flex mt-4 gap-2">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  <div class="flex flex-col gap-1">
                    <div class="text-gray-400 text-1xl  font-bold text-white ">Address</div>
                    <span class="text-gray-400 text-white ">Plashet Grove, London,
                      United Kingdom, E6 1AA</span>
                  </div>
                  
                </div>

                
                
                
                
                
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <footer class="bg-white-800 font-bold p-4 text-black text-center">
      <p>&copy; 2025 Vasl AI. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Optional: Customize the button style */
.go-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px; 
  background-color: #002261;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}

.go-to-top:hover {
  background-color: #0056b3;
}
</style>