<template>
    <div class="animate-fade-down flex-col w-full p-2">
         <div class="flex-shrink max-w-full px-4 w-full">   
                <p class="text-4xl text-gray-900 font-poppin mt-3 mb-5">Create Product</p>
         </div>     
 <!-- start -->
 
    <div class="flex-shrink p-4 mb-4"> 
        <div class="flex flex-col justify-center bg-white dark:bg-gray-800 rounded-lg h-full">
            <div class="p-4 mb-4 bg-white rounded-lg">
                <form @submit.prevent="onSubmit()" enctype="multipart/form-data" action="#">
                    <div class="grid grid-cols-6 gap-6 font-poppin">
                        <!-- Product Name  -->
                        <div class="col-span-3 md:col-span-3">
                            <label for="product_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white rounded-lg">Product Name</label>
                            <input v-model="formData.name" class="w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_name" id="product_name"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
                        </div>
                        <!-- Product Price -->
                        <div class="col-span-3 md:col-span-3">
                            <label for="product_price" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Product Price</label>
                            <input v-model="formData.price" class="peer w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_price" id="product_price"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
                        </div>
                        <!-- Product category_type -->
                        <div class="col-span-3 md:col-span-3">
                            <div class="flex flex-col">
                                <label for="product_category_type" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Product category_type</label>
                                <select name="product_category_type" id="product_category_type" v-model="formData.category_type" class="w-full px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-myOrange-btn mt-2 text-black bg-gray-100">
                                    <option value="Tops">Tops</option>
                                    <option value="Outerwear">Outerwear</option>
                                    <option value="Bottoms">Bottoms</option>
                                </select>
                            </div>  
                        </div>
                        <div class="col-span-3 md:col-span-3">
                            <div class="flex flex-col">
                                <label for="product_gender" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Gender</label>
                                <select name="product_gender" id="role" v-model="formData.gender" class="w-full px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-myOrange-btn mt-2 text-black bg-gray-100">
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Unisex">Unisex</option>
                                </select>
                            </div>  
                        </div>
                        
                        <!-- <div class="col-span-3 md:col-span-3">
                            <label for="product_category_type" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Product category_type</label>
                            <input v-model="formData.category_type" class="peer w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_category_type" id="product_category_type"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
                        </div> -->
                        <!-- Product gender -->
                        <!-- <div class="col-span-3 md:col-span-3">
                            <label for="product_gender" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Product gender</label>
                            <input v-model="formData.gender" class="peer w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_gender" id="product_gender"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
                        </div> -->

                    </div>  
                    <!-- description -->
                    <div class="col-span-12 sm:col-span-2 mt-6 font-poppin ">
                        <label for="product_description" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Description Product</label>
                        <textarea v-model="formData.description" type="text"  
                        class="rounded-lg
                        peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg 
                        font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        name="description_product" id="description_product"/>
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        
                            </label>
                    </div> 

                    <!-- Material -->
                    <div class="col-span-12 sm:col-span-2 mt-6 font-poppin ">
                        <label for="product_description" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Description Product</label>
                        <textarea v-model="formData.material" type="text"  
                        class="rounded-lg
                        peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg 
                        font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        name="description_product" id="description_product"/>
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        
                            </label>
                    </div> 
                    <div class="mt-3">
                    <!-- product size & color -->
                        <section class="gap-5 grid grid-cols-4 lg:grid-cols-5  border-b border-t p-4 w-full" v-for="list in totalList">
                            <div class="grid col-span-4 grid-cols-4 gap-4 lg:col-span-1">
                                <!-- Color -->
                            <div id="color" class="flex flex-col col-span-2 lg:col-span-4" >
                                <label for="hex_color"></label>
                                <div class="bg-white rounded-lg w-full col-span-3">
                                    <div class="flex">
                                        <label for="hex_color" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white rounded-lg">hexColor</label>
                                        <div v-if="list.hex_color" :style="{ backgroundColor: list.hex_color }" class="w-6 h-6 rounded-full mx-3 my-1"></div>
                                    </div>

                                    <input v-model="list.hex_color" class="w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        name="hex_color" id="hex_color"/>

                                    <div class="flex">
                                        <label for="name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white rounded-lg">Name</label>
                                    </div>
                                    <input v-model="list.name" class="w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        name="name" id="name"/>
                                </div>
                            
                            </div>
                            
                            
                            </div>
                            
                            
                            <!-- Size -->
                            
                            <RadioGroup class="flex col-span-4 ">
                                <label for="size" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white rounded-lg" >Choose a size</label>
                                
                                <div class="grid  gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
                                    
                                    <RadioGroupOption
                                        v-for="item in list.stock"
                                        :key="item.size"
                                        :value="item"
                                        :disabled="!item.inStock">
                                        <button @click="changeStatus($event,item.size, list.stock)" 
                                        :class="[item.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm w-full' : 'bg-gray-50 text-gray-400 w-full', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                                            <RadioGroupLabel as="span">{{ item.size }}</RadioGroupLabel>
                                            <span v-if="item.inStock" aria-hidden="true"></span>
                                            <span v-else aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                                <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                    <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div v-if="item.inStock" class="flex flex-col py-3 justify-center">
                                            <div class="grid grid-cols-2 lg:grid-cols-4 animate-fade-down animate-ease-in animate-duration-500">
                                                <div class="bg-white rounded-lg w-full lg:col-span-3 ">
                                                    <div class="relative bg-inherit ">
                                                    <input v-model="item.quantity" type="text" id="size" name="size" class="peer bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 w-full" placeholder="Type inside me"/>
                                                    <label for="size" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Size {{ item.size }}</label>
                                                </div>
                                                
                                            </div>
                                            <label class=" place-self-center ">ชิ้น</label>
                                            
                                            </div>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </section>
                    </div>
                   
                    
                    
                    
                    <div class="flex mt-4">
                        <div >
                            <span @click="increaseProduct"
                                class="border-2 px-2 py-1.5 mt-2 rounded border-myOrange-btn text-myOrange-btn hover:border-myOrange-btnHover hover:text-myOrange-btnHover ease-out duration-300 cursor-pointer">
                                <i class="bi bi-plus-circle mr-2"></i>
                                เพิ่มรายการ
                            </span>

                            <span 
                            v-if="canDecrease" @click="decreaseProduct"
                            class="border-2 px-2 py-1.5 ml-2 mt-2 rounded border-myOrange-btn text-myOrange-btn hover:border-myOrange-btnHover hover:text-myOrange-btnHover ease-out duration-300 cursor-pointer">
                            <i class="bi bi-dash-circle mr-2"></i>
                            ลบรายการ
                            </span>
                        </div>
                    </div>
                    
                    <section id="imageSet">
                        <div v-if="imageList.length == 0" class="flex justify-center mt-8">
                            <div class="rounded-lg shadow-xl bg-gray-50 md:w-full ">
                                <div class="m-4">
                                    <label class="inline-block mb-2 text-gray-500">Upload Image</label>
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input multiple  @change="handleFileChange($event)" id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div> 
                                </div>    
                            </div>
                        </div>
                        <div v-else class="flex justify-center mt-8">
                            <div class="rounded-lg shadow-xl bg-gray-50 md:w-full  ">
                                <div class="m-4">
                                    <div class="flex flex-col justify-col"> <label class="inline-block mb-2 text-gray-500">Upload Image</label> </div>
                                    
                                        <div class="flex items-center justify-center w-full">
                                            
                                            <div  class="grid grid-cols-2 md:grid-cols-4 gap-4 ">

                                                <div class="image-preview h-64 max-w-full overflow-hidden" v-for="(item, index) in imageList" :key="index">
                                                    <div v-if="(index != null)" class="flex items-center justify-between space-x-4">
                                                        <div class="animate-jump-in">
                                                            <button @click="removeImage($event, index)" class="absolute mt-2 px-4 py-2 transition duration-150 ease-in-out">
                                                                <svg fill="#b30000" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve" stroke="#b30000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
                                                            </button>
                                                            <img :src="item" class="object-scale-down object-center max-w-full rounded-lg">
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                    
                                    
                                        <div class="flex items-center justify-center w-full h-64 ">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 11L12 15M12 15L16 11M12 15V3M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.87958 19.412 6.13007 17 4.51555" stroke="#004d13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                Add more here!
                                                <input multiple  @change="handleFileChange($event)" id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div> 
                                

                                            </div>
                                        
                                        </div> 
                                </div>
                                
                            </div>
                        </div>

                        <div class="grid grid-cols-6 gap-6 font-poppin">
                            <div class="col-span-6 mt-4">
                                <div class="col-span-6 sm:col-span-6">
                                    <div></div>
                                </div>
                            </div>
                            <div class="col-span-6 mt-4">
                                <div class="col-span-6 sm:col-span-6">
                                    <div></div>
                                </div>
                            </div>
                            <div class="col-span-6 mt-4">
                                <div class="col-span-6 sm:col-span-6">
                                    <div></div>
                                </div>
                            </div>
                        <div class="col-span-6 sm:col-span-2">
                                <button className="btn btn-outline btn-error w-full">Back</button>
                            </div>

                            <div class="col-span-6 sm:col-span-2"></div>

                            <div class="col-span-6 sm:col-span-2 flex justify-end">
                                <button class="btn btn-outline btn-accent w-full">Accept</button>
                            </div>
                        </div>
                        <div v-for="error in messageError">
                            <p>{{ error }}</p>
                        </div>      
                    </section>
                        
                </form>
            </div>
        </div>
 
    </div>

    </div>
 </template>


