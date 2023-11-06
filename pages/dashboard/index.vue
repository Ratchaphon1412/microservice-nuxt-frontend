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

console.log(info.value.balance);
console.log(receipt.value)
let balance = info.value.balance / 100

</script>

<template>
  <div class="animate-fade-down flex-col w-full p-2">
    <div class="flex-shrink max-w-full px-4 w-full">
      <p class="text-3xl font-poppin mt-3 mb-5">Dash Borad</p>
    </div>
    <!-- start = stat -->
    <div class="flex flex-row">
      <div class="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
          <div
            x-data="{ tooltips: false }"
            class="pt-6 px-6 relative text-sm font-semibold"
          >
            Total Orders
            <div
              x-on:mouseover="tooltips = true"
              x-on:mouseleave="tooltips = false"
              class="ltr:float-right rtl:float-left text-green-500"
            >
              +12%
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
          <div class="flex flex-row justify-between px-6 py-4">
            <div
              class="self-center w-14 h-14 rounded-full text-pink-500 bg-pink-100 dark:bg-pink-900 dark:bg-opacity-40 relative text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </div>
            <h2 class="self-center text-3xl">421</h2>
          </div>
          <div class="px-6 pb-6">
            <a class="hover:text-indigo-500 text-sm" href="#">View more...</a>
          </div>
        </div>
      </div>
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
      <div class="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
          <div
            x-data="{ tooltips: false }"
            class="pt-6 px-6 relative text-sm font-semibold"
          >
            New Customers
            <div
              x-on:mouseover="tooltips = true"
              x-on:mouseleave="tooltips = false"
              class="ltr:float-right rtl:float-left text-pink-500"
            >
              -5%
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
          <div class="flex flex-row justify-between px-6 py-4">
            <div
              class="self-center w-14 h-14 rounded-full text-green-500 bg-green-100 dark:bg-green-900 dark:bg-opacity-40 relative text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                ></path>
              </svg>
            </div>
            <h2 class="self-center text-3xl">1.2K</h2>
          </div>
          <div class="px-6 pb-6">
            <a class="hover:text-indigo-500 text-sm" href="#">View more...</a>
          </div>
        </div>
      </div>
      <div class="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
          <div
            x-data="{ tooltips: false }"
            class="pt-6 px-6 relative text-sm font-semibold"
          >
            Users Online
            <span
              class="ltr:float-right rtl:float-left w-2 h-2 rounded-full bg-green-500 mt-1 animate-pulse"
            ></span>
          </div>
          <div class="flex flex-row justify-between px-6 py-4">
            <div
              class="self-center w-14 h-14 rounded-full text-indigo-500 bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-40 relative text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-people"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                ></path>
              </svg>
            </div>
            <h2 class="self-center text-3xl">602</h2>
          </div>
          <div class="px-6 pb-6">
            <a class="hover:text-indigo-500 text-sm" href="#">View more...</a>
          </div>
        </div>
      </div>
    </div>

    <!-- end  -->

    <!-- start2 -->
    <div class="flex flex-wrap flex-row mx-auto p-2">
      <div class="flex-shrink max-w-full px-4 w-full lg:w-1/3 mb-6">
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
          <div class="mb-2">
            <table class="table-sm text-sm ltr:text-left rtl:text-right w-full">
              <thead>
                <tr class="border-b dark:border-gray-700">
                  <th>Best Seller</th>
                  <th>Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="#" class="hover:text-indigo-500">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src=""
                            alt="product images"
                          />
                        </div>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <div class="leading-5">
                            Nike Women's Race Running Shoe
                          </div>
                          <div class="text-xs leading-5 text-gray-500">
                            Women shoes
                          </div>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td>
                    <div class="leading-5 text-green-700">$4,345</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" class="hover:text-indigo-500">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src=""
                            alt="product images"
                          />
                        </div>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <div class="leading-5">
                            Nike Womens Free RN Flyknit 2018
                          </div>
                          <div class="text-xs leading-5 text-gray-500">
                            Women shoes
                          </div>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td>
                    <div class="leading-5 text-green-700">$3,235</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" class="hover:text-indigo-500">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src=""
                            alt="product images"
                          />
                        </div>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <div class="leading-5">
                            Nike Women's Sneaker Running Shoes
                          </div>
                          <div class="text-xs leading-5 text-gray-500">
                            Women shoes
                          </div>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td>
                    <div class="leading-5 text-green-700">$1,545</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" class="hover:text-indigo-500">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src=""
                            alt="product images"
                          />
                        </div>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <div class="leading-5">
                            Nike Women's Gymnastics Tennis Shoes
                          </div>
                          <div class="text-xs leading-5 text-gray-500">
                            Women shoes
                          </div>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td>
                    <div class="leading-5 text-green-700">$1,045</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex-shrink max-w-full px-4 w-full lg:w-1/2 mb-6">
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
          <div class="flex flex-row justify-between pb-6">
            <div class="flex flex-col">
              <h3 class="text-base font-bold">Traffic Source</h3>
              <span class="text-gray-500 text-sm">Monthly traffic source</span>
            </div>
            <div x-data="{ open: false }" class="relative">
              <button
                @click="open = !open"
                class="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 focus:outline-none hover:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6 bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  ></path>
                </svg>
              </button>
              <div
                x-show="open"
                @click.away="open = false"
                class="origin-top-right absolute ltr:right-0 rtl:left-0 rounded rounded-t-non bg-white dark:bg-gray-800 z-10 border border-gray-200 dark:border-gray-700"
                style="min-width: 12rem; display: none"
              >
                <a
                  class="block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 dark:focus:bg-gray-900"
                  href="#"
                  >Daily</a
                >
                <a
                  class="block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 dark:focus:bg-gray-900"
                  href="#"
                  >Weekly</a
                >
                <a
                  class="block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 dark:focus:bg-gray-900"
                  href="#"
                  >Yearly</a
                >
              </div>
            </div>
          </div>
          <div class="relative mx-auto text-center w-full sm:w-2/3 lg:w-full">
            <canvas
              class="max-w-100"
              id="DoughnutChart"
              style="
                display: block;
                box-sizing: border-box;
                height: 378px;
                width: 378.5px;
              "
              width="757"
              height="756"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- end2 -->
    <!-- start3 -->
      
    <!-- end3 -->
  </div>
</template>
