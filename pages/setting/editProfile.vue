<template>
  <div class="animate-fade-down flex-col w-full p-2">
    <div class="flex-shrink max-w-full px-4 w-full">
      <p class="text-4xl text-gray-900 font-poppin mt-3 mb-5">Edit Profile</p>
    </div>
    <!-- start -->

    <div class="flex-shrink p-4 mb-4">
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
                  v-model="fullname"
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="name"
                  id="name"
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
                  v-model="email"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="phone_number"
                  class="block mb-2 text-lg font-medium text-gray-900"
                  >Phone number</label
                >
                <input
                  :placeholder="user.user.phone"
                  class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="phone_number"
                  id="phone_number"
                  v-model="phone"
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
                  v-model="gender"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
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
              <!-- ช่องว่าง -->
              <div class="col-span-6 mt-4">
                <div class="col-span-6 sm:col-span-6"></div>
              </div>
              <div class="col-span-6 sm:col-span-2">
                <button className="btn btn-outline btn-error w-full">
                  Cancel
                </button>
              </div>

              <div class="col-span-6 sm:col-span-2"></div>

              <div class="col-span-6 sm:col-span-2 flex justify-end">
                <button
                  @click.prevent="submit"
                  class="btn btn-outline btn-accent w-full"
                >
                  Accent
                </button>
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
import Swal from "sweetalert2";
import { authStore } from "@/store/auth.store";
definePageMeta({
  layout: "setting-account-layout",
  middleware: ["auth"],
});

const user = ref(authStore().getUser());
const address = ref(authStore().getAddress());
const { updateProfile } = useAuthStore();
let fullname = ref("");
let email = ref("");
let phone = ref("");
let gender = ref("");

async function submit() {
  let tempemail = user.value.user.email;
  let tempphone = user.value.user.phone;
  let tempfullname = user.value.user.fullname;
  let tempgender = user.value.user.gender;
  if (email.value != "") {
    tempemail = email.value;
  }

  if (phone.value != "") {
    tempphone = phone.value;
  }

  if (fullname.value != "") {
    tempfullname = fullname.value;
  }

  if (gender.value != "") {
    tempgender = gender.value;
  }
  const { value: password } = await Swal.fire({
    title: "Enter your password",
    input: "password",
    inputLabel: "Password",
    inputPlaceholder: "Enter your password",
    inputAttributes: {
      maxlength: 10,
      autocapitalize: "off",
      autocorrect: "off",
    },
  });

  if (password) {
    let response = await updateProfile(
      tempfullname,
      tempemail,
      tempphone,
      tempgender,
      password
    );
  }
}
</script>
