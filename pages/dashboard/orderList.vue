<template>
  <div class=" animate-fade-down mx-full w-full p-2">
    <div class="flex-shrink max-w-full px-4 w-[500px]">
      <p class="text-3xl font-poppin mt-3 mb-5">Order list</p>
    </div>
    <div class="flex flex-wrap flex-col">
          <div class="w-full mb-6 overflow-x-auto">

                <div class="dataTable-container">
                <table class="table-sorter table-bordered w-full ltr:text-left rtl:text-right text-gray-600 dark:text-gray-400 dataTable-table">
            
                <thead>
                  <tr class="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                      <th class="text-center" data-sortable="" >
                        <a href="#" class="text-center dataTable-sorter mx-10">Amount</a>
                      </th>
                      <th class="text-center hidden lg:table-cell" data-sortable="" >
                        <a href="#" class="text-center dataTable-sorter mx-10">Receipt</a>
                      </th>
                      <th class="text-center hidden lg:table-cell" data-sortable="" >
                        <a href="#" class="text-center dataTable-sorter mx-10">Status</a>
                      </th>
                      <th class="text-center hidden lg:table-cell" data-sortable="" >
                        <a href="#" class="text-center dataTable-sorter mx-10">Code</a>
                      </th>
                      <th class="text-center hidden lg:table-cell" data-sortable="" >
                          <a href="#" class="text-center dataTable-sorter mx-10">Update</a>
                      </th>
                  </tr>
                </thead>
                <!-- item in table -->
                <tbody>
                  <tr v-for="payment of payments" class="border-b">
                    <td class="text-center hidden lg:table-cell">
                      {{ payment.amount }}
                    </td>
                    <td class="text-center hidden lg:table-cell">
                      <a :href="payment.pdf" target="_blank">
                        Link
                      </a>
                    </td>
                    <td class="text-center hidden lg:table-cell">
                      <p>{{ payment.status }}</p>
                    </td>
                    <td class="text-center hidden lg:table-cell">
                      <p>{{ payment.code }}</p>
                    </td>
                    <td class="flex justify-center items-center w-30 hidden lg:table-cell place-self-center">
                      <nuxt-link :to="`/dashboard/${payment.id}`" class="flex  justify-center items-center place-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                        </svg>
                      </nuxt-link>
                    </td>
                  </tr>
                  <!-- end item in table -->
                </tbody>
              </table>

            </div>
          </div>
      </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin-layout",
});

const { data:info } = await useFetch("http://microservice.payment.ratchaphon1412.co/api/v1/payment/invoice/", {
  headers:{
    "Accept": "application/json",
  }
});

let payments = info.value.payments;
console.log(payments)

</script>