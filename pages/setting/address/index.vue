<template>
        <div class="animate-fade-down flex-col w-full p-2">
            <!-- title1 -->
            <div class="flex justify-between  max-w-full px-4 w-full">   
                <p class="text-4xl font-poppin text-gray-900 mt-3 mb-5">My Payment</p>
                <div class="mx-10 my-3">
                <a href="address/createAddress" class="h-14 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-emerald-500 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add More Address {{ Addr_count}}/10</span>
                </a>
            </div>
         </div>   
 <!-- start -->

     <div class="flex-shrink p-4 border-4 border-black w-full shadow-lg "> 
         <div class="flex flex-col justify-center bg-white dark:bg-gray-800 rounded-lg h-full">
             <div class="p-4 bg-white rounded-lg">
             <form action="#">
                 <div class="grid grid-cols-6 gap-6 font-poppin">
                     <div class="col-span-6 sm:col-span-1">
                        <p>ful name</p>
                     </div>

                     <div class="col-span-6 sm:col-span-3">
                        <p>AmongusAmongusAmongusAmongusAmongus AmongusAmongusAmongusAmongus</p>
                     </div>
                     
                    <div class="col-span-6 sm:col-span-2 flex flex-col">
                       
                        <div class="relative inline-block px-4 py-2 font-medium group m-5">

<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span class="relative text-black group-hover:text-white">
    <div class="flex ">

    <svg class="w-5 h-5" fill="#00c760" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 335.765 335.765" xml:space="preserve" stroke="#00c760"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 "></polygon> </g> </g> </g></svg>

    Current Address
</div></span>

</div>
                        <a href="address/editAddress" class="relative inline-block px-4 py-2 font-medium group m-5">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span class="relative text-black group-hover:text-white">Edit Profile</span>
</a>
                    </div>
                     
                     
                     
                 </div>
             </form>
         </div>
         </div>
         
 
     </div>
<!-- end -->

<!-- title2 -->
    <div class="flex-shrink max-w-full px-4 w-full">   
            <p class="text-3xl font-poppin mt-3 mb-5">SHIPPING ADDRESS</p>
    </div>
<!-- start -->
    <div class="flex-shrink p-4  border-4 border-black w-full shadow-lg"> 
         <div class="flex flex-col justify-center bg-white dark:bg-gray-800 h-full ">
             <div class="p-4 bg-white rounded-lg">
             <form action="#">
                 <div class="grid grid-cols-6 gap-6 font-poppin">
                    <!-- item1 -->
                    <div v-for= " index in Addr_count" class="grid grid-cols-6 col-span-6 gap-6">
                    <div class="col-span-6 sm:col-span-1">
                        <p>ful name</p>
                     </div>

                     <div class="col-span-6 sm:col-span-3">
                        <p>AmongusAmongusAmongusAmongusAmongus AmongusAmongusAmongusAmongus</p>
                     </div>
                     
                    <div class="col-span-6 sm:col-span-2 grid grid-rows-3 flex flex-col">
                       
                        <a href="#_" class="relative inline-block px-4 py-2 font-medium group m-5">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-gray-500"></span>
                            <span class="relative text-black group-hover:text-white">Set as Default</span>
                        </a>
                        <a href="#_" class="relative inline-block px-4 py-2 font-medium group m-5">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span class="relative text-black group-hover:text-white">Edit Profile</span>
                        </a>
                        <a href="#_" class="relative inline-block px-4 py-2 font-medium group m-5">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-500"></span>
                            <span class="relative text-black group-hover:text-white">Delete Address</span>
                        </a>
                    </div>
                     <div class="col-span-6 sm:col-span-1"></div>
                     <div class="col-span-6 sm:col-span-6 border-b-4"></div>
                    </div>
                    


                     


                </div>

                     
             </form>
         </div>
         </div>
         
 
     </div>
<!-- end -->
 
 
         
  <!-- end3 -->
     
     </div>
    
 </template>
 
 <script setup lang="ts">
 definePageMeta({
   layout: "setting-account-layout",
 });

 const Addr_count = 7; //ไม่เกิน 3นะจ๊ะ
 const formData = reactive({
    name: "saran wongkum",
    card_number: "171 411 5981",
    valid: "11/50",
    expiry: "00/00",
    CVV: "696",
})
 
 </script>