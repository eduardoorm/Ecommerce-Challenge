import { validity } from "./js/validity.js";
const inputName = document.querySelector("#name");
const textMessage = document.querySelector('#inputMessage');
textMessage.addEventListener("blur",(input)=>{
    validity(input.target)
})

inputName.addEventListener("blur",(input)=>{
    validity(input.target)
})
