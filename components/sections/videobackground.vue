<template>
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <!-- <div
      class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
    >
      Welcome to my site!
    </div> -->
      <video autoplay loop muted class="flex flex-col absolute z-10 w-auto min-w-full min-h-full max-w-none"
      v-for="video in fileSource" :key="video.src">
      <source :src="video.src" :type="video.type" />
      Your browser does not support the video tag.
    </video>
    
    
  </header>
</template>

<script setup lang="ts">
  const fileSource = [
    { src: 'https://image.uniqlo.com/UQ/CMS/video/jp/2023/L1/230818/specialcollaboration_03_230818_pc_1366x546.mp4',type: 'video/mp4'},  
    { src: 'https://image.uniqlo.com/UQ/ST3/th/imagesother/00_WEB_L1L2/Yaya-extra-fine-merino/spl/kv-knit_movie-pc.mp4',type: 'video/mp4'},
  ]
  console.log(fileSource[0].src)
  console.log(fileSource[1].src)

</script>
