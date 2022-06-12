import { validity } from "./validity.js";

const inputLogin = document.querySelectorAll(".container__forms__input");
inputLogin.forEach(input=>{
    input.addEventListener("blur",(input)=>{
        validity(input.target);
    })
})
