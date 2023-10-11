<template>
    <div class="pb-20">
        <!-- title page -->
        <h1 class="mb-10 text-center text-2xl text-[#112D4E] font-bold">Order#XXXXXXX</h1>
        <div class="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-full">
                <ul class="flex items-center justify-center w-full mb-4 sm:mb-5">
                    <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                        <div class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                            <svg class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                        <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M19.9 6.58c0-.009 0-.019-.006-.027l-2-4A1 1 0 0 0 17 2h-4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.3c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0A3.173 3.173 0 0 0 7.7 12h4.6c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0 3.177 3.177 0 0 0-.049-.5h.3a1 1 0 0 0 1-1V7a.99.99 0 0 0-.1-.42ZM16.382 4l1 2H13V4h3.382ZM4.5 13.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm11 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"/>
                            </svg>
                        </div>
                    </li>
                    <li class="flex items-center">
                        <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                            <svg class="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                            </svg>
                        </div>
                    </li>
                </ul>

                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:justify-start">
                    <div class="">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h2 class="text-xl text-[#0074FF] font-bold px-3">Status Transportation</h2>   
                        </div>         
                        <div class="p-5 ml-2">
                            <p>Transportation by Kerry - (Tracking Order) </p>
                        </div>
                        <div class="border-l-2 border-gray-500 pl-8 ml-8">
                            <h3 class="text-[#112D4E] text-lg font-semibold mb-2">Success Transportation</h3>
                            <p class="text-[#0074FF] text-sm">January 1, 2022</p>
                        </div>
                    </div>
                    <hr class="my-5">
                    <div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h2 class="text-xl text-[#0074FF] font-bold px-3">Address</h2>   
                        </div>         
                        <div class="p-5 ml-2">
                            <h3 class="text-[#112D4E] text-xl font-semibold mb-2">Firstname  Lastname (+66) 00 000 0000</h3>
                            <p>Address detail</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg p-5 bg-[#DBE2EF]">
                    <ul class="max-h-screen overflow-auto">
                        <!--Order Item-->
                        <li class="w-full sm:h-52 items-center justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex"
                            v-for="item in items" :key="item.id">
                            <div class="flex justify-center items-center">
                                <img class="m-5 w-96 rounded-lg sm:w-40 sm:h-40" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image"/>
                            </div>
                            <div class="mr-5 mt-5 sm:mt-0 sm:w-4/5">
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

                    <details class="mb-2">
                        <summary class="cursor-pointer">
                            <span class="text-[#112D4E] text-xl font-semibold mb-2">Summary Total</span>
                        </summary>
                        <div class="m-5">
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
                                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                            </div>
                        </div>
                    </details>
                </div>

                <div class="sm:flex sm:justify-between sm:my-6">

                    <div class="sm:w-3/6 justify-between p-6 mb-6 sm:justify-start">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h2 class="text-xl text-[#0074FF] font-bold px-3">Payment</h2>   
                        </div>         
                        <div class="p-5 pb-0 ml-2">
                            <h3 class="text-[#112D4E] text-xl font-semibold mb-2">Prompay</h3>
                        </div>
                    </div>

                    <div class="w-full sm:m-6 sm:pr-0 p-10 pt-0 sm:items-center sm:border-l-2 sm:border-gray-100">
                        <h2 class="text-[#112D4E] text-xl font-bold mb-3">Detail Order</h2>
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Date Order</p>
                            <p class="text-gray-700">January 1, 2022 10:10PM</p>
                        </div>
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Date Payment</p>
                            <p class="text-gray-700">January 1, 2022 10:10PM</p>
                        </div>
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Date Transportation</p>
                            <p class="text-gray-700">January 1, 2022 10:10PM</p>
                        </div>
                        <div class="flex justify-end">
                            <button class="w-full mr-5 mt-5 py-2 bg-[#0075FF] text-white rounded-lg">Contact Seller</button>
                            <button class="w-full mt-5 py-2 bg-[#0075FF] text-white rounded-lg">Order Again</button>
                        </div>
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