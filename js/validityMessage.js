export function validityMessage(input){
    const value = input.value;
    let message = "";
    if(value.length>120){
        message = "El máximo de carácteres es 120"
    }
    input.setCustomValidity(message)
}
