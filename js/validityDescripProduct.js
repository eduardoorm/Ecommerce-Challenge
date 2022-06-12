export const validityDescripProduct=(input)=>{
    const value = input.value;
    let message ="";
    if(value.length>160){
        message="Máximo 160 carácteres"
    }
    input.setCustomValidity(message)
}