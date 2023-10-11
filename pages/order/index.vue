<template>
    <div class="h-screen pt-20">
        <ul class="flex justify-center">
            <li class="m-3">
                <a href="">All</a>
            </li>
            <li class="m-3">
                <a href="">Order</a>
            </li>
            <li class="m-3">
                <a href="">Transportation</a>
            </li>
            <li class="m-3">
                <a href="">Success</a>
            </li>
        </ul>
        
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex xl:px-0">
            <div class="md:w-full mb-6 rounded-lg p-10 shadow-md bg-[#DBE2EF]">
                <h1 class="text-xl font-bold mr-5">Order#XXXXX</h1>
                <a href="" class="">
                    <div class="border-l-2 border-gray-500 pl-8 m-5">
                        <div class="flex flex-col md:flex-row md:justify-between">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-[#112D4E] text-lg font-semibold mb-2">Success Transportation</h3>
                                <p class="text-[#0074FF] text-sm">January 1, 2022</p>
                            </div>
                            <p class="text-[#0074FF]">Some description goes here...</p>
                        </div>
                    </div>
                </a>

                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img class="w-full rounded-lg sm:w-48 sm:h-48" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image"/>
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                            <p class="mt-1 text-md text-gray-700">Blue, Size S</p>
                        </div>

                        <div class="mt-4 flex justify-between sm:mt-0 sm:block">
                            <div class="flex items-center justify-end">
                                <span id="counter" class="text-xl font-bold">x1</span>
                            </div>
                            <div class="flex items-center sm:mt-2">
                                <p class="text-sm">2000.00 Bath</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-4">
                <div class="flex justify-between">
                    <p>1 Order</p>
                    <p>Total 2000.00 Bath</p>
                </div>

                <hr class="my-4">
                <div class="text-end">
                    <button class="w-1/6 rounded-md bg-[#0075FF] py-1.5 font-medium text-blue-50 hover:bg-blue-600">Order Again</button>
                </div>

            </div>
        </div>
    </div>
</template>