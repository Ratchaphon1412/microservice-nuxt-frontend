<template>
<nuxt-link :to="`/product/${id}`">
  <div class="relative flex flex-col mt-10 w-full">
    <div class="container">
      <div class="max-w-md w-full bg-[#DBE2EF] shadow-lg rounded-xl p-6 hover:shadow-xl">
        <div class="flex flex-col ">
          <div class="">
            <div class="h-62 w-full mb-3">
              <!-- image -->
              <img :src="image" alt="Just a flower" class=" w-full h-auto mx-auto rounded-2xl">
              
              <div class="flex mt-4">
                <!-- color -->
                <div class="flex-1 inline-flex items-center">
                  <div class="w-full flex-none text-sm flex items-center text-gray-600">
                    <ul class="flex flex-row justify-center items-center space-x-2">
                      <li class="" v-for="color in listColor">
                        <span :class="'block border-2 p-1 border-gray-900  rounded-full transition ease-in duration-300'">
                          <a href="" class="block w-3 h-3 p-2  rounded-full" :style="{ backgroundColor: color }"></a>
                        </span>
                      </li>
                      
                    </ul>
                  </div>
                </div>
            </div>
            <!-- Size -->
            <div class="lg:flex text-lg text-black  mt-2">
              <div class="flex-1 inline-flex ">
                <span class="text-secondary whitespace-nowrap mr-3">Size</span>
                <div class="cursor-pointer text-black " v-for="sizeItem in listSize">
                  <span class="text-lg hover:text-purple-500 p-1 py-0">{{sizeItem.size}}</span>
                  </div>
                </div>
              </div>
            </div> 
            <div class="flex-auto justify-evenly">
              <div class="flex flex-wrap ">
                <div class="w-full flex-none text-lg flex items-center text-gray-600">
                  <span class="mr-2 mb-2 text-black bg-[#FFFFFF] px-1 border-white rounded-full">{{gender}}</span>
                </div>
                <div class="flex items-center w-full justify-between min-w-0 ">
                  <h2 class="text-xl mr-auto cursor-pointer text-[#112D4E] hover:text-black ">{{name}}</h2>
                  <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg"> INSTOCK </div>
                </div>
                <div>
                    <p class="text-lg text-gray-500">
                      {{ description }}
                    </p>
                </div>
              </div>
              <div class="text-2xl text-black font-semibold mt-1"> ฿ {{price}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nuxt-link>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  name : String,
  description : String,
  gender : String,
  listSize : Array<string>,
  listColor : Array<string>,
  price : Number,
  image : String,
  id : Number
});


defineEmits({
  
})


</script>
