<template>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Add Skill
        </a>
        <div
          class="w-full bg-gray-200 rounded-lg shadow-xl border border-gray-400 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Add Skill
            </h1>
            <form @submit.prevent="handleAddSkill" class="space-y-4 md:space-y-6" >
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your skill name</label
                >
                <input
                  type="text"
                  name="name"
                  v-model="form.name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Endaweke Enkuahobe"
                  
                />
               
              </div>
  
  
              <div>
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your skill image</label
                >
                <input
                  type="file"
                  name="skillimage"
                 @change="handleSkillImageUpload"
                 
                  
                />
               
              </div>
            
              
              <button
                type="submit"
                class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
               Save
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';


  const imagePath=ref('');
  
  

  
  
  
  
  
  const form=ref({
      name:'',
      image:'',
  })
  


  function  handleSkillImageUpload(e){
         const file=e.target.files[0];
         imagePath.value=file;
         console.log(imagePath.value);

         var form=new FormData();
         form.append('image',file);

         axios.post("/api/getskillimagepath",form).then((res)=>{
            imagePath.value=res.data; 
            form.image=imagePath.value;
            console.log("the image path is", form.image)
         });
        }


  
  const handleAddSkill=async()=> {
        try {
       const  res= await axios.post("/api/addskill",{
        name:form.value.name,
        image:imagePath.value
       });
         console.log(res)
        } catch (error) {
          console.log(error)
        }
      }
  
  
  
  
  </script>
  