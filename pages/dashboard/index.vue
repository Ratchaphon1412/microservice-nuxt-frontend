<script setup lang="ts">
definePageMeta({
  layout: "admin-layout"
});

const { data: info, error } = await useFetch<any>("http://microservice.payment.ratchaphon1412.co/api/v1/admin/payment/",{
      headers:{
          "Accept": "application/json",
      }
   });

const {data: receipt } = await useFetch<any>("http://microservice.payment.ratchaphon1412.co/api/v1/admin/payment/receipt/",{
  headers:{
          "Accept": "application/json",
      }
});


let payments = info.value.payments;
console.log(payments)

console.log(info.value.balance);
console.log(receipt.value)
let balance = info.value.balance / 100

</script>

<template>
  <div class="animate-fade-down flex-col w-full p-2">
    <div class="flex-shrink max-w-full px-4 w-full">
      <p class="text-3xl font-poppin mt-3 mb-5">Dashborad</p>
    </div>
    <!-- start = stat -->
    <div class="flex flex-row">
      <div class="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
          <div
            x-data="{ tooltips: false }"
            class="pt-6 px-6 relative text-sm font-semibold"
          >
            Total Sales
            <div
              x-on:mouseover="tooltips = true"
              x-on:mouseleave="tooltips = false"
              class="ltr:float-right rtl:float-left text-green-500"
            >
              +15%
              <div
                class="absolute top-auto bottom-full mb-3"
                x-show.transition.origin.top="tooltips"
                style="display: none"
              >
                <div
                  class="z-40 w-32 p-2 -mb-1 text-sm leading-tight text-white bg-black rounded-lg shadow-lg text-center"
                >
                  Since last month
                </div>
                <div
                  class="absolute transform -rotate-45 p-1 w-1 bg-black bottom-0 -mb-2 ltr:ml-6 rtl:mr-6"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between px-4 py-4">
            <div
              class="self-center w-14 h-14 rounded-full text-yellow-500 bg-yellow-100 relative text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-credit-card"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                ></path>
                <path
                  d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                ></path>
              </svg>
            </div>
            <h2 class="self-center text-3xl">{{ balance }}<span> bath</span></h2>
          </div>
          <div class="px-6 pb-6">
            <a class="hover:text-indigo-500 text-sm" href="#">View more...</a>
          </div>
        </div>
      </div>
      
      
    </div>

    <!-- end  -->

    <!-- start3 -->
      
    <!-- end3 -->
  </div>
</template>
