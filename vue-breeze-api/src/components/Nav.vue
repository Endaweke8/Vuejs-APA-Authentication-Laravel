<template>  
<nav class="bg-black fixed  flex w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <router-link to="/" class="flex items-center">

      <span class="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">Software Developer</span>
    
    </router-link>
    <button @click="showMobileMenu=!showMobileMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center bg-white p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div :class="showMobileMenu ?'block':'hidden'" class=" bg-black w-full md:block md:w-auto" id="navbar-default">
      <ul class="bg-black w-full flex flex-col p-4 mt-4 border border-gray-100 rounded-lg   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black md:text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li   v-for="(navigation,index) in navigations" :key="index">
          <a @click="getActiveColor(index)" :href="navigation.href" :class="index== activeColor ?'text-blue-500':' '" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">{{navigation.name}}</a>
        </li>
      
        <template v-if="!authStore.user">
          <li>
          <router-link :to="{name:'Login'}" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Login</router-link>
        </li>
        <li>
          <router-link :to="{name:'Register'}" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Register</router-link>
        </li>
        </template>
        
        <template v-else>
         <li>
          <button @click="authStore.handleLogout()" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white">Logout</button>
         </li>
        </template>
        <li v-if="authStore.user">

          <p  class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Welcome {{ authStore.user.name }}</p>
        
        </li>
       
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import {useRoute} from 'vue-router'

const route=useRoute();
const authStore=useAuthStore();
const activeColor=ref(0);


const showMobileMenu=ref(false)

const navigations=[
    {name:"Home", href:"#home",id:0},
    {name:"About", href:"#about",id:1},
    {name:"Skills", href:"#skills",id:2},
    {name:"Projects", href:"#projects",id:3},
    {name:"Services", href:"#services",id:4},
    {name:"Contact", href:"#contact",id:5},
  ]

  const getActiveColor=(id)=>{
     activeColor.value=id
     showMobileMenu.value=false
  }


</script>
