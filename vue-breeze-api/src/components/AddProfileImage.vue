<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        Add Profile
      </a>
      <div
        class="w-full bg-gray-200 rounded-lg shadow-xl border border-gray-400 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Add Profile
          </h1>
          <form @submit.prevent="handleAddProfile" class="space-y-4 md:space-y-6" >
         

            <div>
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your projet photo</label
              >
              <input
                type="file"
                name="projectimage"
               @change="handleProfileImageUpload"
               
                
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
import { ref,onMounted } from 'vue';
import axios from 'axios';


const imagePath=ref('');



const form=ref({
    image:'',
})





function  handleProfileImageUpload(e){
       const file=e.target.files[0];
       imagePath.value=file;
       console.log(imagePath.value);

       var form=new FormData();
       form.append('image',file);

       axios.post("/api/getprfileimagepath",form).then((res)=>{
          imagePath.value=res.data; 
          form.image=imagePath.value;
          console.log("the image path is", form.image)
       });
      }



const handleAddProfile=async()=> {
      try {
     const  res= await axios.post("/api/addprofilephoto",{
      image:imagePath.value
     });
       console.log(res)
      } catch (error) {
        console.log(error)
      }
    }





</script>
