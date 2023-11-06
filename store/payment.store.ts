

export const apiPayment = defineStore('apiPayment',() => {

    let credits = ref([]);
    
    function get(){
        return credits.value;
    }

    async function addCredit(nameIn:string,numberIn:string,expiration_monthIn:string,expiration_yearIn:string,cityIn:string,postalIn:string,securityIn:string){
        let credit = {
            name: nameIn,
            number: numberIn,
            expiration_month:expiration_monthIn,
            expiration_year:expiration_yearIn,
            city:cityIn,
            postal_code:postalIn,
            security:securityIn
        }
        const {data} = await paymentFetch("/api/v1/payment/customer/card/",{
            method: "POST",
            body: JSON.stringify(credit),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            if(data.value != null){
                credits.value.push(credit);
                navigateTo("/setting/payment/creditCard")
            }
        }

    function paymentProduct(amout:number,card_token:string,customer_token:string){
        
        console.log(amout,card_token)
    
    }
    function count(){
        return credits.value.length;
    }

    function updateCredit(item:any){
        
    }



    return { get, addCredit , paymentProduct , credits }
},{
    persist: true
})