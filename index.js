import { validity } from "./js/validity.js";
const inputName = document.querySelector("#name");
const textMessage = document.querySelector('#inputMessage');
const inputLogin = document.querySelectorAll(".container__forms__input");

inputLogin.forEach(input=>{
    input.addEventListener("blur",(input)=>{
        validity(input.target);
    })
})
textMessage.addEventListener("blur",(input)=>{
    validity(input.target)
})

inputName.addEventListener("blur",(input)=>{
    validity(input.target)
})
