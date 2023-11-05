<template>
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <video autoplay loop muted class="flex flex-col absolute z-10 w-auto min-w-full min-h-full max-w-none" v-if="currentVideo" :key="currentVideo.src" :src="currentVideo.src" :type="currentVideo.type">
      Your browser does not support the video tag.
    </video>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';

const fileSource = [
  // video1
  { src: 'https://cdn.coverr.co/videos/coverr-girl-posing-on-the-edge-of-a-terrace-9533/1080p.mp4', type: 'video/mp4' } ,
  // video2
  { src: 'https://cdn.coverr.co/videos/coverr-two-people-walking-downstairs-quickly-7342/1080p.mp4', type: 'video/mp4' },
  // video3
  { src: 'https://cdn.coverr.co/videos/coverr--07-022-22-girl-with-analog-camera_0008-7692/1080p.mp4', type: 'video/mp4' },
  { src: 'https://cdn.coverr.co/videos/coverr-woman-holding-a-dress-up-6788/1080p.mp4', type: 'video/mp4' },
  
];

let currentVideoIndex = 0;
const currentVideo = ref(fileSource[currentVideoIndex]);

const changeVideo = () => {
  currentVideoIndex = (currentVideoIndex + 1) % fileSource.length;
  currentVideo.value = fileSource[currentVideoIndex];
};

onMounted(() => {
  setInterval(changeVideo, 10000); // Change video every 10 seconds
});
</script>