<script setup lang="ts">
    definePageMeta({
  layout: "admin-layout",
});
import { ref } from 'vue';
import {Listbox,ListboxLabel,ListboxButton,ListboxOptions,ListboxOption , RadioGroup , RadioGroupLabel ,RadioGroupOption}   from '@headlessui/vue'    

const canDecrease = ref(false)
const totalList = ref([{
    name: "",
    hex_color:"",
    stock: [
        { size: 'XXS', inStock: false, quantity:0},
        { size: 'XS', inStock: false, quantity:0},
        { size: 'S', inStock: false, quantity:0},
        { size: 'M', inStock: false, quantity:0},
        { size: 'L', inStock: false, quantity:0},
        { size: 'XL', inStock: false, quantity:0},
        { size: '2XL', inStock: false, quantity:0},
        { size: '3XL', inStock: false, quantity:0}
    ],
}])

const formData = reactive({
    name: "",
    description: "",
    price: 0,
    category_type: "",
    material: "",
    gender: "",
    color_list: [{}],
    image_list: [{}]
})
function increaseProduct(){
    totalList.value.push({
        name: "",
        hex_color:"",
        stock:[
            { size: 'XXS' , inStock: false , quantity:0},
            { size: 'XS' , inStock: false ,quantity:0},
            { size: 'S'  , inStock: false ,quantity:0},
            { size: 'M' , inStock: false, quantity:0},
            { size: 'L' , inStock: false, quantity:0},
            { size: 'XL' , inStock: false ,quantity:0},
            { size: '2XL', inStock: false ,quantity:0},
            { size: '3XL', inStock: false ,quantity:0}
            ],
    });

    canDecrease.value = true
    console.log(totalList)
    console.log("incersesize")
}


