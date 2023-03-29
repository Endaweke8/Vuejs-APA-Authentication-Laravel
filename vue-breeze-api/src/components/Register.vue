<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        VueAuth
      </a>
      <div
        class="w-full bg-gray-200 rounded-lg shadow-xl border border-gray-400 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Register
          </h1>
          <form @submit.prevent="authStore.handleRegister(form)" class="space-y-4 md:space-y-6" >
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your Name</label
              >
              <input
                type="text"
                name="name"
                v-model="form.name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Endaweke Enkuahobe"
                
              />
              <div v-if="authStore.authErrors.name">
                
                <span class="text-red-500 p-2 m-2">{{ authStore.errors.name[0] }}</span>
                </div>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                v-model="form.email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                
              />
              <div v-if="authStore.authErrors.email">
                
                <span class="text-red-500 p-2 m-2">{{ authStore.errors.email[0] }}</span>
                </div>
            </div>

           
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="form.password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
              />
              <div v-if="authStore.authErrors.password">
                
                <span class="text-red-500 p-2 m-2">{{ authStore.errors.password[0] }}</span>
                </div>
            </div>


            <div>
              <label
                for="password confirmaiton"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password Confirmation</label
              >
              <input
                type="password"
                name="password confirmation"
                v-model="form.password_confirmation"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
              />
              <div v-if="authStore.authErrors.password_confirmation">
                
                <span class="text-red-500 p-2 m-2">{{ authStore.errors.password_confirmation[0] }}</span>
                </div>
            </div>
            
            <button
              type="submit"
              class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
             Sign Up
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <router-link
                to="/login"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Sign in</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const authStore=useAuthStore();





const form=ref({
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
})





</script>
