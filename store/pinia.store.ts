import Swal from "sweetalert2";
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
    function clear(){
        carts.value = [];
    }

    function add(item:any){
        console.log(item)
        carts.value.push(item);
    }

    // return { carts, clear, payment, remove, add, get, length, getCart }
    async function reduceStock(address_str:string) {
        const product = []
        for (let i=0; i < carts.value.length; i++) {
            product.push({
                id: carts.value[i].id,
                name: carts.value[i].name,
                price: carts.value[i].price,
                color: carts.value[i].color,
                size: carts.value[i].size,
                quantity: carts.value[i].quantity,
            })
            console.log(product)
        //     product_list.values[i].name = carts.value[i].name
        //     console.log(carts.value)
        }
        const auth = useAuthStore()
        console.log(address_str)
        const formData = reactive({
            user_id: auth.user.user.id,
            fullname: auth.user.user.fullname,
            address: address_str,
            product_list: product
        })
        console.log(formData)
        
        const { data } = await baseFetch<any>("invoice", {
            method: "POST",
            body: formData
        })
        console.log(data)
        if (data.value !== null) {
            return true;
        } else {
            
            return false;
        }
        // let user_id
        // const {data: }
    }
    return { carts, payment, remove, add, get, length, getCart, reduceStock ,clear}
},{
    persist: true
})
