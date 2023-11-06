

export const apiPayment = defineStore('apiPayment',() => {

    let credits = ref([]);
    const URL = "http://microservice.payment.ratchaphon1412.co"
    
    function get(){
        return credits.value;
    }

    async function addCredit(nameIn:string,numberIn:string,expiration_monthIn:string,expiration_yearIn:string,cityIn:string,postalIn:string
        ,securityIn:string,customer_token:string){
        let credit = {
            name: nameIn,
            number: numberIn,
            expiration_month:expiration_monthIn,
            expiration_year:expiration_yearIn,
            city:cityIn,
            postal_code:postalIn,
            security_code:securityIn
        }
        const {data} = await paymentFetch(URL + "/api/v1/payment/customer/card/",{
            method: "POST",
            body: JSON.stringify(credit),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(data.value){
            console.log(data.value.token_card)
            const {addCard} = await paymentFetch(URL + "/api/v1/payment/customer/card/",{
                method: "PUT",
                body: JSON.stringify({
                    "customer_token": customer_token,
                    "card_token": data.value.token_card,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            
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