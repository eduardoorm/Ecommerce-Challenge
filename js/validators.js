import { validityDescripProduct } from "./validityDescripProduct.js"
import { validityEmail } from "./validityEmail.js"
import { validityMessage } from "./validityMessage.js"
import { validityName } from "./validityName.js"
import { validityNameProduct } from "./validityNameProduct.js"

export const validators ={
    name : (input)=>validityName(input),
    message: (input) => validityMessage(input),
    email:(input)=>input,
    password: (input)=>input,
    nameProduct:(input)=>validityNameProduct(input),
    descriptionProduct:(input)=>validityDescripProduct(input)
}
