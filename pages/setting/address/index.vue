<template>
  <div class="animate-fade-down flex-col w-full p-2">
    <!-- title1 -->
    <div class="flex flex-row justify-between max-w-full px-4 w-full">
      <p class="text-4xl text-gray-900 font-poppin mt-3 mb-5">
        SHIPPING ADDRESS
      </p>

      <NuxtLink
        to="/setting/address/create"
        type="button"
        class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none my-4 mx-8 py-2 px-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 space-x-2"
      >
        <span> Create Address </span>
      </NuxtLink>
    </div>

    <!-- start -->
    <div class="flex-shrink p-4 border-4 border-black w-full shadow-lg">
      <div
        class="flex flex-col justify-center bg-white dark:bg-gray-800 h-full"
      >
        <div class="p-4 bg-white rounded-lg">
          <div v-for="item in address" :key="item">
            <div class="grid grid-cols-6 gap-6 font-poppin">
              <!-- item1 -->
              <div class="col-span-6 sm:col-span-1">
                <p>Address</p>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <h1 class="font-bold text-black text-xl pb-2 pt-2">
                  Address Name
                </h1>
                <p class="text-black text-md pb-2 pt-2">
                  {{ item.fullname }}
                </p>
                <h1 class="font-bold text-black text-xl pb-2 pt-2">
                  Address Detail
                </h1>
                <p class="text-black text-md pb-2 pt-2">
                  {{ item.detail_address }}
                </p>
                <p>
                  {{ item.province }}, {{ item.country }}, {{ item.zip_code }}
                </p>
              </div>

              <div class="col-span-6 sm:col-span-2 flex flex-col">
                <NuxtLink
                  :to="`/setting/address/edit_${item.address_id}`"
                  class="relative inline-block px-4 py-2 font-medium group m-5"
                >
                  <span
                    class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"
                  ></span>
                  <span
                    class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"
                  ></span>
                  <span class="relative text-black group-hover:text-white"
                    >Edit Address</span
                  >
                </NuxtLink>
                <a
                  @click.prevent="deleteAddress(item.address_id)"
                  class="relative inline-block px-4 py-2 font-medium group m-5"
                >
                  <span
                    class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"
                  ></span>
                  <span
                    class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-500"
                  ></span>
                  <span class="relative text-black group-hover:text-white"
                    >Delete</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->

    <!-- end3 -->
  </div>
</template>

<script setup lang="ts">
import { authStore } from "@/store/auth.store";
definePageMeta({
  layout: "setting-account-layout",
  middleware: ["auth"],
});

const address = ref(authStore().getAddress());

async function deleteAddress(id: number) {
  await authStore().deleteAddress(id);

  window.location.reload();
}
</script>
