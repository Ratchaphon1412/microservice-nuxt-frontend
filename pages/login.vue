<script setup lang="ts">
let error_email = false;
let error_password = false;
</script>

<template>
    <div class="md:flex">
        <div class="md:basis-1/2 bg-white">
            <div class="h-screen flex flex-col justify-center items-center" id="intro">
                <p class="text-black text-3xl font-semibold tracking-wide mb-4">
                    YOUR ACCOUNT FOR
                    <br> 
                    EVERYTHING MINNY.
                </p>
    
                <p class="text-xs mb-16 font-semibold tracking-wide"> Welcome back! </p>
                <form action="" class="w-[60%]" @submit.prevent="">
                    <div class="mb-4">     
                        <div class="relative">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                        <p v-if="error_email" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                    </div>
    
                    <div class="mb-4">
                        <div class="relative">
                            <input type="password" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">password</label>
                        </div>
                        <p v-if="error_password" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                    </div>
                    
                    <div class="flex items-center justify-between my-10">
                        <div>
                            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 ">
                            <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Remember me</label>
                        </div>
    
                        <nuxt-link to="forget" class="text-black hover:underline">
                            Forgot password
                        </nuxt-link>
                    </div>
                    <button type="submit" class="btn btn-info w-full text-white bg-[#2674B4] text-3xl">
                        Sign in
                    </button>
                </form>
    
                <p class="mt-4">Don't have an account? <nuxt-link to="register" class="text-[#2674B4]">Sign up for free!</nuxt-link> </p>
            </div>
        </div>

        <div class="hidden basis-1/2 md:flex items-center md:visible">
            <img src="../assets/css/images/backgroundImage.png" alt="" class="max-h-screen w-full">
        </div>
    </div>
</template>

<style scoped>
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