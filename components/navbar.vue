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
        <img class="w-18 h-14" src="https://media.discordapp.net/attachments/1147408273516019723/1170772131949334589/068254F4-C41D-4F28-B2E4-103CD38C9519_1_201_a.jpeg?ex=655a4184&is=6547cc84&hm=fb115b5a86d6b75e4eeec6ea708a83fe9e32b4a2377d1aab759e7281483e4184&=" alt="">
          

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
          <i class="bi bi-bag"></i>
          <span> Cart </span>
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
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="/category/women"
              class=" block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Women</a
            >
          </li>
          <li>
            <a
              href="/category/men"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Men</a
            >
          </li>
          <li>
            <a
              href="/category/kid"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Kids</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
