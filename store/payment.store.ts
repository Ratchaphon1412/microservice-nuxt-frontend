

export const apiPayment = defineStore('apiPayment',() => {

    let credits = ref([]);
    const URL = "http://microservice.payment.ratchaphon1412.co"
    
    function get(){
        return credits.value;
    }

    async function addCredit(nameIn:string,numberIn:string,expiration_monthIn:string,expiration_yearIn:string,cityIn:string,postalIn:string,securityIn:string,){
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
        console.log(data)
        }
    }

    function paymentProduct(amout:number,card_token:string,customer_token:string){
        
        console.log(amout,card_token)
    
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


    return { credits ,get, addCredit, count, updateCredit, remove, paymentProduct }
},{
    persist: true
})