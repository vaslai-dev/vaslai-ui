<script setup>
definePageMeta({
  layout: "base-layout",
});
</script>


<template>
    <div class="py-10">
      <div class="container mx-auto text-center  p-10 bg-[#F2FEFE]" id="vasl-section">
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
    </div>


    
</template>