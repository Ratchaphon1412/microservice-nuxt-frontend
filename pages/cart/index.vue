<template>
    <div class="pt20">
        <div class="mx-auto m-10 max-w-7xl justify-center px-6 md:space-x-6 xl:px-0">
            <!-- title page -->
            <div class="flex items-center p-5">
                <svg class="w-6 h-6 text-gray-800 dark:text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1"/>
                </svg>
                <h1 class="text-2xl text-[#112D4E] font-bold">Cart</h1>
            </div>
    
            <div class="rounded-lg md:w-full p-5 bg-[#DBE2EF]">
                <!-- Select All -->
                <!-- <div class="flex items-center m-5">
                    <input class="w-7 h-7 mr-5 rounded-lg border-2 border-[#112D4E] "
                        type="checkbox" v-model="selectAll" @change="selectAllItems"/>
                    <label for="selectAll" class="text-xl font-bold text-[#112D4E]">Select All</label>
                </div> -->
    
                <ul class="">
                    <!--Order Item-->
                    <li class="w-full sm:h-52 items-center justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex"
                        v-for="item in carts" :key="item.id">
                        <div class="flex justify-center items-center m-5">
                            <!-- <input class="w-7 h-7 mr-5 rounded-lg border-2 border-[#112D4E] "
                                type="checkbox" v-model="item.isOrder" :value="item"/> -->
                            <img class="w-96 rounded-lg sm:w-40 sm:h-40" :src="item.image" alt="product-image"/>
                        </div>
                        <div class="ml-10 mr-5 mt-5 sm:mt-0 sm:w-full">
                            <div class="flex justify-between">
                                <h2 class="text-lg font-bold text-[#112D4E] mb-5">{{ item.name }}</h2>
                                <button @click="removeOrder(item)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p class="mb-12">{{ item.description }}</p>
                            <div class="sm:flex justify-between items-center border-gray-100">
                                <div class="flex w-2/3 items-center">
                                    <div class="flex items-center justify-center mr-3 border-2 border-gray-400 p-3 rounded-lg">
                                        <!-- <Counter :counter="item.counter" @update-counter="updateCounter(item, $event)"></Counter> -->
                                        <span>{{ item.quantity }} items</span>
                                    </div>
                                    <div class="mr-3 border-gray-400 text-[#0074FF] rounded-lg border-2 p-2">
                                        <img class="h-8 w-8 rounded-full" :style="{ backgroundColor: item.color }" />
                                    </div>
                                    <div class="border-gray-400 border-2 rounded-lg p-3">
                                        size {{ item.size }}
                                    </div>
                                    <!-- <select name="" id="" class="mr-3 border-[#DBE2EF] text-[#0074FF] rounded-lg">
                                        <option value="" selected disabled>Color</option>
                                    </select>
                                    <select name="" id="" class="border-[#DBE2EF] text-[#0074FF] rounded-lg">
                                        <option value="" selected disabled>Size</option>
                                    </select> -->
                                    
                                </div>
                                <div class="sm:mt-0 mt-5">
                                    <p class="text-sm text-[#112D4E]">{{ item.price * item.quantity }} Bath</p>
                                </div>
                            </div>
                        </div>
    
                    </li>
                </ul>
    
                <!--Total Order-->
                <div class="flex justify-between items-center">
                    <div class="flex m-5 items-center">
                        <h2 class="text-xl mr-5 text-[#112D4E] font-bold">Total</h2>
                        <p class="text-xl text-[#112D4E]">{{ checkout.payment() }} Bath</p>
                    </div>
                    <div class="flex items-center">
                        <button @click="addToOrder" class="px-10 py-2 bg-[#0074FF] text-white font-semibold rounded-lg hover:bg-blue-600">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { apiCheckout } from '~/store/pinia.store'
const { carts, remove } = apiCheckout();
const checkout = apiCheckout();

    // const items = ref([{
    //     id:'1', counter: 1, isOrder: false, 
    //         color: ['#f6cda8', '#d89d94', '#dd6b6c', '#875d71', '#5b5b5b']
    //     }, { id:'2', counter: 1, isOrder: false,
    //         color: ['#f6cda8', '#d89d94', '#dd6b6c', '#875d71', '#5b5b5b']
    //     }, { id:'3', counter: 1, isOrder: false, 
    //         color: ['#f6cda8', '#d89d94', '#dd6b6c', '#875d71', '#5b5b5b'] 
    //     },
    // ])
    // const selectAll = ref(false)
    // const selectedOrderItems = ref([])

    // const isColorFormVisible = ref(false);

    // function selectAllItems() {
    //     if (selectAll.value) {
    //         // Select all items by getting their keys
    //         selectedOrderItems.value = [...items.value];
    //         items.value.forEach(item => {
    //             item.isOrder = true;
    //         });
    //         console.log(selectedOrderItems)

    //     } else {
    //         // Deselect all items
    //         selectedOrderItems.value = [];
    //         items.value.forEach(item => {
    //             item.isOrder = false;
    //         });
    //         console.log(selectedOrderItems)

    //     }
    // }
    // function updateCounter(item:{counter: number}, newCounterValue:number) {
    //     item.counter = newCounterValue
    //     console.log(item)
    // }
    // function showColorForm() {
    //     isColorFormVisible.value = true;
    // }
    // function closeColorForm() {
    //     isColorFormVisible.value = false;
    // }
    function removeOrder(item:any) {
       remove(item);
       window.location.reload();
    }
</script>