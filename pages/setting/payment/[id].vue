<template>
    <div class="animate-fade-down flex-col w-full p-2">
      <!-- title1 -->
      <div class="flex-shrink max-w-full px-4 w-full">
        <p class="text-3xl font-poppin mt-3 mb-5">Create credit</p>
      </div>
      <!-- start -->
  
      <form class="flex-shrink p-4 w-full" @submit.prevent="save()">
        <div
          class="flex flex-col justify-center bg-white dark:bg-gray-800 rounded-lg h-full"
        >
          <div class="p-4 bg-white rounded-lg">
            <div class="grid grid-cols-6 gap-6 font-poppin">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="name"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Name
                </label>
                <input
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="name"
                  id="name"
                  v-model="name"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="number"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Card Number
                </label>
                <input
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="number"
                  id="number"
                  v-model="number"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="city"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >City
                </label>
                <input
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="city"
                  id="city"
                  v-model="city"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="postal"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Postal Code
                </label>
                <input
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="postal"
                  id="postal"
                  v-model="postal"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="security"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Security Code
                </label>
                <input
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="security"
                  id="security"
                  v-model="security"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="month"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Expiration Month
                </label>
                <input
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="month"
                  id="month"
                  v-model="expiration_month"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Year"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Expiration Year
                </label>
                <input
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="Year"
                  id="Year"
                  v-model="expiration_year"
                />
              </div>
  
              <!-- ช่องว่าง -->
              <div class="col-span-6 mt-4">
                <div class="col-span-6 sm:col-span-6"></div>
              </div>
              <div class="col-span-6 mt-4">
                <div class="col-span-6 sm:col-span-6"></div>
              </div>
              <div class="col-span-6 sm:col-span-2">
                <button class="btn btn-outline btn-error w-full">
                  Cancel
                </button>
              </div>
  
              <div class="col-span-6 sm:col-span-2"></div>
  
              <div
                class="col-span-6 sm:col-span-2 flex justify-end"
              >
                <button type="submit" class="btn btn-outline btn-accent w-full">Accent</button>
              </div>
  
              <div class="col-span-6 mt-4">
                <div class="col-span-6 sm:col-span-6"></div>
              </div>
              <div class="col-span-6 mt-4">
                <div class="col-span-6 sm:col-span-6"></div>
              </div>
              <div class="col-span-6 mt-4">
                <div class="col-span-6 sm:col-span-6"></div>
              </div>
              <div class="col-span-6 mt-4">
                <div class="col-span-6 sm:col-span-6"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <!-- end -->
    </div>
  </template>
  
<script setup lang="ts">
    import { apiPayment } from '~/store/payment.store'
    
    let { credits, addCredit } = apiPayment();

    let name = ref("");
    let number = ref("");
    let expiration_month = ref("");
    let expiration_year = ref("");
    let city = ref("");
    let postal = ref("");
    let security = ref("")

    function save() {
        if(name.value != "" && number.value != "" && expiration_month.value != "" && expiration_year.value != "" && city.value != "" && postal.value != "" && security.value != ""){
            addCredit(name.value,number.value,expiration_month.value,expiration_year.value,city.value,postal.value,security.value);
        }
    }
</script>