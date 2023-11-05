<template>
     <div class="animate-fade-down mx-full w-full p-2 ">
      <div class="flex-shrink max-w-full px-4 w-full">   
					    <p class="text-3xl font-poppin pt-3 pb-5">PRODUCT</p>
					  </div>
  <div class="flex flex-wrap flex-col">
       
            
    <div class="m-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
                <div class="flex flex-wrap flex-row mx-4">
                  <div class="flex-shrink max-w-full px-4 w-full">
                    
                    <div class="md:flex md:justify-between">
                      <div>
                        <a href="/product/create" class="h-14 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-emerald-500 group-hover:h-full"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                         <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Create Product</span>
                </a>
                      </div>

                      <div>
                        <div id="bulk-actions">
                          <label class="flex flex-wrap flex-row">
                            <select id="bulk_actions" name="bulk_actions" class="inline-block leading-5 relative py-2 ltr:pl-3 ltr:pr-8 rtl:pr-3 rtl:pl-8 mb-3 rounded bg-gray-100 border border-gray-200 overflow-x-auto focus:outline-none focus:border-gray-300 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none">
                              <option>Action</option>
                              <option value="activate">In stock</option>
                              <option value="out">Out Of stock</option>
                              <option value="delete">End product</option>
                            </select>        
                            <input type="submit" id="bulk_apply" class="ltr:ml-2 rtl:mr-2 py-2 px-4 inline-block text-center mb-3 rounded leading-5 border hover:bg-gray-300 dark:bg-gray-900 dark:bg-opacity-40 dark:border-gray-800 dark:hover:bg-gray-900 focus:outline-none focus:ring-0 cursor-pointer" value="Apply">
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="w-full mb-6 overflow-x-auto ">
                      <form action="">
                       
                          <div class="dataTable-top flex flex-row justify-between m-5 "><div class="dataTable-dropdown ">
                            
                          </div><div class="dataTable-search">
                            <input class="dataTable-input rounded bg-gray-100 border border-gray-200 overflow-x-auto" placeholder="Search..." type="text"></div>
                          </div>
                      
                        <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns rounded ">
                          <div class="dataTable-container rounded ">
                            <table class="table-sorter table-bordered w-full ltr:text-left rtl:text-right text-gray-600 dark:text-gray-400 dataTable-table">
                          <thead>
                            <tr class="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40 ">
                              
                                <th data-sortable="" >
                                  <a href="#" class="dataTable-sorter mx-5">Products</a>
                                </th>
                                <th class="hidden lg:table-cell" data-sortable="" >
                                  <a href="#" class="dataTable-sorter mx-5">Update</a>
                                </th>
                                  <th data-sortable="" >
                                    <a href="#" class="dataTable-sorter mx-5">Pricing</a>
                                  </th>
                                    <th class="hidden lg:table-cell" data-sortable="" >
                                      <a href="#" class="dataTable-sorter mx-5">Qty</a>
                                    </th>
                                    <th class="hidden lg:table-cell" data-sortable="" >
                                      <a href="#" class="dataTable-sorter mx-5">Color</a>
                                    </th>
                                      <th class="hidden lg:table-cell" data-sortable="">
                                        <a href="#" class="dataTable-sorter mx-5">Status</a></th>
                                        <th class="text-center" data-sortable="false">
                              <p class="text-center dataTable-sorter mx-10">Actions</p></th>
                                      </tr>
                          </thead>
                          <tbody>

                            <tr v-for="product in products">
                              <td>
                                
                                <a href="#">
                                  <div class="flex flex-wrap flex-row items-center">
                                    
                                    <div class="leading-5 dark:text-gray-300 flex-1 py-3 ltr:ml-2 rtl:mr-2 mb-1 text-center">  
                                      {{product.name}}
                                      <div class="pt-1 text-sm italic text-gray-500 w-full text-center text-xs">
                                        {{product.category}}
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </td><td class="hidden lg:table-cell text-center">
                                
                                {{ product.updateTime}}
                              </td>
                              <td class="text-center">
                                <span class=" mr-2">฿{{product.price}}</span>
                                
                              </td>
                              <td class="text-center hidden lg:table-cell">
                                1256
                              </td>
                              <td class="lg:table-cell flex justify-center w-30">
                                  <div v-for="color in product.listColor" :key="color.id" :value="color.id"  class="flex -m-0.5 cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                            
                                  <span aria-hidden="true" class=" h-5 w-5 rounded-full border border-black border-opacity-10" :style="{backgroundColor:color}"></span></div>
                                
                              </td>
                                
                              <td class="lg:table-cell flex justify-center items-center w-30 place-self-center">
                                  <span v-if="product.status == 'in' " class="flex w-32 justify-center   text-sm px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">In stock</span>
                                  <span v-else-if="product.status == 'out' " class=" flex w-32 justify-center   text-sm px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">out of Stock</span>
                                  <span v-else-if="product.status == 'end' " class=" flex w-32 justify-center  text-sm px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">End product</span>
                              </td>
                                <td class="text-center">
                                
                                  <a href="javascript:;" class="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500" title="Delete">
                                  
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">

                                    </path>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                  </svg>
                                </a>
                                <a href="javascript:;" class="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                  </svg>
                                </a>
                              </td>
                            </tr>
                            
                              </tbody>
                        </table></div>
                        

                        </div>
                        <div class="flex justify-center mt-5">
                          <!-- pagination start -->
                          <nav aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-8 text-sm">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>


                        <!-- pagination end -->
                        </div>
                        


                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </div>

</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin-layout",
});

const route = useRoute();
const colorChoose = ref();
const { data: products } = await baseFetch<any>("product/format", {})

console.log(products.value)
console.log(products.value.length)
</script>