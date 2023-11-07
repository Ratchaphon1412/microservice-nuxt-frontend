<template>
    <div class=" animate-fade-down mx-full w-full p-2">
      <div class="flex-shrink max-w-full px-4 w-[500px]">
        <p class="text-3xl font-poppin mt-3 mb-5">Update Order list</p>
      </div>
      
        <div class="grid grid-cols-6 gap-10">



          <form class="col-span-3 md:col-span-3" @submit.prevent="changeStatus">
            
            <div class="col-span-3 md:col-span-3">
                        <div class="flex flex-col">
                            <label for="product_gender" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Size</label>
                            <select class=" dataTable-selector w-full px-4 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-myOrange-btn mt-2 text-black bg-gray-100" v-model="status">
                <option value="pending" selected>pending</option>
                <option value="process">process</option>
                <option value="done">done</option>
            </select>
                        </div>  
                    </div>
            <button type="submit" class="my-3 btn btn-outline btn-accent w-full">save the status</button>
          </form>



          <form class=" col-span-3 md:col-span-3 flex flex-col" @submit.prevent="changeCode">
            <label for="product_gender" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Code</label>  
              <input v-model="code" placeholder="type code here ..." class="peer w-full border-b-2 border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#112D4E] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            name="product_price" id="product_price"/>
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#112D4E] peer-focus:after:scale-x-100 peer-focus:after:border-[#112D4E] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            
                                </label>
              <button type="submit" class="my-3 btn btn-outline btn-accent w-full">save the code </button>

              
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