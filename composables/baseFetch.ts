type Headers = {
  [key: string] :string
}

export default async function<T>(path:string ,options?:any){
    const config = useRuntimeConfig()

    const headers : Headers = {
        "Accept": "application/json",
      }
      // if (isLogin()) {
      //   headers["Authorization"] = `Bearer ${getAccessToken()}`
      // }
         return await useFetch<T>(path,{
            ...options,
            baseURL: config.public.kongApi,
            headers:{
               ...headers,
               ...options?.headers
            },  
        })
}