<template>
    <div class="animate-fade-down flex-col w-full p-2">
         <div class="flex-shrink max-w-full px-4 w-full">   
                                 <p class="text-4xl text-gray-900 font-poppin mt-3 mb-5">Create Product</p>
         </div>     
 <!-- start -->
 
    <div class="flex-shrink p-4 mb-4"> 
        <div class="flex flex-col justify-center bg-white dark:bg-gray-800 rounded-lg h-full">
            <div class="p-4 mb-4 bg-white rounded-lg">
                <form action="#">
                    <div class="grid grid-cols-6 gap-6 font-poppin">
                        <!-- Product Name  -->
                        <div class="col-span-3 md:col-span-3">
                            <label for="product_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white rounded-lg">Product Name</label>
                            <input class="w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_name" id="product_name"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
                        </div>
                        <!-- Product Price -->
                        <div class="col-span-3 md:col-span-3">
                            <label for="product_price" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Product Price</label>
                            <input class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_price" id="product_price"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
                        </div>

                    </div>  
                    <!-- ช่องว่าง -->  
                    <div class="col-span-12 sm:col-span-2 mt-6 font-poppin ">
                        <label for="product_description" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Description Product</label>
                        <textarea type="text"  
                        class="rounded-lg
                        peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg 
                        font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        name="description_product" id="description_product"/>
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        
                            </label>
                    </div> 
                    
                    <section v-for="(list,index) in totalList"
                    id="selected product" class="grid grid-cols-12 gap-6 font-poppin mt-6 items-center justify-center p-6 border-10 bg-black rounded-xl">
                        <div class="col-span-3">
                            <input class=" block w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file">
                        </div>
                        <div class="col-span-2 items-center justify-center">
                            <select id="size" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg text-center focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose  size</option>
                                <option value="XXS">XXS</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                                <option value="3XL">3XL</option>
                            </select>
                        </div>
                        <!-- Colors -->
                        <div class="col-span-2 items-center justify-center">
                            <select id="size" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg text-center focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">red</option>
                            </select>
                        </div>
                        <div class="col-span-2 items-center justify-center">
                            <input type="text" class="rounded-lg w-3/4" placeholder="amount">
                        </div>
                        <div class="col-span-3 items-center justify-center">
                            <img id="preview" class="w-[200px] h-[200px]" src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/454315/sub/thgoods_454315_sub1.jpg?width=750" alt="">
                        </div>
                        
                    </section>
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
                    

                        <!-- ช่องว่าง -->
                        <!-- <div class="col-span-6 mt-4">
                            <div class="col-span-6 sm:col-span-6"></div>
                        </div>
                        <div class="col-span-6 sm:col-span-2">
                            <button class="btn btn-outline btn-error w-full">Cancel</button>
                        </div>
                        
                            <div class="col-span-6 sm:col-span-2"></div>
                        
                        <div class="col-span-6 sm:col-span-2 flex justify-end">
                            <button class="btn btn-outline btn-accent w-full">Accent</button>
                        </div> -->
                    
                </form>
            </div>
        </div>
 
    </div>
 
 <!-- <RadioGroup v-model="colorlist" class="mt-4">
                                            <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                                            <div class="flex items-center space-x-3">
                                            <RadioGroupOption as="template" v-for="color in colorlist" :key="color.name" :value="color" v-slot="{ active, checked }">
                                                <div :class="[color.class, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                                <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                                                <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                                                </div>
                                            </RadioGroupOption>
                                            </div>
                                        </RadioGroup> -->
         
  <!-- end3 -->
     
     </div>
 </template>
 
<script setup lang="ts">
import {Listbox,ListboxLabel,ListboxButton,ListboxOptions,ListboxOption , RadioGroup , RadioGroupLabel ,RadioGroupOption}   from '@headlessui/vue'
 
 const selectedColor = ref(null)
 const sizelist = [
  { size: 'XXS' },
  { size: 'XS' },
  { size: 'S' },
  { size: 'M' },
  { size: 'L' },
  { size: 'XL' },
  { size: '2XL'},
  { size: '3XL'}
]
const colorlist = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
]
 const selected = ref(null)
 const canDecrease = ref(false)
 const totalList = ref([{
        size:"",
        color:"",
        amount:0,
        image:""
 }])
 function increaseProduct(){
    totalList.value.push({
        size:"",
        color:"",
        amount:0,
        image:""
    });

    canDecrease.value = true
     console.log("incersesize")
 }

 function decreaseProduct(){
    if (totalList.value.length > 1) {
        totalList.value.pop();
        if (totalList.value.length === 1) {
                canDecrease.value = false
            }
    }

     console.log("incersesize")
 }
</script>