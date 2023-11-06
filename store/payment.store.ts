

export const apiPayment = defineStore('apiPayment',() => {

    let credits = ref([]);
    
    function get(){
        return credits.value;
    }

    function addCredit(nameIn:string,numberIn:string,expiration_monthIn:string,expiration_yearIn:string,cityIn:string,postalIn:string,securityIn:string){
        let credit = {
            name: nameIn,
            number: numberIn,
            expiration_month:expiration_monthIn,
            expiration_year:expiration_yearIn,
            city:cityIn,
            postal:postalIn,
            security:securityIn
        }
        credits.value.push(credit);
    }

    function paymentProduct(amout:number,card_token:string,customer_token:string){
        
        console.log(amout,card_token)
    
    }


    return { get, addCredit , paymentProduct , credits }
},{
    persist: true
})