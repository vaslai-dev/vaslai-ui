<script setup>
const router = useRouter();
const isUserLoggedIn = computed(() => {
  if (process.browser) {
    return JSON.parse(localStorage?.getItem('user')) || '';
  }
});

function logOutUser() {
  localStorage.setItem('user', null);
  router.push('/');
}
</script>

<template>
  <div class="bg-[#002261] text-white font-bold py-2 px-6 fixed top-0 left-0 w-full flex items-center justify-between">
    <!-- Left Section: Email and Address -->
    <div class="flex items-center gap-12">
      <!-- Email -->
      <div class="flex items-center gap-2 pl-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 16.5v-9A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 3z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.5l9 6 9-6" />
        </svg>
        <span>sales@vaslai.com</span>
      </div>
      <!-- Address -->
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 9c0 7.5-7.5 12-7.5 12S4.5 16.5 4.5 9a7.5 7.5 0 1115 0z" />
        </svg>
        <span>Plashet Grove, London, United Kingdom, E6 1AA</span>
      </div>
    </div>
    <!-- Right Section: Social Media Icons -->
    <div class="flex items-center gap-4">
      <!-- Facebook -->
      <a href="https://facebook.com" target="_blank" class="hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.6v-3.622h3.219V8.413c0-3.19 1.942-4.927 4.783-4.927 1.36 0 2.527.101 2.865.146v3.323H17.56c-1.623 0-1.937.77-1.937 1.9v2.49h3.874l-.506 3.622h-3.368V24h6.603c.729 0 1.325-.595 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z" />
        </svg>
      </a>
      <!-- Twitter -->
      <a href="https://twitter.com" target="_blank" class="hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M24 4.557a9.816 9.816 0 01-2.827.775 4.932 4.932 0 002.165-2.724 9.868 9.868 0 01-3.127 1.196 4.914 4.914 0 00-8.385 4.482A13.935 13.935 0 011.671 3.149a4.912 4.912 0 001.523 6.555A4.899 4.899 0 01.96 9.237v.062a4.911 4.911 0 003.946 4.814 4.9 4.9 0 01-2.212.084 4.915 4.915 0 004.588 3.417A9.867 9.867 0 010 21.543a13.924 13.924 0 007.548 2.211c9.051 0 13.999-7.498 13.999-13.987 0-.213-.005-.426-.014-.637A9.936 9.936 0 0024 4.557z" />
        </svg>
      </a>
      <!-- Instagram -->
      <a href="https://instagram.com" target="_blank" class="hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M12 0C8.74 0 8.332.01 7.053.07c-1.283.06-2.162.28-2.922.59-.77.32-1.43.75-2.06 1.38-.63.63-1.06 1.29-1.38 2.06-.31.76-.53 1.639-.59 2.922C.01 8.332 0 8.74 0 12s.01 3.668.07 4.947c.06 1.283.28 2.162.59 2.922.32.77.75 1.43 1.38 2.06.63.63 1.29 1.06 2.06 1.38.76.31 1.639.53 2.922.59C8.332 23.99 8.74 24 12 24s3.668-.01 4.947-.07c1.283-.06 2.162-.28 2.922-.59.77-.32 1.43-.75 2.06-1.38.63-.63 1.06-1.29 1.38-2.06.31-.76.53-1.639.59-2.922.06-1.279.07-1.687.07-4.947s-.01-3.668-.07-4.947c-.06-1.283-.28-2.162-.59-2.922-.32-.77-.75-1.43-1.38-2.06-.63-.63-1.29-1.06-2.06-1.38-.76-.31-1.639-.53-2.922-.59C15.668.01 15.26 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 10.192a4.03 4.03 0 100-8.06 4.03 4.03 0 000 8.06zm6.406-11.844a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Navigation Section -->
  <div class="bg-white pt-12 ">
    <div class="text-black font-bold bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] flex justify-around py-1 fixed top-10 left-0 w-full">
      <div style="cursor: pointer;">
      <NuxtLink to="/">
        <img src="~/public/Logo.png" alt="Logo" class="h-16">
       </NuxtLink>
      </div>
      
      <div class="flex gap-10 pt-4">
        <!-- Navigation Links -->
        <NuxtLink to="/">
          <ul class="flex gap-1 hover:text-blue-400 cursor-pointer">Home
           
          </ul>
        </NuxtLink>
        <NuxtLink to="/About-us" class="flex gap-1 hover:text-blue-400 cursor-pointer">About Us
          
        </NuxtLink>
       

        <NuxtLink to="/Services" class="flex gap-1 hover:text-blue-400 cursor-pointer">Services
          
        </NuxtLink>
        
        <!-- Contact shifted to the last -->
        <NuxtLink to="/contact" class="flex gap-1 hover:text-blue-400 cursor-pointer">Contact
          
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/login" v-if="!isUserLoggedIn">
          <button style="background-color:#2ea6f7; border-radius:1.6em"
            class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-8 mt-2 border-b-5 border-blue-700 hover:border-blue-500 rounded-lg">
            Log in
          </button>
        </NuxtLink>
        <NuxtLink to="/" v-else>
          <button @click="logOutUser"
            class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-8 mt-2 border-b-5 border-blue-700 hover:border-blue-500 rounded-lg">
            Log out
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
