import baseFetch from "../composables/baseFetch"

export const apiStore = defineStore('apiStore',() => {
    let keep = ref({});

    async function get(index:string){
        return await baseFetch(index)
    }

    async function getAll(){
        const URL = useRuntimeConfig().public.URL_ENDPOINT
        return await baseFetch(URL)
    }

    return { keep, getAll, get }
})