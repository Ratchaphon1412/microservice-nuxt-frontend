<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
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
