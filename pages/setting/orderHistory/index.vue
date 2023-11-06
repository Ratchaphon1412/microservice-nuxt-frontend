<template>
  <div class="animate-fade-down mx-full w-full p-2 ">
   <div class="flex-shrink max-w-full px-4 w-full">   
           <p class="text-3xl font-poppin pt-3 pb-5">PRODUCT</p>
         </div>
<div class="flex flex-wrap flex-col">
    
 <div class="m-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
             <div class="flex flex-wrap flex-row mx-4">
               <div class="flex-shrink max-w-full px-4 w-full">
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
                               <a href="#" class="dataTable-sorter mx-5">transcript id</a>
                             </th>
                              <th data-sortable="" >
                                <a href="#" class="dataTable-sorter mx-5">Pricing</a>
                              </th>
                              <th class="hidden lg:table-cell" data-sortable="">
                                <a href="#" class="dataTable-sorter mx-5">Bill</a>
                              </th>
                        </tr>
                       </thead>
                       <tbody>
                         <tr v-for="product in products.payment">
                           <td>
                             <div class="flex flex-wrap flex-row items-center">
                                <div class="leading-5 dark:text-gray-300 flex-1 py-3 ltr:ml-2 rtl:mr-2 mb-1 text-center">  
                                  {{product.id}}
                                 </div>
                               </div> 
                           </td>
                           <td class="text-center">
                             <span class=" mr-2">{{product.amount}} ฿</span>
                           </td>
                          <td class="text-center">
                            <a :href="product.pdf" target="_blank" class="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500">
                              <i class="bi bi-receipt-cutoff"></i>
                            </a>
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

  import { apiPayment } from '~/store/payment.store';
  import { authStore } from '~/store/auth.store';
  import Swal from 'sweetalert2'
  const auth = authStore();
  // const products = ref([])
  let { invoiceList } = apiPayment();

  const products = await invoiceList(auth.user.user.id)
  console.log(products.payment)

         

  </script>