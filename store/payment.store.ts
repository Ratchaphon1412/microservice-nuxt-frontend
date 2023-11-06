import { defineStore } from 'pinia'

export const apiPayment = defineStore('apiPayment',() => {
    let credits = ref([]);
    
    function get(){
        return credits.value;
    }

    function addCredit(credit:object){
        credits.value.push(credit);
    }


    return { get, addCredit }
})