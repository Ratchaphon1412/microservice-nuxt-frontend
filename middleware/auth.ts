import { authStore } from "@/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {

    const { authorize } = authStore()

    if (!authorize()) {
        return navigateTo("/auth/login")
       
    }

  

})
