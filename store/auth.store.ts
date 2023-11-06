import { defineStore } from 'pinia'


export const authStore = defineStore('authStore', () => {

  let accesstoken = ref('')
  let refreshtoken = ref('')
  let address = ref()
  let user:any = ref()
  const URL = useRuntimeConfig().public.kongApi

  async function login(email:string, password:string){
    
    const payload = {
      "email": email,
      "password": password
    }

    let { data } = await authBaseFetch(URL+"/api/v1/user/login/",{
       // 'cors' by default
      method : "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if(data.value){
      accesstoken.value = data.value.access
      refreshtoken.value = data.value.refresh
    }
    
     
    return data
    

    
  }

  function isLogin(){
    return accesstoken.value !== ""
  }

  async function refreshToken(){
    const {data} = await authBaseFetch(URL+"/api/v1/user/refresh/",{
      method: "POST",
      body: JSON.stringify({
        "refresh": refreshtoken.value
      }),
    })

    if(data.value){
      accesstoken.value = data.value.access
    }
  }

  async function addressUser(){
    const {data ,error} = await authBaseFetch(URL+"/api/v1/user/address/",{
      method: "GET",
    })
    
   
    if(data){
      address.value = data.value
      
      return data.value
    }
    
    if(error.value?.statusCode == 401){
      await refreshToken()
      const {data ,error} = await authBaseFetch(URL+"/api/v1/user/address/",{
        method: "GET",
      })
     
      if(data){
        address.value = data.value
        
        return data.value
      }
      
    }
    return []
  
  }

  
 
  async function authorize(){
    const {data} = await authBaseFetch(URL+"/api/v1/user/",{
      method: "GET",
    })

    if(data){
      user.value = data.value
      await addressUser()
      return true
    }


    return false

  }

  async function updateProfile(fullname:string,email:string,phone:string,gender:string,password:string){

     const response = await authBaseFetch(URL+"/api/v1/user/update/",{
      method: "PUT",
      body: JSON.stringify({
        "gender": gender,
        "fullname": fullname,
        "email": email,
        "phone": phone,
        "password": password
      }),
        
     })
     await authorize()
     return response

  }

  async function deleteAddress(id:number){
    await authBaseFetch(URL+"/api/v1/user/address/",{
      method: "DELETE",
      body: JSON.stringify({
        "address_id": id
      }),
    })
    await authorize()

  }

async function createAddress(fullname:string,phone:string,detail_address:string,country:string,province:string,zip_code:string ){
      const {data} = await authBaseFetch(URL+"/api/v1/user/address/",{
        method: "POST",
        body: JSON.stringify({
          "fullname": fullname,
          "phone": phone,
          "detail_address": detail_address,
          "country": country,
          "province": province,
          "zip_code": zip_code
        }),
      })
      if(data){
        address.value = data.value
        
        return data.value
      }
}

async function getAddressById(id:string){
  const {data} = await authBaseFetch(URL+"/api/v1/user/address/"+id,{
    method: "GET",
  })
  console.log(data)
  return data.value.address



}

async function updateAddress(id:string,fullname:string,phone:string,detail_address:string,country:string,province:string,zip_code:string ){
  const {data} = await authBaseFetch(URL+"/api/v1/user/address/",{
    method: "PUT",
    body: JSON.stringify({
      "address_id": id,
      "fullname": fullname,
      "phone": phone,
      "detail_address": detail_address,
      "country": country,
      "province": province,
      "zip_code": zip_code
    }),
  })
  if(data){
    address.value = data.value
    
    return data.value
  }


}

async function register(username:string,fullname:string,phone:string,gender:string,email:string,password:string){
  const {data} = await authBaseFetch(URL+"/api/v1/user/register/",{
    method: "POST",
    body: JSON.stringify({
      "username": username,
      "fullname": fullname,
      "phone": phone,
      "gender": gender,
      "email": email,
      "password": password
    }),
  })
  if(data){
    console.log(data)
    // await login(email,password)
    // await authorize()
    // updateAddress(data.value.id,fullname,phone,"","","","")
    return data.value
  }
}

async function resendEmail(email:string){
  const {data} = await authBaseFetch(URL+"/api/v1/user/re-verify/",{
    method: "POST",
    body: JSON.stringify({
      "email": email,
    }),
  })
  if(data){
    console.log(data)
  }
}

async function deleteAccount() {
  const {data} = await authBaseFetch(URL+"/api/v1/user/delete/",{
    method: "DELETE",
  })
  if(data){
    console.log(data)
  }
}

  async function verifyEmail(uid:string,token:string){
    console.log(uid,token)
    console.log(URL+"/api/v1/user/verify/" + uid + '/' + token + '/')
    const {data:message} = await authBaseFetch(URL+"/api/v1/user/verify/" + uid + '/' + token + '/',{
      method: "GET"
    })
    if(message.value !== null){
      console.log(message.value)
      navigateTo("/auth/login")
    }
  }

  function getUser(){
    return user.value
  }

  function getAddress(){
    return address.value.address
  }

  function logout(){
    accesstoken.value = ""
    refreshtoken.value = ""
    user.value = {}
    address.value = {}
  }

  function getAccessToken(){
    return accesstoken.value
  }

  function getRole(){
    return user.value.user.groups[0].name
  }


  return { register, login ,isLogin, authorize, getUser, logout ,resendEmail, deleteAccount , verifyEmail ,
    getAccessToken , refreshToken,accesstoken,user,refreshtoken 
    ,getRole,getAddress,addressUser,address ,
    updateProfile,deleteAddress,createAddress
    ,getAddressById,updateAddress
  }


},{
  persist: true,
},)
