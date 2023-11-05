<template>
  <div class="animate-fade-down flex-col w-full p-2">
    <div class="flex-shrink max-w-full px-4 w-full">
      <p class="text-4xl font-poppin text-gray-900 mt-3 mb-5">Profile</p>
    </div>
    <!-- start -->

    <div class="flex-shrink p-4 mb-4 w-full">
      <div
        class="flex flex-col justify-center bg-white dark:bg-gray-800 rounded-lg h-full"
      >
        <div class="p-4 mb-4 bg-white rounded-lg">
          <form action="#">
            <div class="grid grid-cols-6 gap-6 font-poppin">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >Full Name</label
                >

                <input
                  :placeholder="user.user.fullname"
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="name"
                  id="name"
                  disabled
                />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                </label>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="email"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-white w-10"
                  >Email</label
                >
                <input
                  :placeholder="user.user.email"
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="email"
                  id="email"
                  disabled
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="phone_number"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Phone number
                </label>
                <input
                  :placeholder="user.user.phone"
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="phone_number"
                  id="phone_number"
                  disabled
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="gender"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Gender
                </label>
                <input
                  :placeholder="user.user.gender"
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="gender"
                  id="gender"
                  disabled
                />
              </div>
              <div class="col-span-7 sm:col-span-3">
                <label
                  for="Role"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Role
                </label>
                <input
                  :placeholder="user.user.groups[0].name"
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="Role"
                  id="Role"
                  disabled
                />
              </div>
              <div v-show="checkAddress()">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="address"
                    class="block mb-2 text-lg font-medium text-gray-900"
                    >Address
                  </label>
                  <input
                    :placeholder="address[0]?.fullname"
                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    name="address"
                    id="address"
                    disabled
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block mb-2 text-lg font-medium text-gray-900"
                    >Country
                  </label>
                  <input
                    :placeholder="address[0]?.country"
                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    name="country"
                    id="country"
                    disabled
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="city"
                    class="block mb-2 text-lg font-medium text-gray-900"
                    >City
                  </label>
                  <input
                    :placeholder="address[0]?.province"
                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    name="city"
                    id="city"
                    disabled
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="zip_code"
                    class="block mb-2 text-lg font-medium text-gray-900"
                    >Zip/postal code
                  </label>
                  <input
                    :placeholder="address[0]?.zip_code"
                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    name="zip_code"
                    id="zip_code"
                    disabled
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- end3 -->
  </div>
</template>

<script setup lang="ts">
import { authStore } from "@/store/auth.store";
definePageMeta({
  layout: "setting-account-layout",
  middleware: ["auth"],
});

const user = ref(authStore().getUser());
const address = ref(authStore().getAddress());

function checkAddress() {
  if (address.value.length > 0) {
    return true;
  } else {
    return false;
  }
}
</script>
