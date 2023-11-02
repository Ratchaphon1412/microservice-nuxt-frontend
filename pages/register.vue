<script setup lang="ts">
let error_email = false;
let error_phone = false;
let error_name = false;

let Password = ref("");
let error_minimun = ref(false);
let error_symbol = ref(false);

let realPassword = ref("");
let error_realPassword = ref(false);

function next(){
    if(realPassword.value === Password.value){
        error_realPassword.value = false;
    }else{
        error_realPassword.value = true;
    }
}

watch(Password,() => {
    if(Password.value.length < 8){
        error_minimun.value = true
    }else {
        error_minimun.value = false;
    }
    
    if(Password.value.includes("@") || Password.value.includes("!")){
        error_symbol.value = false;
    }else{
        error_symbol.value = true;
    }
}, { immediate: true })

</script>

<template>
    <div class="md:flex">
        <div class="md:basis-1/2 bg-white">
            <div class="h-screen flex flex-col justify-center items-center" id="intro">
                <p class="text-black text-3xl font-semibold tracking-wide mb-10">
                    LET'S GET YOU STARTED
                </p>
    
                <form action="" class="w-[50%]" @submit.prevent="next()">
                    <div class="mb-4">     
                        <div class="relative">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Full name</label>
                        </div>
                        <p v-if="error_name" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                    </div>
    
                    <div class="mb-4">     
                        <div class="relative">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email address</label>
                        </div>
                        <p v-if="error_email" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                    </div>
    
                    <div class="mb-4">
                        <div class="relative">
                            <input type="tel" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone number</label>
                        </div>
                        <p v-if="error_phone" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                    </div>
                    <div class="flex my-10">
                        <div class="mr-4">
                            <label for="underline_select" class="sr-only">Underline select</label>
                            <select id="underline_select" class="block w-full text-sm text-gray-500 bg-transparent rounded-lg border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 bg-gray-200 peer">  
                                <option selected class="hidden">Gender</option>
                                <option value="M">man</option>
                                <option value="W">woman</option>
                            </select>
                        </div>
                        <!-- date select -->
                        <div class="relative max-w-sm grow">
                            <input type="date" class="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="mm/dd/yyyy">
                        </div>
                        <!-- end date select -->
                    </div>
    
                    <div class="mb-4">     
                        <div class="relative">
                            <input type="password" v-model="Password" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Create password</label>
                        </div>
                        <div v-if="Password">
                            <p v-if="error_minimun" id="outlined_error_help" class="mt-2 text-xs text-red-600">Password must contain a minimum of 8 characters</p>
                            <p v-if="error_symbol" id="outlined_error_help" class="mt-2 text-xs text-red-600">Password must contain at least one symbol e.g. @, !</p>
                        </div>
                    </div>
    
                    <div class="mb-4">     
                        <div class="relative">
                            <input type="password" v-model="realPassword" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm password</label>
                        </div>
                        <p v-if="error_realPassword" id="outlined_error_help" class="mt-2 text-xs text-red-600">No match the password.</p>    
                    </div>
    
                    <button type="submit" class="btn btn-info w-full text-white bg-[#2674B4] text-3xl">
                        NEXT
                    </button>
                </form>
                
                <p class="mt-4 text-xs">Already a user? <nuxt-link to="login" class="text-[#2674B4]">Login</nuxt-link> </p>
            </div>
        </div>

        <div class="hidden basis-1/2 md:flex items-center md:visible">
            <img src="../assets/css/images/backgroundResgister.png" alt="" class="max-h-screen w-full">
        </div>
    </div>
</template>

<style scoped>
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

#intro{
    animation-name: intro;
    animation-duration: 1s;
}

@keyframes intro{
    0% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(0);
  }
}


</style>