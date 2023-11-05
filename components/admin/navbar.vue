<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink to="/" class="flex items-center">
          <!-- <img
            src="https://media.discordapp.net/attachments/1147408273516019723/1151443178222796850/-1-removebg.png?width=1426&height=1064"
            class="h-8 mr-3 object-cover"
            alt="Minny Logo"
          /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 40"
            width="90"
            height="40"
            role="img"
            aria-label="ユニクロ｜UNIQLO"
          >
            <title>ユニクロ｜UNIQLO</title>
            <path fill="red" d="M50 0h40v40H50zM0 0h40v40H0z"></path>
            <g fill="#fff">
              <path
                d="M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zM75.26 34.53h-8.42V21.89h2.53V32h5.89v2.53zM75.26 18.11h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zM59.26 21.89a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zM80.74 21.89a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0z"
              ></path>
              <g>
                <path
                  d="M22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zM14.74 5.47H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zM22.74 22.31v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z"
                ></path>
              </g>
            </g>
          </svg>
          <!-- <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Mininy</span
          > -->
        </NuxtLink>
        <div class="flex md:order-2 space-x-2">
          <button
            class="bg-transparent hover:bg-gray-700 text-gray font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
          >
            <i class="bi bi-person"></i>
            Account
          </button>
          <NuxtLink
            to="/payment"
            type="button"
            class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none py-2 px-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 space-x-2"
          >
            
            <span> Logout </span>
          </NuxtLink>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
         
        </div>
      </div>
    </nav>
  </template>
  
<script setup lang="ts">
import { authStore } from '~/store/auth.store';

const auth = authStore();
const { getUser } = auth;

</script>