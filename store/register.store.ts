import { defineStore } from 'pinia'

export const useMyRegister = defineStore('registerStore', () =>{
  // register
  let usernameStore = ref('')
  let fullnameStore = ref('')
  let phoneStore = ref('')
  let genderStore = ref('')
  let emailStore = ref('')
  let passwordStore = ref('')
  
  // address
  let provinceStore = ref('')
  let DistrictStore = ref('')
  let SubDistrictStore = ref('')
  let postalCodeStore = ref('')
  let addressStore = ref('')

  function registerStore(username:string,fullname:string,phone:string,gender:string,email:string,password:string,){
    usernameStore.value = username;
    fullnameStore.value = fullname;
    phoneStore.value = phone;
    genderStore.value = gender;
    emailStore.value = email;
    passwordStore.value = password;

  }
  function clearRegisterStore(){
    usernameStore.value = '';
    fullnameStore.value = '';
    phoneStore.value = '';
    genderStore.value = '';
    emailStore.value = '';
    passwordStore.value = '';
  }

  function getUsername(){
    return usernameStore.value
  }
  function getFullname(){
    return fullnameStore.value
  }
  function getPhone(){
    return phoneStore.value
  }
  function getGender(){
    return genderStore.value
  }
  function getEmail(){
    return emailStore.value
  }
  function getPassword(){
    return passwordStore.value
  }

  return {registerStore , clearRegisterStore
    ,getUsername ,getFullname ,getPhone ,getGender ,getEmail ,getPassword
    ,usernameStore,fullnameStore,phoneStore,genderStore,emailStore,passwordStore 
    ,provinceStore ,DistrictStore ,SubDistrictStore ,postalCodeStore ,addressStore}
},{
  persist: true
})
