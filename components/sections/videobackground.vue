<template>
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <video ref="videoPlayer" autoplay loop muted class="flex flex-col absolute z-10 w-auto min-w-full min-h-full max-w-none" :src="currentVideo.src" :type="currentVideo.type" @ended="playNextVideo">
      Your browser does not support the video tag.
    </video>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fileSource = [
  // video1
  { src: 'https://cdn.coverr.co/videos/coverr-girl-posing-on-the-edge-of-a-terrace-9533/1080p.mp4', type: 'video/mp4' },
  // video2
  { src: 'https://cdn.coverr.co/videos/coverr-two-people-walking-downstairs-quickly-7342/1080p.mp4', type: 'video/mp4' },
  // video3
  { src: 'https://cdn.coverr.co/videos/coverr--07-022-22-girl-with-analog-camera_0008-7692/1080p.mp4', type: 'video/mp4' },
];

const currentVideoIndex = ref(0);

const playNextVideo = () => {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % fileSource.length;
};

const currentVideo = computed(() => fileSource[currentVideoIndex.value]);
</script>
