<script setup lang="ts">
import { apiCountry } from '~/store/pinia.store';

let error_email = false;
let error_password = false;

const { getProvince, getDistrict, getSubdistrict } = apiCountry();
const { data:province } = await getProvince();
const { data:District } = await getDistrict();
const { data:Subdistrict } = await getSubdistrict();
// console.log(JSON.parse(provice.value))
const realProvince: string[] = [];
const realSubdistrict: string[] = [];
const realDistrict: string[] = [];

function pushString(keep:string[] , api:{}){
    const json = JSON.parse(api.value);
    for(const object of json){
        keep.push(object.name_th);
    }
}

pushString(realProvince, province)
pushString(realSubdistrict, Subdistrict)
pushString(realDistrict, District)
</script>

<template>
    <div class="md:flex">
        <div class="hidden basis-1/2 md:flex items-center md:visible">
            <img src="../assets/css/images/backgroundResgister.png" alt="" class="max-h-screen w-full">
        </div>

        <div class="h-screen md:basis-1/2 bg-white flex flex-col justify-center items-center">
            <p class="text-black text-3xl font-semibold tracking-wide mb-14">
                SET ADDRESS
            </p>

            <form action="" class="w-[60%]">
                <div class="mb-4">
                    <label for="underline_select" class="sr-only">Underline select</label>
                    <select id="underline_select" class="block w-full text-sm text-gray-500 bg-transparent rounded-lg border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 bg-gray-200 peer">  
                        <option selected class="hidden">จังหวัด</option>
                        <option v-for="province in realProvince" :value="province">{{ province }}</option>
                    </select>
                </div>
                
                <div class="mb-4">
                    <label for="underline_select" class="sr-only">Underline select</label>
                    <select id="underline_select" class="block w-full text-sm text-gray-500 bg-transparent rounded-lg border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 bg-gray-200 peer">  
                        <option selected class="hidden">อำเภอ</option>
                        <option v-for="District in realDistrict" :value="District">{{ District }}</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label for="underline_select" class="sr-only">Underline select</label>
                    <select id="underline_select" class="block w-full text-sm text-gray-500 bg-transparent rounded-lg border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 bg-gray-200 peer">  
                        <option selected class="hidden">ตำบล</option>
                        <option v-for="subdistrict in realSubdistrict" :value="subdistrict">{{ subdistrict }}</option>
                    </select>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <input type="number" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">รหัสไปรษณีย์</label>
                    </div>
                    <p v-if="error_password" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                </div>

                <div class="mb-4">     
                    <div class="relative">
                        <textarea id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full h-48 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ></textarea>
                        <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">ข้อมูลที่อยู่</label>
                    </div>
                    <p v-if="error_email" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                </div>
                                
                <!-- send address -->
                <button type="submit" class="btn btn-info w-full text-white bg-[#2674B4] text-3xl">
                    NEXT
                </button>
            </form>

            <p class="mt-4">Already a user? <nuxt-link to="#" class="text-red-600">Skip</nuxt-link> </p>
        </div>
    </div>
</template>