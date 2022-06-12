import { showMessageError } from "./showMessageError.js";
import { validators } from "./validators.js";

export function validity(input){
    const typeOfInput = input.dataset.tipo;
    if(validators[typeOfInput]){
        validators[typeOfInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerText=""
    }else{
        input.parentElement.classList.add("input-container--invalid")
        console.log("input",input);
        input.parentElement.querySelector(".input-message-error").innerText= showMessageError(typeOfInput,input); 
    }
}


