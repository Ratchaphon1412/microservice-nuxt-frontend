<template>
    <div class="bg-white">
      <div class="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
              <div class="flex items-center">
                <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{ breadcrumb.name }}</a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li class="text-sm">
              <a :href="product.href" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ product.name }}</a>
            </li>
          </ol>
        </nav>
        
        <section class="flex mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 gap-10 ">
            <!-- Image gallery -->
            <aside id="selected" class="m-4 w-24 p-6">
                <div class="lg:flex lg:items-start">
                  <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                    <div v-for="image in product.images" :key="image.src" class="flex items-center lg:flex-col">
                      <div>
                        <button @click="change(image.src)" type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2">
                          <img class="h-full w-full object-cover" :src="image.src" :alt="image.alt">
                        </button>
                        
                      </div>
                      <!-- <button @click="change(product.images[0].src)" type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900">
                        <img  class="h-full w-full object-cover" :src="product.images[0].src " :alt="product.images[0].alt" />
                      </button> -->
                    </div>
                  </div>
              </div>
            </aside>
            <div id="preview" class="p-6 items-center">
                <img style="width: 750px; height: 750px;" class="" :src="previewImage" alt="">
            </div>
            <!-- <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img :src="product.images[0].src" :alt="product.images[0].alt" class="h-full w-full object-cover object-center" />
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img :src="product.images[1].src" :alt="product.images[1].alt" class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img :src="product.images[2].src" :alt="product.images[2].alt" class="h-full w-full object-cover object-center" />
                    </div>
                </div>
                    <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img :src="product.images[3].src" :alt="product.images[3].alt" class="h-full w-full object-cover object-center" />
                    </div>
            </div> -->
        </section>

        <section class="flex-col" >
            <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
                </div>
                <!-- Options -->
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 class="sr-only">Product information</h2>

                    <p class=" mt-4 text-3xl tracking-tight text-gray-900">{{ product.price }}</p>

                    <form class="mt-10">
                        <!-- Colors -->
                        <div>
                        <h3 class="text-sm font-medium text-gray-900">Color</h3>
            
                        <RadioGroup v-model="selectedColor" class="mt-4">
                            <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                            <div class="flex items-center space-x-3">
                            <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                                <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                                <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
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
                            <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name" :value="size" :disabled="!size.inStock" v-slot="{ active, checked }">
                                <div :class="[size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-[#112D4E]' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                                <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                                <span v-if="size.inStock" :class="[active ? 'border' : 'border-2', checked ? 'border-[#112D4E]' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']" aria-hidden="true" />
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
                                <span class="text-2xl">Overview</span>
                                <ChevronUpIcon
                                :class="open ? 'rotate-180 transform' : ''"
                                class="h-5 w-5 text-purple-500"
                                />
                            </DisclosureButton>
                            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <li v-for="description in product.description" :key="description" class="text-black">
                                    <span class="text-xl text-gray-900">{{ description }}</span>
                                </li>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure as="div" class="mt-2" v-slot="{ open }">
                            <DisclosureButton
                                class="flex w-full rounded-lg bg-[#DBE2EF] px-4 py-2 text-left text-sm font-medium text-[#112D4E] hover:bg-[#3F72AF] hover:bg-opacity-40 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span class="text-2xl">Materials</span>
                                <ChevronUpIcon
                                :class="open ? 'rotate-180 transform' : ''"
                                class="h-5 w-5 text-purple-500"
                                />
                            </DisclosureButton>
                            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <span v-for="Materials in product.Materials" :key="Materials" class="text-black">
                                    <p class="text-lg text-gray-900">{{ Materials }}</p>
                                </span>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                        <!-- Description and details -->
                        <div class="mt-10">
                            <h2 class="text-sm font-medium text-gray-900">Details</h2>
                    
                            <div class="mt-4 space-y-6">
                                <p class="text-lg text-gray-600">{{ product.details }}</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
        
        <section id="Category Related" class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 gap-10 justify-center items-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">Related Product</h1>
          <!-- card1 -->
          <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <SectionsCard/>
            <SectionsCard/>
            <SectionsCard/>
            <SectionsCard/>
            <SectionsCard/>
            <SectionsCard/>
          </div>
        </section>
    </div>


</template>
  <script setup lang="ts">
  import { ref } from 'vue'
  import { StarIcon } from '@heroicons/vue/20/solid'
  import { RadioGroup, RadioGroupLabel, RadioGroupOption ,Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

  const product = {
    name: 'AIRism Cotton Crew Neck Short Sleeve T-Shirt',
    price: 'THB 290.00',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/454315/sub/thgoods_454315_sub1.jpg?width=750',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454315/sub/goods_454315_sub14.jpg?width=750',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454315/item/goods_11_454315.jpg?width=750',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/454315/item/thgoods_69_454315.jpg?width=750',
        alt: 'Model wearing plain white basic tee.',
      },
      {
        src: 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/454315/item/thgoods_00_454315.jpg?width=750',
        alt:  'static image'
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description: [
        'Smooth AIRism fabric with stretch, quick-drying DRY, Cool Touch, odor control, and moisture-wicking comfort features.',
        'Perfect for layering.',
        'AIRism was jointly developed by UNIQLO and Toray.',
    ],
    Materials: ['Please note that this product may have different product ID, even if it is the same item.',
        'FABRIC DETAILS',
        '71% Cotton, 25% Polyester, 4% Spandex',
        'WASHING INSTRUCTIONS',
        'Machine wash cold, gentle cycle, Do not Dry Clean, Do not tumble dry.',
        '- The images shown may include colors that are not available.',
    ],
    details:
      'Smooth AIRism fabric with the look of cotton. Great for wearing on its own or as an inner layer.',
  }
  const reviews = { href: '#', average: 4, totalCount: 117 }
  
  const selectedColor = ref(product.colors[0])
  const previewImage = useState<string>(undefined)
  previewImage.value = product.images[4].src
  const change = function (_image:  string) {
    previewImage.value = _image
  } 
  </script>

  