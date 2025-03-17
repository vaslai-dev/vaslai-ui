<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';


definePageMeta({
  layout: "base-layout",
});



function onSubmit(values) {
  
  // if(values.email === 'vaslai@gmail.com' && values.password === 'vaslai@12345'){
  //   alert("logged in and in")
  // }
  // else{
  //   alert("Invalid Email address or Password")
  // }
}

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
// function validateEmail(value) {
//       // if the field is empty
//       if (!value) {
//         return 'This field is required';
//       }
//       // if the field is not a valid email
//       const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//       if (!regex.test(value)) {
//         return 'This field must be a valid email';
//       }
//       // All is good
//       return true;
//     }




</script>

<template>
  <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="max-w-md w-full bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg">
      <div class="flex items-center justify-center mb-4">
        <img src="/Logo.png" alt="Pharma Logo" class="h-16 mr-2 mb-2" />
        
      </div>
      <h2 class="text-3xl font-bold text-center mb-4 text-gray-700 ">Sign Up</h2>

      <Form  @submit="onSubmit"  class="space-y-4" :validation-schema="schema">
        <!-- <div>
          <label for="name" class="block font-medium">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="w-full border rounded px-3 py-2 mt-1"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div> -->
        <div>
          
          <label for="email" class="block font-medium text-lg">Email Id</label>
          <Field  name="email" type="email" class="w-full border rounded px-3 py-2 mt-1"/>
          <ErrorMessage name="email" />
          <!-- <input
            type="email"
            id="email"
           name="email"
            class="w-full border rounded px-3 py-2 mt-1"
          /> -->
          
        </div>
        <div>
          <label for="password" class="block font-medium text-lg">Password</label>
          <Field name="password" type="password" class="w-full border rounded px-3 py-2 mt-1" />
          <ErrorMessage name="password" />
          <!-- <input
            type="password"
            id="password"
            name="password"
            class="w-full border rounded px-3 py-2 mt-1"
          /> -->
         
        </div>

        <button
          type="submit"
          class=" w-full bg-gradient-to-r from-[#008BBE] to-blue-800 text-white font-bold py-2 px-5 rounded transition duration-300 ease-in-out transform hover:scale-105 "
        >
          Sign Up
        </button>
      </Form>
      <p class="text-center mt-4">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-500">Login</NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.text-red-500 {
  color: #f56565;
}
</style>
