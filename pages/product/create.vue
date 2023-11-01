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
                            <input class="w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_name" id="product_name"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
                        </div>
                        <!-- Product Price -->
                        <div class="col-span-3 md:col-span-3">
                            <label for="product_price" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Product Price</label>
                            <input class="peer w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
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
                    <div class="mt-3">
                    <!-- product size & color -->
                    <section class="flex gap-5 grid grid-cols-4 lg:grid-cols-5  border-b border-t p-4 w-full" v-for="list in totalList">
                        <div class="grid col-span-4 grid-cols-4 gap-4 lg:col-span-1">
                            <!-- Color -->
                        <div id="color" class="flex flex-col col-span-2 lg:col-span-4" >
                            <label for="hexColor"></label>
                            <div class="bg-white rounded-lg w-full col-span-3">
                            
                                <label for="hexColor" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white rounded-lg">hexColor</label>
                                <input class="w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    name="hexColor" id="hexColor"/>
                            </div>
                        </div>
                        <!-- Preview Color -->
                        <div class="col-span-2 lg:col-span-4">
                            <span class="cursor-pointer w-6 h-6 rounded-full mx-1 my-1">

                            </span>
                        </div>
                        
                        </div>
                        
                        
                        <!-- Size -->
                        
                        <RadioGroup class="flex col-span-4 grid">
                            <label for="size">Choose a size</label>
                            <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                            <div class="grid  gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
                                
                                <RadioGroupOption
                                    v-for="item in list.size"
                                    :key="item.size"
                                    :value="item"
                                    :disabled="!item.inStock">
                                    <button @click="changeStatus($event,item.size, list.size)" 
                                    :class="[item.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm w-full' : 'bg-gray-50 text-gray-200 w-full', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
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
                                                <input v-model="item.amount" type="text" id="size" name="size" class="peer bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 w-full" placeholder="Type inside me"/>
                                                <label for="size" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Size {{ item.size }}</label>
                                            </div>
                                            
                                        </div>
                                        <label class=" place-self-center ">ชิ้น</label>
                                        
                                        </div>
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
                            <div class="rounded-lg shadow-xl bg-gray-50 md:w-full ">
                                <div class="m-4">
                                    <div class="flex flex-col justify-col"> <label class="inline-block mb-2 text-gray-500">Upload Image</label> </div>
                                    
                                        <div class="flex items-center justify-center w-full">
                                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border">

<div class="image-preview" v-for="(item, index) in imageList" :key="index">
    <div v-if="(index !=null)">
        <img :src="item.image" class="object-scale-down object-center h-96 w-96 object-center max-w-full rounded-lg ">
        <!-- Add the Remove button here -->
<button @click="removeImage($event,index)" class="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
Remove
</button>
    </div>
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


    function changeStatus(event: Event,size:string , sizelist:any){
        event.preventDefault();
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



    const imageList = ref([]);


    const handleFileChange = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
            imageList.value.push({ image: reader.result });
        };
        reader.readAsDataURL(files[i]);
        console.log(imageList.value)
    }
};
function removeImage(event:Event ,index: number) {
    // Remove the image at the specified index from the imageList array
    event.preventDefault();
    imageList.value.splice(index, 1);
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



