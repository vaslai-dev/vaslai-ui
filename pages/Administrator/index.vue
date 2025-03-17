<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: "base-layout",
});

const router = useRouter()

function onSubmit(values) {
  
  if(values.email === 'vaslai@gmail.com' && values.password === 'vaslai@12345') {
    
    localStorage.setItem('user',JSON.stringify(values) )
    router.push('/company-data')
  }
  else{
    alert("Invalid Email address or Password")
  }
}

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

</script>

<template>
    <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="max-w-md w-full bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg">
      <div class="flex items-center justify-center mb-4">
        <img src="/Logo.png" alt="Pharma Logo" class="h-16 mr-2 mb-2" />
        
      </div>
      <h2 class="text-3xl font-bold text-center mb-4 text-gray-700 ">Admin Login</h2>

      <Form @submit="onSubmit" class="space-y-4" :validation-schema="schema" >
        <div>
          <label for="email" class="block font-medium text-lg ">Admin Email Id</label>
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
        <div class="flex justify-between items-center">
          <div>
            <input
              type="checkbox"
              id="remember_me"
               name="remember_me"
              class="mr-2"
            />
            <label for="remember_me">Remember me</label>
          </div>
          <a href="#" class="text-blue-500 hover:text-blue-700">Forgot Password?</a>
        </div>
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-[#008BBE] to-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Login
        </button>
      </Form>
      
    </div>
  </div>

    
</template>