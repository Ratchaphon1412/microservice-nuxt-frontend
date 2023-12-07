<template>
  <main class="bg-white">
    <SectionsVideobackground />
    <h1 class="text-4xl font-bold text-start p-6">Trending Product</h1>

    <div class="carousel carousel-center p-4 w-full space-x-4">
      <div
        class="carousel-item"
        v-for="(product, index) in products.slice(0, 15)"
        :key="index"
      >
        <SectionsCard
          class="w-80"
          :id="product.id"
          :name="product.name"
          :description="product.description"
          :gender="product.gender"
          :listSize="product.listSize"
          :listColor="product.listColor"
          :price="product.price"
          :image="product.image"
        />
      </div>
    </div>

    <h1 class="text-4xl font-bold text-start p-6">Basic Product</h1>
    <div
      class="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div
        class="h-96 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div
          class="w-full h-full shadow-2xl overflow-hidden relative bg-black rounded-xl"
        >
          <a href="/category/men">
            <img
              class="absolute inset-0 h-full w-full object-cover opacity-50"
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <div
              class="flex flex-col h-full items-center justify-center relative"
            >
              <h1
                class="text-4xl text-white tracking-wider m-5"
                style="z-index: 2"
              >
                Men
              </h1>
            </div>
          </a>
        </div>
      </div>
      <div
        class="h-96 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div
          class="w-full h-full shadow-2xl overflow-hidden relative bg-black rounded-xl"
        >
          <a href="/category/women">
            <img
              class="absolute inset-0 h-full w-full object-cover opacity-50"
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
            <div
              class="flex flex-col h-full items-center justify-center relative"
            >
              <h1
                class="text-4xl text-white tracking-wider m-5"
                style="z-index: 2"
              >
                Women
              </h1>
            </div>
          </a>
        </div>
      </div>
      <div
        class="h-96 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div
          class="w-full h-full shadow-2xl overflow-hidden relative bg-black rounded-xl"
        >
          <a href="/category/kid">
            <img
              class="absolute inset-0 h-full w-full object-cover opacity-50"
              src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
            <div
              class="flex flex-col h-full items-center justify-center relative"
            >
              <h1
                class="text-4xl text-white tracking-wider m-5"
                style="z-index: 2"
              >
                Kid
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const { data: products } = await baseFetch<any>("product/format", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(products.value);
</script>