function changeStatus(event: Event,size:string , sizelist:any){
    event.preventDefault();
    for (let index = 0; index < sizelist.length; index++) {
        if (sizelist[index].size === size) {
            sizelist[index].inStock = !sizelist[index].inStock
        }
        console.log(sizelist[index].inStock)
    }
}

function decreaseProduct() {
    if (totalList.value.length > 1) {
        totalList.value.pop();
        if (totalList.value.length === 1) {
            canDecrease.value = false
        }
    }
    console.log("decreaseSize")
}



const imageList = ref<any>([])
const all_image = ref<File[]>([]);
const handleFileChange = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
            imageList.value.push(reader.result);
        };
        reader.readAsDataURL(files[i]);
    }
    all_image.value.push(event.target.files[0])
};

function removeImage(event:Event ,index: number) {
    // Remove the image at the specified index from the imageList array
    event.preventDefault();
    imageList.value.splice(index, 1);
}

const messageError = ref([])
async function onSubmit() {
    const productFormData = new FormData()
    productFormData.append("name", formData.name)
    productFormData.append("description", formData.description)
    productFormData.append("price", Number(formData.price))
    productFormData.append("category_type", formData.category_type)
    productFormData.append("gender", formData.gender)
    productFormData.append("material", formData.material)

    for (let i = 0; i < totalList.value.length; i++) {
        productFormData.append('color_list[' + i + '][name]', totalList.value[i].name)
        productFormData.append('color_list[' + i + '][hex_color]', totalList.value[i].hex_color)
        console.log(totalList.value[i])
        for (let j = 0; j < 8; j++) {
            productFormData.append('color_list[' + i + '][stock][' + j + '][size]', totalList.value[i].stock[j].size);
            productFormData.append('color_list[' + i + '][stock][' + j + '][quantity]', Number(totalList.value[i].stock[j].quantity));
        }
    }
    for (let i = 0; i < all_image.value.length; i++) {
        productFormData.append('image_list[]', all_image.value[i]);
    }

    const { data: product, error } = await baseFetch("product", {
        method: "POST",
        body: productFormData
    })

    if (product.value !== null) {
        console.log(product.value)
    } else {
        messageError.value.push(error.value)
        console.log(error.value)
    }
}
 

</script>



