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
                    <!-- product size & color -->
                    <section class="flex gap-5 mt-3 border-b border-t p-4" v-for="list in totalList">
                        <!-- Color -->
                        <div id="color" class="flex flex-col" >
                            <label for="hexColor">hexColor</label>
                            <input id="hexColor" type="text" class="rounded-lg w-full" placeholder="hexColor">
                        </div>
                        <!-- Preview Color -->
                        <div>
                            <span class="cursor-pointer w-6 h-6 rounded-full mx-1 my-1">

                            </span>
                        </div>
                        <!-- Size -->
                        <RadioGroup class="flex">
                            <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                            <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                <RadioGroupOption
                                    v-for="item in list.size"
                                    :key="item.size"
                                    :value="item"
                                    :disabled="!item.inStock">
                                    <div @click="changeStatus(item.size, list.size)" 
                                    :class="[item.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'bg-gray-50 text-gray-200', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                                        <RadioGroupLabel as="span">{{ item.size }}</RadioGroupLabel>
                                        <span v-if="item.inStock" aria-hidden="true"></span>
                                        <span v-else aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                            <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div v-if="item.inStock" class="flex flex-col gap-4 justify-center">
                                        Size {{ item.size }}
                                        <input v-model="item.amount" type="number" class="rounded-lg w-full">
                                    </div>
                                </RadioGroupOption>
                            </div>
                        </RadioGroup>
                        
                        <!-- <RadioGroup class="flex">
                            <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                            <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                <RadioGroupOption  @click="changeStatus(item.size , list.size)" as="template" v-for="item in list.size"  :value="item" :disabled="!item.inStock" v-slot="{ active, checked }" >
                                    <span :class="[item.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'bg-gray-50 text-gray-200', active ? '' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                                        <RadioGroupLabel as="span">{{ item.size }}</RadioGroupLabel>
                                        <span v-if="item.inStock" aria-hidden="true" />
                                        <span v-else aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                            <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                            <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                            </svg>
                                        </span>
                                    </span>
                                    <div class="w-1/12 " v-for="statusSize in list.size">
                                        <div v-if="statusSize.inStock" class="flex flex-col gap-4 justify-center">
                                            Size {{ statusSize.size }}
                                            <input type="text" class="rounded-lg w-full">
                                        </div>
                                    </div>
                                </RadioGroupOption>
                            </div>

                        </RadioGroup> -->
                        <!-- <div class="w-1/12 " v-for="statusSize in list.size">
                            <div v-if="statusSize.inStock" class="flex flex-col gap-4 justify-center">
                                Size {{ statusSize.size }}
                                <input type="text" class="rounded-lg w-full">
                            </div>
                        </div> -->
            
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
                    
                    <section id="imageSet">
                        <!-- Input Image -->
                        <div class="flex justify-center mt-8">
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
                                                <input multiple id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div> 
                                </div>
                            </div>
                        </div>
                        <!-- <button @click="check()">
                            Here
                        </button> -->
                        <!-- Preview Image -->
                        <!-- <div class="image-preview" v-for="(item, index) in imageList" :key="index">
                            <img :src="item.image" alt="Preview" />
                        </div> -->
                        
                        <div class="p-4">
                            <label for="file-input" class="mb-2 font-medium flex justify-between items-center">
                                <button id="select-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-fill transition-colors duration-300">
                                    Select
                                </button>
                            </label>
                            <input type="file" id="file-input" multiple class="hidden">
                            <div class="flex justify-between items-center mb-4">
                                <div id="drop-zone" class="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex
                                justify-center items-center text-gray-400 text-lg">
                                <span>Drag and drop files here</span>
                                </div>
                            </div>
                            <div id="selected-files-count" class="text-gray-500 text-sm font-medium">
                            <div id="selected-images" class="flex flex-wrap mx-2"></div>
                            </div>
                        </div>


                        
                    </section>
                        
                </form>
            </div>
        </div>
 
    </div>

    </div>
 </template>
 
<script setup lang="ts">
    import {Listbox,ListboxLabel,ListboxButton,ListboxOptions,ListboxOption , RadioGroup , RadioGroupLabel ,RadioGroupOption}   from '@headlessui/vue'    
    // const colorlist = [
    //     {
    //         name: "",
    //         hex: "",
    //     }
    // ]

    const canDecrease = ref(false)

    const totalList = ref([{
            hexColor:"",
            size: [
                { size: 'XXS' , inStock: false ,amount:0},
                { size: 'XS' , inStock: false,amount:0},
                { size: 'S'  , inStock: false,amount:0},
                { size: 'M' , inStock: false,amount:0},
                { size: 'L' , inStock: false,amount:0},
                { size: 'XL' , inStock: false,amount:0},
                { size: '2XL', inStock: false,amount:0},
                { size: '3XL', inStock: false,amount:0}
                ],
    }])


    function increaseProduct(){
        totalList.value.push({
            hexColor:"",
            size:[
                { size: 'XXS' , inStock: false , amount:0},
                { size: 'XS' , inStock: false ,amount:0},
                { size: 'S'  , inStock: false ,amount:0},
                { size: 'M' , inStock: false, amount:0},
                { size: 'L' , inStock: false, amount:0},
                { size: 'XL' , inStock: false ,amount:0},
                { size: '2XL', inStock: false ,amount:0},
                { size: '3XL', inStock: false ,amount:0}
                ],
        });

        canDecrease.value = true
        console.log("incersesize")
    }


    function changeStatus(size:string , sizelist:any){
        for (let index = 0; index < sizelist.length; index++) {
            if (sizelist[index].size === size) {
                sizelist[index].inStock = !sizelist[index].inStock
            }
            console.log(sizelist[index].inStock)
        }
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



    const imageList = ref([{
        image:""
    }])

    console.log(imageList.value)

    const checklistImage=ref(false)


    function check(){
        console.log(imageList.value)
    }


    // const fileInput = document.getElementById('file-input') as HTMLInputElement | null;
    // const dropzone = document.getElementById('drop-zone') as HTMLElement | null;
    // const selectedImages = document.getElementById('selected-images') as HTMLElement | null;
    // const selectButton = document.getElementById('select-button') as HTMLElement | null;
    // const selectedFilesCount = document.getElementById('selected-files-count') as HTMLElement | null;




    // fileInput.addEventListener("change", handleFiles);
    // dropzone.addEventListener("dragover", handleDragOver);
    // dropzone.addEventListener("dragleave", handleDragLeave);
    // dropzone.addEventListener("drop", handleDrop);
    

//     function handleFiles(this: HTMLInputElement) {
//   // Your logic for handling file input change event
//         const fileList = this.files;
//         displayImages(fileList);
//     }


    // function handleDragOver(event: DragEvent) {
    // // Your logic for handling drag over event
    // }

    // function handleDragLeave(event: DragEvent) {
    // // Your logic for handling drag leave event
    // }

    // function handleDrop(event: DragEvent) {
    // // Your logic for handling drop event
    // }


    

</script>