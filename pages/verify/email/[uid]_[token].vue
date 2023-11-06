<template>
</template>

<script lang="ts" setup>
  
  import { onMounted } from "vue";
  import { authStore } from '~/store/auth.store';
  const route = useRoute();
  const auth = authStore();
  const {verifyEmail} = auth;
  onMounted(async () => {
    let uid = route.params.uid;
    let token = route.params.token;
    await verifyEmail(uid, token);
  });
</script>


