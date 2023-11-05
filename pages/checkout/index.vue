<template>
    <div class="pb-20">
        <div class="mx-auto max-w-7xl justify-center px-6 md:space-x-6 xl:px-0">
            <!-- title page -->
            <div class="flex items-center p-5">
                <svg class="w-6 h-6 text-gray-800 dark:text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1"/>
                </svg>
                <h1 class="text-2xl text-[#112D4E] font-bold">Checkout</h1>
            </div>
            <div class="sm:flex">
                <ul class="h-screen rounded-lg md:w-2/3 p-5 bg-[#DBE2EF] sm:mr-5 overflow-auto">
                    <!--Order Item-->
                    <li class="w-full sm:h-52 items-center justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex"
                        v-for="item in items" :key="item.id">
                            <div class="flex justify-center items-center">
                                <img class="m-5 w-96 rounded-lg sm:w-40 sm:h-40" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image"/>
                            </div>
                            <div class="mr-5 mt-5 sm:mt-0 sm:w-2/3">
                                <div class="flex justify-between mb-12">
                                    <div class="">
                                        <h2 class="text-lg font-bold text-[#112D4E] mb-3">Nike Air Max 2019</h2>
                                        <p class="mt-1 text-md text-[#112D4E]">Blue, Size S</p>
                                    </div>
                                    <span id="amount" class="text-xl font-bold text-[#112D4E]">x1</span>
                              </div>
    
                              <div class="mt-4 flex justify-between sm:mt-0 sm:block">
                                <div class="flex items-center justify-end">
                                  <p class="text-sm text-[#112D4E]">2000.00 Bath</p>
                                </div>
                                
                              </div>
                            </div>
                    </li>
                </ul>
    
            <!-- Sub total -->
            <div class="md:w-1/3 h-full">
                <details class="sm:mt-0 mt-5">
                    <summary class="p-3 rounded-lg cursor-pointer shadow bg-[#0074FF]">
                        <span class="font-bold text-[#112D4E]">Coupon</span>
                    </summary>
                    <div class="rounded-lg p-3 mt-3">
                        <div class="flex items-center">
                            <p class="font-bold text-[#0074FF]">Coupon</p>
                            <input class="w-full mx-5 border-2 border-[#DBE2EF] rounded-lg" type="text" placeholder="Enter your coupon">
                            <button class="w-1/3 rounded-md bg-[#0075FF] py-1.5 font-medium text-blue-50 hover:bg-blue-600">use</button>
                        </div>
                        <hr class="my-4"/>
                        <div>
                            <div class="flex justify-between items-center p-5 bg-white rounded-lg shadow-md">
                                <div class="">
                                    <h1 class="font-semibold">Discount 10%</h1>
                                    <p>Order more than 300 Bath</p>
                                    <p>Expire: January 1, 2022</p>
                                </div>
                                <input type="radio">
                            </div>
                        </div>
                    </div>
                </details>
                <div class="my-5 rounded-lg bg-white p-6 shadow-md">
                    <p class="text-lg text-[#0074FF] font-bold">Transportation</p>
                    <hr class="my-4"/>
                    <select class="w-full" name="" id="">
                        <option value="" selected disabled>DDDDD</option>
                    </select>
                </div>
    
                <div class="rounded-lg bg-white p-6 mb-5 shadow-md">
                    <div class="flex items-center">
                        <p class="text-lg text-[#0074FF] font-bold mr-2">Address</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-700" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"/>
                            </svg>
                        </button>
                    </div>
                    <hr class="my-4"/>
                    <p class="">
                        I am a boy I am a boy I am a boy I am a boy
                    </p>
                </div>
                <div class="p-6">
                    <div class="mb-2 flex justify-between">
                        <p class="text-gray-700">Subtotal</p>
                        <p class="text-gray-700">$129.99</p>
                    </div>
                    <div class="mb-2 flex justify-between">
                        <p class="text-gray-700">Transportation</p>
                        <p class="text-gray-700">$4.99</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-gray-700">Discount</p>
                        <p class="text-gray-700">$4.99</p>
                    </div>
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold">Total</p>
                        <div class="">
                        <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                        </div>
                    </div>
                    <button class="mt-6 mr-5 w-full rounded-md bg-[#0075FF] py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>          
                </div>
            </div>
          </div>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">
    const items = ref([{
        id:'1', counter: 1, isOrder: false, 
            color: ['#f6cda8', '#d89d94', '#dd6b6c', '#875d71', '#5b5b5b']
        }, { id:'2', counter: 1, isOrder: false,
            color: ['#f6cda8', '#d89d94', '#dd6b6c', '#875d71', '#5b5b5b']
        }, { id:'3', counter: 1, isOrder: false, 
            color: ['#f6cda8', '#d89d94', '#dd6b6c', '#875d71', '#5b5b5b'] 
        },
    ])
    </script>