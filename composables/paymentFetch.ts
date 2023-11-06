type Headers = {
    [key: string] :string
  }
  export default async function<T>(path:string ,options?:any){
      const config = useRuntimeConfig()
      const {isLogin, getAccessToken} = useAuthStore()
      const headers : Headers = {
          "Accept": "application/json",
        }
        if (isLogin()) {
          headers["Authorization"] = `Bearer ${getAccessToken()}`
        }
           return await useFetch<T>(path,{
              ...options,
              baseURL: 'http://microservice.payment.ratchaphon1412.co',
              headers:{
                 ...headers,
                 ...options?.headers
              },  
          })
  }