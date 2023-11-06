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
    
            <!-- Sub total -->
            <div class="md:w-1/3 h-full">    
                <!-- <details class="sm:mt-0 mt-5">
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
                </details> -->
    
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
                    <div v-if="user_address.length === 0">
                        <p class="text-red-500">Please enter your address.</p>
                    </div>
                    <div v-else>
                        <select @click="selectAddress(addr)" v-model="address" v-for="addr in user_address" name="" id="">
                            <option :value="addr.detail_address">
                                {{ addr.detail_address }} {{ addr.country }}
                            </option>
                        </select>
                    </div>
                    <p class="">
                        {{ address.detail_address }}, {{ address.province }}, {{ address.country }}, {{ address.zip_code }}
                    </p>
                </div>
                <div class="p-6">
                    <div class="mb-2 flex justify-between">
                        <p class="text-gray-700">Subtotal</p>
                        <p class="text-gray-700">{{ amout }}฿</p>
                    </div>
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold">Total</p>
                        <div class="">
                        <p class="mb-1 text-lg font-bold">{{ amout }} ฿</p>
                        </div>
                    </div>
                    <button @click="confirmBuy()" type="button" class="mt-6 mr-5 w-full rounded-md bg-[#0075FF] py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>          
                </div>
            </div>
          </div>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">


    import { authStore } from '~/store/auth.store'
    import { apiCheckout } from '~/store/pinia.store'
    import { apiPayment } from '~/store/payment.store'
    import Swal from 'sweetalert2';

    const { carts , remove , payment, reduceStock } = apiCheckout();
    const { paymentProduct } = apiPayment();

    const amout = payment();
    console.log(amout);
    const auth = authStore();
    console.log(auth.user.user.customer_omise_id)

    const user_address = auth.address.address
    const address = ref("")
    
    function buy(){
        if (carts.length === 0) {
            Swal.fire({
                title: "You don't have any product in cart.",
                confirmButtonText: 'OK'
            })
        } else {
            if (address.value === "") {
                Swal.fire({
                    title: "Please enter your address!",
                    confirmButtonText: 'OK'
                })
            } else {
                if(auth.user) {
                    paymentProduct(auth.user.user.customer_omise_id,);
                    reduceStock(address.value)
                }
            }
        }
    }

    function confirmBuy() {
        Swal.fire({
            title: 'Checkout?',
            icon: 'question',
            iconHtml: '?',
            confirmButtonText: 'Buy',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            showCloseButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                buy();
            }
        })
    }

    function selectAddress(selectedAddress:any) {
        address.value = selectedAddress
        console.log(address.value)
    }


    function removeOrder(item:any) {
        remove(item);
        window.location.reload();
    }
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