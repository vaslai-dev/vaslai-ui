<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useUserData } from '~/store/user-data';

const showModal = ref(false);
const users = ref([]);
let nextId = ref(1);
const formRef = ref(null); // Ref to access the form instance
const openDropdownIndex = ref(-1);
const userDataStore = useUserData();
const route = useRoute()


// Populate users from UserData in the store
onMounted(async() => {
  
  console.log(route.query.id,"abcde");
  await userDataStore.fetchData(); // Fetch data from the store
  users.value = userDataStore.UserData.filter((user) => user.company.id == route.query.id )
});

const toggleDropdown = (index) => {
    openDropdownIndex.value = openDropdownIndex.value === index ? -1 : index;
}; 

const addUser = (values, { resetForm }) => {
  users.value.push({
    id: Date.now(), 
    Company: values.company,
    Email: values.email,
    Name: values.name,
    Phone: values.phone,
    Country: values.country,
    Report: values.report,
  });

  resetForm();
  showModal.value = false;
};

// Function to delete a user based on ID
const deleteUser = (id) => {
  users.value = users.value.filter(user => user.id !== id);
};

// Function to reset the form outside of the submit event
const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetForm(); // Reset the form fields
  }
};

const schema = yup.object({
  company: yup.string().required("Company is required").max(30, "Company must be 30 characters or less"),
  email: yup.string().required("Email is required").email("Email must be valid"),
  name: yup.string().required("Name is required").max(15, "Name must be 15 characters or less"),
  phone:yup.string().required("Phone is required")
    .matches(/^[0-9]+$/, "Phone must be a valid number") // Ensure digits only
    .min(10, "Phone must be at least 10 digits").max(13, "Phone must be 13 digits or less"),
  country: yup.string().required("Country is required").max(60, "Country must 60 digits or less"),
  report: yup.string().required("Report is required").max(100, "Report must be 100 digits or less")
});

definePageMeta({
  layout: "base-layout",
});
</script>

<template>
  <div class="mt-28">
    <h1 class="text-4xl font-bold ml-[45%]">Users Data</h1>
    
    <div v-show="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
  <div class="bg-white w-1/2 p-6 rounded-lg shadow-lg">
    <div class="">
    
    <div><h2 class="text-2xl font-bold mb-4">Add User</h2></div>
    
    <!-- <div class=" ">  <button 
      @click="() => { showModal = !showModal; resetForm(); }" 
      v-if="showModal" 
      class="  font-bold   bg-red-500 rounded-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    </button></div> -->

  </div>

    <!-- Close Modal Button -->
    <button 
      @click="showModal = false" 
      class="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Bind the form to formRef -->
    <Form ref="formRef" @submit="addUser" :validation-schema="schema">
      <div class="mb-4">

        <!-- Buttons for modal and reset form -->
  
        <label for="company" class="block font-semibold">Company</label>
        <Field name="company" type="text" class="border border-gray-300 rounded w-full p-2 mt-1" />
        <ErrorMessage name="company" class="text-red-500 text-sm" />
      </div>

      <div class="mb-4">
        <label for="email" class="block font-semibold">Email</label>
        <Field name="email" type="email" class="border border-gray-300 rounded w-full p-2 mt-1" />
        <ErrorMessage name="email" class="text-red-500 text-sm" />
      </div>


      <div class="mb-4">
        <label for="name" class="block font-semibold">Full Name</label>
        <Field name="name" type="text" class="border border-gray-300 rounded w-full p-2 mt-1" />
        <ErrorMessage name="name" class="text-red-500 text-sm" />
      </div>

      
      <div class="mb-4">
        <label for="phone" class="block font-semibold">Phone No</label>
        <Field name="phone" type="text" class="border border-gray-300 rounded w-full p-2 mt-1" />
        <ErrorMessage name="phone" class="text-red-500 text-sm" />
      </div>


      <div class="mb-4">
        <label for="country" class="block font-semibold">Country</label>
        <Field name="country" type="text" class="border border-gray-300 rounded w-full p-2 mt-1" />
        <ErrorMessage name="country" class="text-red-500 text-sm" />
      </div>


      <div class="mb-4">
        <label for="report" class="block font-semibold">Report</label>
        <Field name="report" type="text" class="border border-gray-300 rounded w-full p-2 mt-1" />
        <ErrorMessage name="report" class="text-red-500 text-sm" />
      </div>

      <div class="flex justify-end">
        <button type="button" @click="showModal = false" class="mr-2 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded">
          Cancel
        </button>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Add User
        </button>
      </div>
    </Form>
  </div>
</div>

    

    <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right  mb-4 " 
      @click="showModal = !showModal" 
      
    >
      Add users
    </button>

    <!-- Table to display user data -->
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
      <thead class="text-xs text-gray-700 uppercase bg-[#dce5f6] dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-5 border-r-2">Serial No</th>
          <th scope="col" class="px-6 py-5 border-r-2">Email</th>
          <th scope="col" class="px-6 py-5 border-r-2">First Name</th>
          <th scope="col" class="px-6 py-5 border-r-2">Last Name</th>
          <th scope="col" class="px-6 py-5 border-r-2">Phone</th>
          <th scope="col" class="px-6 py-5 border-r-2">Country</th>
  
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(user, index) in users" 
          :key="user.id" 
          class="bg-white border-b text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-sm cursor-pointer "
        >
          <td class="px-6 py-4 border-r">{{ index + 1 }}</td>
          <td class="px-6 py-4 border-r">{{ user.email }}</td>
          <td class="px-6 py-4 border-r">{{ user.first_name }}</td>
          <td class="px-6 py-4 border-r">{{ user.last_name }}</td>
          <td class="px-6 py-4 border-r">{{ user.phone_number }}</td>
          <td class="px-6 py-4 border-r" @mouseleave="toggleDropdown(-1)">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
       @mouseover="toggleDropdown(index)" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
  </svg>

  <!-- Dropdown Menu -->
  <div  v-if="openDropdownIndex === index"  
       class="z-10 bg-white divide-y absolute top-15 right-15 divide-gray-100 w-32 rounded-lg shadow dark:bg-gray-700 "
       @mouseleave="toggleDropdown(-1)">
    <ul class="py-2 divide-y divide-gray-200 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <a href="#" @click="deleteUser(user.id)" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Delete User
        </a>
      </li>
     
      
    </ul>
  </div>
</td>


          
        </tr>
      </tbody>
    </table>
  </div>
</template>
