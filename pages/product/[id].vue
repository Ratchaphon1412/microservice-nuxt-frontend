<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <!-- <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id"> -->
            <div class="flex items-center">
              <!-- <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{ breadcrumb.name }}</a> -->
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          <!-- </li> -->
          <li class="text-sm">
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ product.name }}</a>
          </li>
        </ol>
      </nav>
      
      <section class="flex mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 gap-10 ">
          <!-- Image gallery -->
          <aside id="selected" class="m-4 sm:w-1/4 md:w-1/5 lg:w-1/6 p-6">
            <div class="lg:flex lg:items-start">
              <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div v-for="image in product.image_products" :key="image.id" class="flex items-center lg:flex-col">
                  <div>
                    <button @click="change(image.image_path)" type="button" class="flex-0 aspect-square mb-3 sm:h-20 md:h-24 lg:h-32 overflow-hidden rounded-lg border-2">
                      <img class="h-full w-full object-cover" :src="image.image_path">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div id="preview" class="p-6 items-center">
            <img class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" :src="previewImage" alt="">
          </div>
      </section>

      <section class="flex-col" >
          <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
              </div>
              <!-- Options -->
              <div class="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 class="sr-only">Product information</h2>

                  <p class=" mt-4 text-3xl tracking-tight text-gray-900">{{ product.price }} ฿</p>

                  <form class="mt-10">
                      <!-- Colors -->
                      <div>
                        <h3 class="text-sm font-medium text-gray-900">Color</h3>

                        <RadioGroup v-model="formData.product_color" class="mt-4">
                          <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                          <div class="flex items-center space-x-3">
                          <RadioGroupOption @click="radioColor(item.id)" v-for="item in product.product_colors" :key="item.id" :value="item.id" v-slot="{ active, checked }">
                              <div :class="[active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                <RadioGroupLabel as="span" class="sr-only">{{ item.color.name }}</RadioGroupLabel>
                                <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10" :style="{ backgroundColor: item.color.hex_color }" />
                              </div>
                          </RadioGroupOption>
                          </div>
                      </RadioGroup> 
                      </div>
          
                      <!-- Sizes -->
                      <div class="mt-10">
                      <div class="flex items-center justify-between">
                          <h3 class="text-sm font-medium text-gray-900">Size</h3>
                          <a href="#" class="text-sm font-medium text-[#3F72AF] hover:text-[3F72AF] hover:text-opacity-60">Size guide</a>
                      </div>
          
                      <RadioGroup class="mt-4">
                          <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                          <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                          <RadioGroupOption v-model="formData.size" v-for="stock in formData.product_color.stocks" :key="stock.size" :value="stock.size" :disabled="!stock.quantity" v-slot="{ active, checked }">
                              <div :class="[stock.quantity > 0 ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-[#112D4E]' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                              <RadioGroupLabel as="span">{{ stock.size }}</RadioGroupLabel>
                              <span v-if="stock.quantity > 0" :class="[active ? 'border' : 'border-2', checked ? 'border-[#112D4E]' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']" aria-hidden="true" />
                              <span v-else aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                  <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                  <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                  </svg>
                              </span>
                              </div>
                          </RadioGroupOption>
                          </div>
                      </RadioGroup>
                      </div>
          
                      <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add Cart</button>
                  </form>
              </div>
      
              <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  <h3 class="sr-only">Description</h3>

                  <div class="mx-auto w-full rounded-2xl bg-white p-2">
                      <Disclosure v-slot="{ open }">
                          <DisclosureButton
                              class="flex w-full rounded-lg bg-[#DBE2EF] px-4 py-2 text-left text-sm font-medium text-[#112D4E] hover:bg-[#3F72AF] hover:bg-opacity-40 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <span class="text-2xl">Description</span>
                              <!-- <ChevronUpIcon
                              :class="open ? 'rotate-180 transform' : ''"
                              class="h-5 w-5 text-purple-500"
                              /> -->
                          </DisclosureButton>
                          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                              <span class="text-xl text-gray-900">{{ product.description }}</span>
                          </DisclosurePanel>
                      </Disclosure>
                      <Disclosure as="div" class="mt-2" v-slot="{ open }">
                          <DisclosureButton
                              class="flex w-full rounded-lg bg-[#DBE2EF] px-4 py-2 text-left text-sm font-medium text-[#112D4E] hover:bg-[#3F72AF] hover:bg-opacity-40 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <span class="text-2xl">Materials</span>
                              <!-- <ChevronUpIcon
                              :class="open ? 'rotate-180 transform' : ''"
                              class="h-5 w-5 text-purple-500"
                              /> -->
                          </DisclosureButton>
                          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <span class="text-xl text-gray-900">{{ product.Materials }}</span>
                              <!-- <span v-for="Materials in product.Materials" :key="Materials" class="text-black">
                                  <p class="text-lg text-gray-900">{{ Materials }}</p>
                              </span> -->
                          </DisclosurePanel>
                      </Disclosure>
                  </div>
                  </div> 
              </div>
          </section>
      </div>
      
      <section id="Category Related" class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 gap-10 justify-center items-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">Related Product</h1>
        <!-- card1 -->
        <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <SectionsCard v-for="list in products" 
          :name="list.name" 
          :description="list.description" 
          :gender="list.gender"
          :listSize="list.listSize"
          :listColor="list.listColor"
          :price="list.price"
          :image="list.image"
          />
        </div>
      </section>
  </div>


</template>
<script setup lang="ts">
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption ,Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { list } from 'postcss';

const route = useRoute()
const { data: product, error } = await baseFetch<any>(`product/${route.params.id}`, {})
const { data: products } = await baseFetch<any>("product/format", {})

console.log(products.value)


const previewImage = useState<string>(undefined)
const change = function (_image:  string) {
    previewImage.value = _image
}

const formData = reactive({
  product_color: product.value.product_colors[0],
  size: "",
  quantity: 0
})

// const listColor = ref<any>([
//   {
//     class: "",
//   }
// ])

// listColor.value = product.value.product_colors.map((item: any) => [
//   {
//     class: `bg-[${item.color.hex_color}]`,
//   }
// ]);

function radioColor(productColorId:any) {
  formData.product_color = product.value.product_colors.find(item => item.id === productColorId)
  console.log(formData.product_color)
}
</script>

