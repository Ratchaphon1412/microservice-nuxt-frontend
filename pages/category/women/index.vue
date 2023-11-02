<template>
   <div class="mx-auto max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
       <!-- content card -->
       <nav>
           <h1 class="p-6 text-6xl font-bold">All Cloth</h1>
           <div class="p-6">
               <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                   <li class="w-full">
                       <a href="#" aria-selected="true" class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" >Women</a>
                   </li>
                   <li class="w-full">
                       <a href="/" aria-selected="false" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Men</a>
                   </li>
                   <li class="w-full">
                       <a href="/" aria-selected="false" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Kid</a>
                   </li>
               </ul> 
           </div>
           <div id="indicators-carousel" class="p-6" data-carousel="static">
               <div class="relative h-56 overflow-hidden rounded-lg ">
                   <!-- Item 1 -->
                  <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                      <img src="https://im.uniqlo.com/global-cms/spa/res933c172912482d798eb0d1aeb04a6ff1fr.jpg?1693292673009" class="absolute  block w-full -translate-x-1/2 -translate-y-1/2  top-1/2" alt="...">
                  </div>
                  <!-- Item 2 -->
                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="https://im.uniqlo.com/global-cms/spa/res7127f28ab1ddeea2e76ed435a404fc4cfr.jpg?1681884198354" class="absolute  block w-full -translate-x-1/2 -translate-y-1/2 top-1/2" alt="...">
                  </div>
                  <!-- Item 3 -->
                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="https://im.uniqlo.com/global-cms/spa/resce884fadd7f755a2344d2c2718b6aae4fr.jpg?1693291677284" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2" alt="...">
                  </div>
              </div> 
           </div>
       </nav>
       
       <!-- content product -->
       <div class="flex">
           <aside class="flex flex-col w-72 px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
               <h1 class="text-2xl font-bold text-start text">Women</h1>
               <div class="px-3 py-4 overflow-y-auto">
                   <!-- Tops -->
                   <ul class="space-y-2 font-medium">
                       <li>
                           <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-tops" data-collapse-toggle="dropdown-tops">
                               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true"
                               version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                                   <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                                   <g><g><g><path fill="#000000" d="M86.9,11.4c-24.9,7-43.4,15.5-48.8,22.7C30,44.8,23.5,71.3,20.3,106.3c-0.8,9.4-0.7,10,3.6,11.9c9.3,4.4,24.3,8.6,33.7,9.4l1.4,0.1l0.2,52.8c0.2,51.9,0.2,52.9,1.2,53.9c1,1.2,2.5,1.8,8.1,3.8c25.1,8.7,72.8,10.3,105.6,3.5c10.5-2.2,20-5.5,21.7-7.6c0.6-0.7,0.7-8.6,0.9-53.6l0.2-52.8l4.6-0.6c8.6-1.1,22.5-5.2,30.5-8.9c3.5-1.7,4.4-3.2,4.1-6.7c-0.1-1.2-0.6-5.6-0.9-9.6c-3.1-32.1-9.6-57.6-17.3-67.9c-5.3-7.1-24.5-16-48.4-22.5c-7-1.9-6-1.9-17.8,0.1c-23.2,4-24.6,4-48.8-0.2c-5.1-0.9-9.6-1.6-10.2-1.5C92.2,10,89.6,10.6,86.9,11.4z M91,23.1c0.6,1.2,2.6,3.5,4.4,5.2c14.3,13.3,43.6,14.8,61.2,3.2c3.2-2.2,7-5.9,8.3-8.4c0.6-1.1,1.2-2,1.4-2c0.8,0,9.9,2.8,16,4.8c15.6,5.4,25.5,10.7,28.8,15.7c4,6,8.1,20.1,11,37.6c2.4,14.7,4.2,30.3,3.5,31c-0.2,0.2-3.3,1.4-6.8,2.6c-6.5,2.3-14.7,4.3-19.7,4.9l-2.7,0.3l0.2-15.6c0.2-13.6,0.3-16.1,1.2-19.6c1.3-5.3,3.4-10.2,5.6-13c2.8-3.5,3.4-5,2.8-7c-0.7-2.1-2.5-3.4-4.7-3.4c-1.4,0-2.2,0.4-3.6,1.7c-3.9,3.5-7.8,11.7-10,20.5c-0.8,3.2-0.8,8.4-1.1,75.1l-0.2,71.6l-4.1,1.3c-14,4.4-31.9,6.5-54.6,6.5c-22.6,0-40.6-2.1-54.6-6.5l-4.1-1.3l-0.3-71.6c-0.3-77.4-0.1-72.8-2.5-80.4c-2.1-6.5-5.6-12.6-8.8-15.4c-2.1-1.8-4.6-1.9-6.5-0.3c-2.6,2.2-2.4,4.8,0.6,8.3c3.5,4,6.1,11.6,7.1,19.9c0.2,2.3,0.5,9.8,0.5,16.8v12.6l-2.6-0.3c-4.9-0.6-13.2-2.6-19.6-4.8c-3.5-1.2-6.6-2.4-6.8-2.6c-0.6-0.6,1.4-18.3,3.6-31c3-18.3,6.9-31.3,11-37.5c4.1-6.1,18.5-13,42.2-20.1C89.5,20.8,89.9,20.9,91,23.1z M110.9,22.8c9.6,1.5,15.6,2,20.3,1.7c3.8-0.3,17.8-2.2,21.2-2.9l1.2-0.3l-1.2,1c-1.8,1.6-8.2,4.5-11.9,5.5c-10.7,3-22.6,1.9-32.1-2.7c-2-1-4.2-2.3-4.8-2.8l-1.2-1l1.4,0.2C104.5,21.8,107.7,22.4,110.9,22.8z"/></g></g></g>
                                   </svg>
                                 <span class="flex-1 ml-3 text-left text-xl whitespace-nowrap">TOPS</span>
                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                 </svg>
                           </button>
                           <ul id="dropdown-tops" class="hidden py-2 space-y-2">
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Short sleeve t-shirt</a>
                                 </li>
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Long sleeve t-shirt</a>
                                 </li>
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Short sleeve shirt</a>
                                 </li>
                                 <li>
                                   <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Long sleeve shirt</a>
                                </li>
                           </ul>
                        </li>
                   </ul>
                   <!-- Outerwear -->
                   <ul class="space-y-2 font-medium">
                       <li>
                           <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-Outerwear" data-collapse-toggle="dropdown-Outerwear">
                               <svg version="1.1" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                                   <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                                   <g><g><g><g><g><path fill="#000000" d="M74.8,182c-1.6-0.4-2.6-1.9-2.3-3.5l9.3-43.4c0.3-1.6,1.9-2.6,3.5-2.3c1.6,0.3,2.6,1.9,2.3,3.5l-9.3,43.4C78,181.1,76.7,182.4,74.8,182z"/></g><g><g><path fill="#000000" d="M177.7,179.7l-9.3-43.4c-0.3-1.6,0.7-3.2,2.3-3.5c1.6-0.3,3.2,0.7,3.5,2.3l9.3,43.4c0.3,1.6-0.7,3.1-2.3,3.5C179.5,182.4,178,181.1,177.7,179.7z"/></g><path fill="#000000" d="M217.7,99.4c-8.4-31.1-19.5-50.5-19.6-50.6c-0.3-0.4-7.9-8.9-21.4-12.5C175.4,20.5,156.2,10,128,10c-28.2,0-47.4,10.5-48.6,26.3c-13.5,3.6-21,12.1-21.4,12.5c-0.1,0.1-11.2,19.5-19.6,50.6c-7.7,28.7-15,74.1-5.9,127.6c0,0,2.4,16.5,2.4,16.5c0.2,1.4,1.4,2.5,2.9,2.5h20c1.5,0,2.7-1.1,2.9-2.5l2.3-16.2l2.5-5.1l0.7,3c0.3,1.3,1.5,2.3,2.9,2.3H187c1.4,0,2.6-0.9,2.9-2.3l0.7-3l2.5,5.1l2.3,16.2c0.2,1.4,1.4,2.5,2.9,2.5h20c1.4,0,2.7-1.1,2.9-2.5c0,0,2.4-16.5,2.4-16.5C232.7,173.5,225.4,128.1,217.7,99.4z M176.2,42.3c8.5,2.5,14.3,7.3,16.4,9.3l-6.6,28.9h-55.1V68.9l6-12.5c6.4,0.5,25.5,1.2,34.6-6.9C173.9,47.5,175.4,45,176.2,42.3z M69.9,86.4h55.2v118.2H67.6C65.6,192.3,57.5,135.7,69.9,86.4z M68.8,210.4h56.3v2.7H69.4L68.8,210.4z M128,61.5l-4.5-9.2c-0.1-0.3-0.3-0.6-0.5-0.9c-1.4-1.6-2.8-3.3-4.1-5h18.2c-1.3,1.7-2.7,3.4-4.1,5c-0.2,0.3-0.4,0.6-0.5,0.9L128,61.5z M114.5,40.5c-2.9-4.2-5-7.8-5-9.3c0-3.3,7.6-5.6,18.4-5.6c10.9,0,18.4,2.3,18.4,5.6c0,1.6-2,5.2-5,9.3H114.5z M128,15.9c25.2,0,42.8,9.1,42.8,22.1c0,2.9-1,5.2-3.2,7.1c-5.8,5.1-18.3,5.9-26.6,5.7c4.7-5.8,11.2-14.8,11.2-19.6c0-7.4-8.6-11.5-24.3-11.5s-24.3,4.1-24.3,11.5c0,4.8,6.5,13.8,11.2,19.6c-8.3,0.3-20.8-0.5-26.6-5.7c-2.1-1.9-3.2-4.2-3.2-7.1C85.2,25,102.8,15.9,128,15.9z M79.8,42.3c0.8,2.7,2.3,5.2,4.6,7.2c9.1,8.1,28.3,7.4,34.6,6.9l6,12.5v11.6H69.9l-6.6-28.9C65.6,49.5,71.3,44.8,79.8,42.3z M55.3,240.1H40.4l-0.4-2.4h15.6L55.3,240.1z M56.4,231.9H39.1l-0.4-2.4h18L56.4,231.9z M58.3,223.6H37.8c-8.4-51.3-1.3-94.8,6.1-122.4c5.2-19.4,11.3-33.9,15.1-41.9l5.5,24.1c-14.4,55.2-3.2,119.7-2.4,124.3c0,0.1,1.2,5.3,1.2,5.3L58.3,223.6z M71.4,221.6l-0.6-2.7h54.3v2.7H71.4z M184.6,221.6h-53.7v-2.7h54.3L184.6,221.6z M186.6,213.1h-55.6v-2.7h56.3L186.6,213.1z M188.4,204.5h-57.4V86.4h55.2C198.5,135.7,190.4,192.3,188.4,204.5z M215.6,240.1h-14.9l-0.3-2.4H216L215.6,240.1z M216.9,231.9h-17.3l-0.3-2.4h18L216.9,231.9z M218.1,223.6h-20.5l-5.1-10.5c0,0,1.2-5.2,1.2-5.3c0.8-4.6,12-69.2-2.4-124.3l5.5-24.1c3.8,7.9,9.9,22.3,15.1,41.6C219.5,128.6,226.5,172.2,218.1,223.6z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g>
                                   </svg>
                                 <span class="flex-1 ml-3 text-left text-xl  whitespace-nowrap">Outerwear</span>
                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                 </svg>
                           </button>
                           <ul id="dropdown-Outerwear" class="hidden py-2 space-y-2">
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Hoodies & Casual Jackets</a>
                                 </li>
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Jackets & Blazers</a>
                                 </li>
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Coats</a>
                                 </li>
                           </ul>
                        </li>
                   </ul>
                   <!-- BOTTOMS -->
                   <ul class="space-y-2 font-medium">
                       <li>
                           <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-BOTTOMS" data-collapse-toggle="dropdown-BOTTOMS">
                               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true"
                               fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                   viewBox="0 0 466.389 466.389" xml:space="preserve">
                               <path d="M306.865,3.215c-0.893-2.331-3.362-3.651-5.8-3.083c-44.399,10.296-91.339,10.296-135.741,0
                                   c-2.431-0.564-4.907,0.752-5.8,3.083c-23.313,60.917-6.929,157.916,2.86,215.871c3.385,20.038,6.058,35.864,5.813,42.738
                                   c-0.998,27.931,9.558,189.635,10.007,196.505c0.126,1.922,1.344,3.601,3.132,4.316c12.483,4.993,26.232,4.992,38.714,0
                                   c1.833-0.733,3.063-2.477,3.139-4.45l7-182c0.008-0.206,0.003-0.412-0.014-0.616c-2.098-24.646,0.311-74.165,3.018-115.056
                                   c2.708,40.89,5.117,90.407,3.018,115.056c-0.017,0.205-0.021,0.411-0.014,0.616l7,182c0.075,1.973,1.306,3.716,3.139,4.45
                                   c6.242,2.497,12.799,3.745,19.357,3.745c6.557,0,13.116-1.249,19.356-3.745c1.789-0.715,3.007-2.394,3.133-4.316
                                   c0.45-6.87,11.005-168.574,10.008-196.505c-0.246-6.874,2.428-22.701,5.813-42.738C313.793,161.13,330.178,64.132,306.865,3.215z
                                   M307.787,56.721c-13.261-0.394-24.705-9.319-28.528-21.716c8.375-1.16,16.707-2.629,24.969-4.417
                                   C305.898,38.919,307.057,47.676,307.787,56.721z M167.394,10.843c43.15,9.346,88.452,9.346,131.602,0
                                   c1.109,3.229,2.091,6.575,2.99,9.996c-45.163,9.749-92.417,9.749-137.582,0C165.303,17.419,166.285,14.072,167.394,10.843z
                                   M228.544,38.159c1.55,0.021,3.1,0.033,4.65,0.033s3.1-0.012,4.65-0.033v29.063h-9.3V38.159z M162.161,30.587
                                   c8.262,1.788,16.594,3.257,24.969,4.417c-3.823,12.396-15.266,21.322-28.528,21.716C159.333,47.676,160.492,38.919,162.161,30.587z
                                   M187.972,454.406c-0.091-1.409-0.21-3.258-0.352-5.473c3.971,0.391,7.952,0.61,11.934,0.61c4.67,0,9.34-0.275,13.993-0.813
                                   l-0.219,5.704C205.054,457.045,196.244,457.037,187.972,454.406z M253.061,454.434l-0.219-5.704
                                   c4.653,0.538,9.323,0.813,13.993,0.813c3.983,0,7.964-0.219,11.935-0.61c-0.142,2.215-0.261,4.063-0.352,5.473
                                   C270.146,457.037,261.336,457.046,253.061,454.434z M294.144,217.42c-3.615,21.404-6.228,36.869-5.946,44.76
                                   c0.781,21.863-5.96,131.988-8.785,176.644c-8.968,1.014-18.004,0.934-26.961-0.226l-6.249-162.482
                                   c3.915-47.154-7.538-176.083-8.028-181.56c-0.23-2.579-2.392-4.554-4.98-4.554s-4.749,1.976-4.98,4.554
                                   c-0.491,5.477-11.943,134.406-8.028,181.56l-6.249,162.482c-8.958,1.16-17.993,1.24-26.961,0.227
                                   c-2.825-44.656-9.566-154.781-8.785-176.644c0.282-7.892-2.331-23.356-5.946-44.76c-6.757-40-16.71-98.927-14.296-150.684
                                   c18.57-0.119,34.626-12.892,39.22-30.496c7.106,0.768,14.236,1.315,21.375,1.628v34.354c0,2.761,2.239,5,5,5h19.3
                                   c2.762,0,5-2.239,5-5V37.869c7.139-0.313,14.268-0.86,21.375-1.628c4.595,17.604,20.652,30.377,39.221,30.496
                                   C310.854,118.494,300.9,177.42,294.144,217.42z"/>
                               </svg>
                               <!-- <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                                 </svg> -->
                                 <span class="flex-1 ml-3 text-left text-xl whitespace-nowrap">BOTTOMS</span>
                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                 </svg>
                           </button>
                           <ul id="dropdown-BOTTOMS" class="hidden py-2 space-y-2">
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Casual Pants</a>
                                 </li>
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Jeans</a>
                                 </li>
                                 <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">short sleeve shirt</a>
                                 </li>
                                 <li>
                                   <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">long sleeve shirt</a>
                                </li>
                           </ul>
                        </li>
                   </ul>
               </div>
               <!-- Filter section, show/hide based on section state. -->
               <div class="border-t border-gray-200">
                   <h1 class="text-xl text-start mt-4">Colors</h1>
                       <RadioGroup v-model="selectedColor" class="mt-4">
                           <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                           <div class="lg:grid lg:max-w-7xl lg:grid-cols-4 lg:grid-rows-[auto,auto,1fr] p-2 gap-2">
                               <RadioGroupOption as="template" v-for="color in colors" :key="colors.name" :value="color" v-slot="{ active, checked }">
                                   <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 cursor-pointer flex items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                       <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                                       <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                                   </div>
                               </RadioGroupOption>
                           </div>
                       </RadioGroup>
               </div>
               <div class="border-t border-gray-200">
                   <h1 class="text-xl text-start mt-4">Size</h1>
                   <RadioGroup v-model="selectedSize" class="mt-4">
                       <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                       <div class="grid grid-cols-3 gap-4 md:grid-cols-3 ">
                           <RadioGroupOption as="template" v-for="size in sizes" :key="size" :value="size"  v-slot="{ active, checked }">
                               <div :class="[size.selectedClass, active && checked ? 'ring-1 ring-[#112D4E]' : '', !active && checked ? '' : '', 'border-black border-opacity-10 group relative flex items-center justify-center rounded-md border text-lg font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1']">
                                   <RadioGroupLabel as="span" class="p-2">{{ size }}</RadioGroupLabel>
                               </div>   
                           </RadioGroupOption>
                       </div>
                   </RadioGroup>
               </div>
               <div class="border-t border-gray-200 mt-4">
                   <h1 class="text-xl text-start mt-4">Cost</h1>
                   <div class="p-4 flex flex-col gap-4">
                       <div class="flex gap-1">
                           <ul>
                               <li>
                                   <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                   <label class="ml-2 text-gray-600">less than ฿500</label>
                               </li>
                               <li>
                                   <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                   <label class="ml-2  text-gray-600">฿500 - ฿999</label>
                               </li>
                               <li>
                                   <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                   <label class="ml-2 text-gray-600">more than ฿1000</label>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
               <div class="border-t border-gray-200 mt-4">
                   <h1 class="text-xl text-start mt-4">Cost</h1>
                   <div class="p-4 flex flex-col gap-4 ">
                       <div class="flex gap-1">
                           <input type="radio" name="radio-1" class="radio"/>
                           <h1>less than ฿500</h1>
                       </div>
                       <div class="flex gap-1">
                           <input type="radio" name="radio-1" class="radio" />
                           <h1>฿500 - ฿999</h1>
                       </div>
                       <div class="flex gap-1">
                           <input type="radio" name="radio-1" class="radio" />
                           <h1>more than ฿1000</h1>
                       </div>
                   </div>
               </div>

           </aside>
           <div class="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
               <SectionsCard/>
               <SectionsCard/>
               <SectionsCard/>
               <SectionsCard/>
               <SectionsCard/>
               <SectionsCard/>
           </div>
       </div>
   </div>
</template>

<script setup>
   import { RadioGroup, RadioGroupLabel, RadioGroupOption ,Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
   import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
   const colors = [
       { name: 'darkBlue', class: 'bg-[#112D4E]', selectedClass: 'ring-gray-400' },
       { name: 'softblue', class: 'bg-[#3F72AF]', selectedClass: 'ring-gray-400' },
       { name: 'White', class: 'bg-[#DBE2EF]', selectedClass: 'ring-gray-400' },
       { name: 'darkBlue', class: 'bg-[#112D4E]', selectedClass: 'ring-gray-400' },
       { name: 'darkBlue', class: 'bg-[#112D4E]', selectedClass: 'ring-gray-400' },
       { name: 'darkBlue', class: 'bg-[#112D4E]', selectedClass: 'ring-gray-400' },
   ]
   const sizes =['xss','xs','s','m','l','xl','2xl','3xl']
   
</script>


