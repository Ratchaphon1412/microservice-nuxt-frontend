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

export const apiCheckout = defineStore('apiCheckout', () => {
    let carts = ref([]);

    function payment():number{
        let sum = 0;
        for(let cart of carts.value){
            sum += cart.price * cart.quantity;
        }
        return sum;
    }

    function get(){
        return carts.value;
    }

    function length(){
        return carts.value.length;
    }

    function getCart(item:any){
        for(let cart of carts.value){
            if(item.name === cart.name && item.color === cart.color && item.size === cart.size && item.id === cart.id){
              return cart;
            }
        }
        return -1;
    }

    function remove(item:any){
        let arraytmp:object[] = [];
        carts.value.forEach((element, index, array) => {
            if(!(element.name === item.name && element.color === item.color && element.size === item.size && element.id === item.id)){
                arraytmp.push(element)
            }
        });
        carts.value = arraytmp;
        console.log(carts)
    }

    function add(item:any){
        console.log(item)
        carts.value.push(item);
    }

    return { carts, payment, remove, add, get, length, getCart }
},{
    persist: true
})