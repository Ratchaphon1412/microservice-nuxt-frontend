
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