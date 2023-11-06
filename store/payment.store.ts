

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


    return { credits ,get, addCredit, count, updateCredit, remove }
},{
    persist: true
})