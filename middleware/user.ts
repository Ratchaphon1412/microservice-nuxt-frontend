import { authStore } from "@/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
    const { getRole} = authStore()


       
    if (getRole() != 'user') {
        return abortNavigation()
        } 
       
  
    
    

})
