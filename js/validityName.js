export function validityName(input){
    const value = input.value;
    let message = ""
    if(!(value.length<40)){
        message="Debe tener menos de 40 caractéres"
    }
    input.setCustomValidity(message);
}