

export const apiPayment = defineStore('apiPayment',() => {

    let credits = ref([]);
    const URL = "http://microservice.payment.ratchaphon1412.co"
    let token_card = "";
    let listCard = ref([]);
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
            token_card = data.value.token_card
            console.log(token_card)
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
        // credits.value.push(credit);
    }

    function paymentProduct(amout:number,card_token:string,customer_token:string){
        
        console.log(amout,card_token)
    
    }

    async function getListCard(customer_token:string){
        const {data} = await paymentFetch(URL + "/api/v1/payment/customer/card/?token=" + customer_token,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(data){
            console.log(data.value)
            listCard.value = data.value
            return listCard.value
        }
    }

    function count(){
        return credits.value.length;
    }

    function updateCredit(item:any, nameIn:string,numberIn:string,expiration_monthIn:string,expiration_yearIn:string,cityIn:string,postalIn:string,securityIn:string){
        for(let credit of credits.value){
            if(item.name === credit.name && item.number === credit.number){
              item.name = nameIn;
              item.number = numberIn;
              item.expiration_month = expiration_monthIn;
              item.expiration_year = expiration_yearIn;
              item.city = cityIn;
              item.postal = postalIn;
              item.security = securityIn;
              break;
            }
        }
    }

    async function removeCard(token_card:string,customer_token:string) {
        const {data} = await paymentFetch(URL + "/api/v1/payment/customer/card/",{
            method: "DELETE",
            body: JSON.stringify({
                "customer_token": customer_token,
                "card_token": token_card,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    async function purchase(token_card:string,customer_token:string,amount:number){
        const {data,error} = await paymentFetch(URL + "/api/v1/payment/",{
            method: "POST",
            body: JSON.stringify({
                "customer_token": customer_token,
                "card_token": token_card,
                "amount": amount,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(data != null){
            console.log(data)
        }
        else{
            console.log(error)
        }


    }


    function remove(item:any){
        let arraytmp:object[] = [];
        credits.value.forEach((element) => {
            if(!(item.name === element.name && item.number === element.number)){
                arraytmp.push(element)
            }
        });
        credits.value = arraytmp;
        console.log(credits.value);
    }



    return { purchase ,listCard, removeCard ,getListCard, credits ,get, addCredit, count, updateCredit, remove, paymentProduct }
},{
    persist: true
})