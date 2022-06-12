const inputName = document.querySelector("#name");
const textMessage = document.querySelector('#inputMessage');

textMessage.addEventListener("blur",(input)=>{
    validity(input.target)
    console.log("click");
})

inputName.addEventListener("blur",(input)=>{
    validity(input.target)
})

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
        input.parentElement.querySelector(".input-message-error").innerText= showMessageError(typeOfInput,input); 
    }
}

const typeOfErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const messageError = {
    name:{
        valueMissing: "Este campo no puede estar vacío"
    },
    message:{
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debe tener menos de 200 caracteres"
        // typeMismatch:"El correo no es valido" para email
        // patternMismatch: "Al menos 6 caracteres ..." contraseña
        //customError: "Debe tener menos de 200 caracteres"
    }
}

const validators ={
    name : (input)=>validityName(input),
    message : (input)=>validityMessage(input)
}

function showMessageError(typeOfInput,input){
    let message = "";
    typeOfErrors.forEach(error=>{
        if(input.validity[error]){
            message = messageError[typeOfInput][error];
        }
    })
    return message
}

function validityMessage(input){
    const value = input.value;
    let message = "";
    if(value.length>120){
        message = "El máximo de carácteres es 120"
    }
    input.setCustomValidity(message)
}

function validityName(input){
    const value = input.value;
    let message = ""
    if(!(value.length<40)){
        message="Debe tener menos de 40 caractéres"
    }
    input.setCustomValidity(message);
}