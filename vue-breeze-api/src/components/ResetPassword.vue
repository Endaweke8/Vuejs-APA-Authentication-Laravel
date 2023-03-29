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
              Reset Password
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              @submit.prevent="authStore.handleResetPassword(form)"
            >
            <div v-if="authStore.status" class="m-2 p-2 bg-green-300">
              <span class="text-green-900 p-2 m-2">{{ authStore.status }}</span>
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
                  <span class="text-red-500 p-2 m-2">{{
                    authStore.errors.password[0]
                  }}</span>
                </div>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password Confirmaiton</label
                >
                <input
                  type="password"
                  name="password"
                  v-model="form.password_confirmation"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div v-if="authStore.authErrors.password_confirmation">
                  <span class="text-red-500 p-2 m-2">{{
                    authStore.errors.password_confirmation[0]
                  }}</span>
                </div>
              </div>
          
  
              <button
                type="submit"
                class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset
              </button>
          
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useAuthStore } from "../stores/auth";
  import { useRoute } from "vue-router";

  const route=useRoute();
  const authStore = useAuthStore();
  
  const form = ref({
    password: "",
    password_confirmation: "",
    email:route.query.email,
    token:route.params.token,
  });
  </script>
  