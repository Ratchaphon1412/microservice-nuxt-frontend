<template>
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96 ">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out bg-black " data-carousel-item>
            <div class="grid grid-cols-2">
                
                <img  src="https://image.makewebeasy.net/makeweb/0/JfOhfqPD6/Home/Info7.jpg?v=202206091808" class="absolute block w-full object-contain  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black opacity-50" alt="...">
                <h1 class="absolute text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            เลือกในสิ่งที่ชอบ</h1>
        </div>
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out bg-black" data-carousel-item>
             <img  src="https://bestiebrand.com/wp-content/uploads/2022/07/shutterstock_739755505.jpg" class="absolute block w-full object-contain  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black opacity-50" alt="...">
                <h1 class="absolute text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    เลือกในสิ่งที่ใช่</h1>
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out bg-black" data-carousel-item>
            <img  src="https://pankansociety.com/wp-content/uploads/2020/09/s-01.jpg" class="absolute block w-full object-contain  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black opacity-50" alt="...">
                <h1 class="absolute text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            จัดเลยไม่ต้องลังเล</h1>
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out bg-black" data-carousel-item>
            <img  src="https://taxclinic.mof.go.th/product/1484545722-1.jpg" class="absolute block w-full object-contain  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black opacity-50" alt="...">
                <h1 class="absolute text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            เสื้อผ้าเรียบๆที่ใช่</h1>  
         </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out bg-black" data-carousel-item>
            <img  src="https://accessoryaddicted.in.th/wp-content/uploads/2021/02/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-M-House-Second-Hand-%E0%B8%99%E0%B8%B3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%95%E0%B9%88%E0%B8%B3%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A34-1024x684.jpg" class="absolute block w-full object-contain  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black opacity-50" alt="...">
                <h1 class="absolute text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            อยู่ที่นี่แล้ว</h1>
          </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

</template>