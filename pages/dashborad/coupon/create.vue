<template>
    <div class="animate-fade-down flex-col w-full p-2">
        <div class="flex-shrink max-w-full px-4 w-full">
            <p class="text-4xl  font-poppin mt-3 mb-5">Add Coupon</p>
        </div>
        <!-- start -->

        <div class="flex-shrink p-4 mb-4">
            <div class="flex flex-col justify-center bg-white rounded-lg h-full">
                <div class="p-4 mb-4 bg-white rounded-lg">
                    <form @submit.prevent="createCoupon()" action="#">
                        <div class="grid grid-cols-6 gap-6 font-poppin">

                            <div class="col-span-6 sm:col-span-3">
                                <label for="name" class="block mb-2 text-lg font-medium ">Coupon code Name</label>
                                <input v-model="formData.name" placeholder="type here ...."
                                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    name="name" id="name" />
                                <label
                                    class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                                </label>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="code" class="block mb-2 text-lg font-medium  ">Coupon code</label>
                                <input v-model="formData.code" placeholder="code..."
                                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    name="code" id="code" />
                            </div>

                            <div class="col-span-6 sm:col-span-3 grid grid-cols-4 gap-2 rounded">
                                <div class="col-span-3 grid grid-cols-2">
                                    <label for="type"
                                        class="col-span-1 block mb-2 text-lg font-medium sm:col-span-1   w-full">
                                        Type of Coupon
                                    </label>
                                </div>
                                <select id="type" name="type" v-model="formData.type"
                                    class="col-span-2 grid grid-cols-2 appearance-none bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option value="" disabled>choose type discount</option>
                                    <option value="Percent">Percent</option>
                                    <option value="Number">Number</option>

                                </select>


                            </div>

                            <div v-if="formData.type === 'Percent'" class="col-span-6 sm:col-span-3 animate-fade-up">
                                <div class="col-span-3 grid grid-cols-2">
                                    <label for="discount" class="block mb-2  text-lg font-medium  "> Percent Discount </label>
                                </div>
                                <input v-model="formData.discount" placeholder=" % count ..." type="number"
                                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    name="discount" id="discount" />
                            </div>
                            <div v-else-if="formData.type === 'Number'" class="col-span-6 sm:col-span-3 animate-fade-up">
                                <div class="col-span-3 grid grid-cols-2">
                                    <label for="discount" class="block mb-2  text-lg font-medium "> Discount </label>
                                </div>
                                <input v-model="formData.discount" placeholder="count ..." type="number"
                                    class="peer w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    name="discount" id="discount" />
                            </div>
                            <div v-else class="col-span-6 sm:col-span-3 animate-fade-up">
                                
                            </div>

                            <div class="col-span-6 sm:col-span-3 grid grid-cols-4 gap-2 rounded">
                                <div class="col-span-4 grid grid-rows-2">
                                    <label for="expire_date"
                                        class="col-span-1 block mb-2 text-lg font-medium sm:col-span-1   w-full">
                                        Expire Date
                                    </label>
                                    <input v-model="formData.expire_date" type="date" name="expire_date" id="expire_date">
                                </div>
                                


                            </div>
                            <div class="col-span-6 sm:col-span-3 grid grid-cols-4 gap-2 rounded">
                                <div class="col-span-4 grid grid-rows-2">
                                    <label for="limit_coupon"
                                        class="col-span-1 block mb-2 text-lg font-medium sm:col-span-1 w-full">
                                        Limit Coupon
                                    </label>
                                    <input v-model="formData.limit_coupon" type="number" name="limit_coupon" id="limit_coupon" placeholder="Enter Number">
                                </div>

                            </div>
                            <div class="col-span-6 sm:col-span-6">
                                
                            </div>

                            <div class="col-span-6 sm:col-span-2">
                                <button @click="clear()" class="btn btn-outline btn-error w-full">Clear</button>
                            </div>
                            <div class="col-span-1 sm:col-span-2">
                                
                            </div>

                            <div class="col-span-6 sm:col-span-2 flex justify-end">
                                <button type="submit" class="btn btn-outline btn-accent w-full">Accept</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

        <div v-for="e in messageError">
            <p>
                {{ e.message }}
            </p>
        </div>


        <!-- end3 -->

    </div>
</template>
 
<script setup lang="ts">
definePageMeta({
    layout: "admin-layout",
});


const searchText = ref("");

const formData = reactive({
    name: "",
    type: "",
    discount: 0,
    code: "",
    expire_date: "",
    limit_coupon: 0
})

console.log(formData)
const messageError = ref([{}])
async function clear() {
    formData.name =  ""
    formData.type = ""
    formData.discount = 0
    formData.code = ""
    formData.expire_date = ""
    formData.limit_coupon = 0
}
async function createCoupon() {
    console.log(formData)
    const {data:coupon, error: couponError} = await baseFetch<any>("coupon", {
        method: "POST",
        body: formData
    })
    if (coupon.value !== null) {
        navigateTo("/dashborad/coupon")
    } else {
        messageError.value.push(couponError.value?.data)
    }
}

</script>
