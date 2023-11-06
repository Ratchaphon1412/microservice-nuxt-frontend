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
                             {{ product.qtySum }}
                           </td>
                           <td class="lg:table-cell flex justify-center w-30">
                               <div v-for="color in product.listColor" :key="color.id" :value="color.id"  class="flex -m-0.5 cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                         
                               <span aria-hidden="true" class=" h-5 w-5 rounded-full border border-black border-opacity-10" :style="{backgroundColor:color}"></span></div>
                           </td>
                             
                           <td class="lg:table-cell flex justify-center items-center w-30 place-self-center">
                               <span v-if="product.qtySum > 0" class="flex w-32 justify-center   text-sm px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">In stock</span>
                               <span v-else-if="product.qtySum == 0 " class=" flex w-32 justify-center   text-sm px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">out of Stock</span>
                           </td>
                             <td class="text-center">
                             <nuxt-link :to="`/product/edit_${product.id}`" href="javascript:;" class="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500" title="Edit">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                 <a href="">
                                   <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                 </a>
                               </svg>
                             </nuxt-link>
                           </td>
                         </tr>
                         
                           </tbody>
                     </table></div>
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
    layout: "setting-account-layout",
  });
  const { data: coupons } = await baseFetch<any>("coupon", {})
  const messageError = ref([{}])
  async function deleteCoupon(id:any) {
    const { data: coupon_delete } = await baseFetch<any>(`coupon/${id}`, {
      method: "DELETE",
    })
    if (coupon_delete.value !== null) {
          navigateTo("/dashborad/coupon")
      } else {
          messageError.value.push(couponError.value?.data)
      }
  }
  </script>