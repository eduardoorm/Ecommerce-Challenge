export const validityNameProduct=(input)=>{
    const value = input.value;
    let message =""
    if(value.length>20){
        message="No puede tener más de 20 caracteres"
    }
    input.setCustomValidity(message)

}