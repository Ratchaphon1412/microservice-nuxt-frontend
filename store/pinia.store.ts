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

export const apiCountry = defineStore('apiProvince', () => {
    
    async function getProvince(){
        return await useFetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json")
    }

    async function getDistrict(){
        return await useFetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json")
    }
    
    async function getSubdistrict(){
        return await useFetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json")
    }
    
    return { getProvince ,getDistrict, getSubdistrict }
})