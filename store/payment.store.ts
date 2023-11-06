import { defineStore } from 'pinia'

export const apiPayment = defineStore('apiPayment',() => {
    let credits = ref([]);
    
    function get(){
        return credits.value;
    }

    function addCredit(credit:object){
        credits.value.push(credit);
    }

    function paymentProduct(amout:number,card_token:string,customer_token:string){
        
        console.log(amout,card_token)
    
    }


    return { get, addCredit , paymentProduct }


})