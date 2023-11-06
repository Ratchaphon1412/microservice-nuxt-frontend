<template>
    <div class="animate-fade-down flex-col w-full p-2">
         <div class="flex justify-between  max-w-full px-4 w-full">   
                <p class="text-4xl font-poppin text-gray-900 mt-3 mb-5">My Payment</p>
                <div class="mx-10 my-3">
                <a href="/setting/payment/create" class="h-14 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-emerald-500 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                    </span>
                    <NuxtLink v-if="creditList.listCard.length <= 3" to="/setting/payment/create" class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add Card {{ creditList.listCard.length }}/3</NuxtLink>
                    <NuxtLink v-else-if="creditList.listCard.length === 0" to="/setting/payment/create" class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add Card 0/3</NuxtLink>
                </a>
            </div>
         </div>     
 <!-- start -->
 <div v-if="creditList.listCard.length !== 0" v-for="index in creditList.listCard" :key="index" class="grid grid-cols-6 gap-6 w-full h-96">
    <div class="col-span-1"></div>
            <div class="col-span-3 w-5/6 h-3/4 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                
                <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/Zi6v09P.png">
                
                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                Name
                            </p>
                            <p name="name" id="name" class="font-medium tracking-widest">
                                {{ index.name }}
                            </p>
                        </div>
                        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            Card Number
                        </p>
                        <p class="font-medium tracking-more-wider">
                            {{ index.id }}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    Postal
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {{ index.postal_code }}
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs">
                                    Expiry
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {{ index.expiration_month }} / {{ index.expiration_year }}
                                </p>
                            </div>
    
                            <div class="">
                                <p class="font-light text-xs">
                                    city
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                    {{ index.city }}
                                </p>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            <div class="grid grid-rows-4 gap-6 w-full h-full">
                <div class="col-span-1"></div>
                <button @click="remove(index.id)" class="h-14 relative inline-flex col-span-1 items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-800 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg class="w-5 h-5" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.336 41.336" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2 s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2 S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21 c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"></path> </g> </g></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg class="w-5 h-5" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.336 41.336" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2 s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2 S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21 c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"></path> </g> </g></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Delete</span>
                </button>
            </div>
</div>
  <!-- end3 -->
     
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
    console.log(auth.user.user.customer_omise_id)
    //  const { data: product, error } = await baseFetch<any>(`product/${route.params.id}`, {})
    let { getListCard , removeCard } = apiPayment();
    
    // let credit = apiPayment();
    
    let creditList = await getListCard(auth.user.user.customer_omise_id);

    console.log(creditList.listCard)

    async function remove(token_card:string){
        Swal.fire({
            confirmButtonText: 'OK',
            icon : `success`,
            title : "success"
        }).then(async (result) => {
            if(result.isConfirmed){
                await removeCard(token_card,auth.user.user.customer_omise_id)
                creditList = await getListCard(auth.user.user.customer_omise_id);
                window.location.reload();
            }
        })
    }

 
 </script>