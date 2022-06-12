import { messageError } from "./messageError.js";
import { typeOfErrors } from "./typeOfErrors.js";

export function showMessageError(typeOfInput,input){
    let message = "";
    typeOfErrors.forEach(error=>{
        if(input.validity[error]){
            message = messageError[typeOfInput][error];
        }
    })
    return message
}