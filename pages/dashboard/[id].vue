<template>
    <div class=" animate-fade-down mx-full w-full p-2">
      <div class="flex-shrink max-w-full px-4 w-[500px]">
        <p class="text-3xl font-poppin mt-3 mb-5">Update Order list</p>
      </div>
      <div class="flex justify-between">
          <form class="flex flex-col" @submit.prevent="changeStatus">
            <label>Size</label>
            <select class="dataTable-selector" v-model="status">
                <option value="pending" selected>pending</option>
                <option value="process">process</option>
                <option value="done">done</option>
            </select>
            <button type="submit" class="border rounded-lg bg-black text-white">save the status</button>
          </form>
        
    
          <form class="flex flex-col" @submit.prevent="changeCode">
              <label>Code</label>
              <input type="text" v-model="code">
              <button type="submit" class="border rounded-lg bg-black text-white">save the code </button>
          </form>
          
      </div>
    </div>
    
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "admin-layout",
  });

  const route = useRoute();
  const id = route.params.id;
  let status = ref('')
  let code = ref('')
  
  async function changeStatus(){
      const { data: responseStatus } = await useFetch("http://microservice.payment.ratchaphon1412.co/api/v1/payment/invoice/manage/", {
        method: 'put',
        body: { 
            payment_id: id,
            status: status.value, 
        }
      })
      console.log(responseStatus.value)
  }

  async function changeCode(){
    const { data: responseCode } = await useFetch("http://microservice.payment.ratchaphon1412.co/api/v1/payment/invoice/manage/", {
        method: 'post',
        body: { 
            payment_id: id,
            code: code.value, 
        }
      })
      console.log(responseCode.value)
  }
  
  </script>