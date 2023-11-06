// type Headers = {
//   [key: string] :string
// }

// export default async function<T>(path:string ,options?:any){
//     const config = useRuntimeConfig()

//     const headers : Headers = {
//         "Accept": "application/json",
//       }
//       if (isLogin()) {
//         headers["Authorization"] = `Bearer ${getAccessToken()}`
//       }
//          return await useFetch<T>(path,{
//             ...options,
//             baseURL: config.public.kongApi,
//             headers:{
//                ...headers,
//                ...options?.headers
//             },  
//         })
// }
export default async function<T>(path:string ,options?:{}){
   const config = useRuntimeConfig()
   return await useFetch(path,{
       ...options,
       baseURL: config.public.apiBaseURL,
       // baseURL: config.public.URL_ENDPOINT,
       headers:{
           "Accept": "application/json",
       }
   })
}