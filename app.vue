<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import "bootstrap-icons/font/bootstrap-icons.css";
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
