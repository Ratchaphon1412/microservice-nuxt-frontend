<template>
    <div class="h-screen pt-20">
        <!-- title page -->
        <h1 class="mb-10 text-center text-2xl text-[#112D4E] font-bold">Tracking Order</h1>
    
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-full ">
    
                <div class="justify-between mb-6 rounded-lg bg-[#DBE2EF] p-6 shadow-md sm:flex sm:justify-start">
                    <img class="w-full rounded-lg sm:w-20 sm:h-20" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image"/>
                    
                    <div class="my-5 sm:mx-5 sm:my-0">
                        <h1 class="text-xl text-[#0074FF] font-semibold">Success Transportation in Sun, 1 December 2023</h1>
                        <p>Transportation by Kerry</p>
                    </div>
                </div>
                
                <div class="max-w-7xl p-6 mx-auto mt-10 sm:mt-10 rounded-lg bg-white shadow-md">
                    <div class="flex justify-between items-center">
                        <h2 class="text-lg font-bold">Tracking Order ID</h2>
                        <div class="flex">
                            <p>XXXXXXXXX</p>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 ml-3 cursor-pointer duration-150 hover:text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr class="my-4"/>
                    <div class="border-l-2 border-gray-500 pl-8">
                        <div class="flex flex-col md:flex-row md:justify-between">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-[#112D4E] text-lg font-semibold mb-2">Success Transportation</h3>
                                <p class="text-[#0074FF] text-sm">January 1, 2022</p>
                            </div>
                            <p class="text-[#0074FF]">Some description goes here...</p>
                        </div>
                        <div class="flex flex-col md:flex-row md:justify-between mt-8">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-lg text-[#DBE2EF] font-semibold mb-2">During Transportation</h3>
                                <p class="text-[#DBE2EF] text-sm">February 1, 2022</p>
                            </div>
                            <p class="text-[#DBE2EF]">Some description goes here...</p>
                        </div>
                        <div class="flex flex-col md:flex-row md:justify-between mt-8">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-[#DBE2EF] text-lg font-semibold mb-2">Preparing the package</h3>
                                <p class="text-[#DBE2EF] text-sm">March 1, 2022</p>
                            </div>
                            <p class="text-[#DBE2EF]">Some description goes here...</p>
                        </div>
                        <div class="flex flex-col md:flex-row md:justify-between mt-8">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-[#DBE2EF] text-lg font-semibold mb-2">Order products</h3>
                                <p class="text-[#DBE2EF] text-sm">April 1, 2022</p>
                            </div>
                            <p class="text-[#DBE2EF]">Some description goes here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>