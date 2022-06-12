import { validityEmail } from "./validityEmail.js"
import { validityMessage } from "./validityMessage.js"
import { validityName } from "./validityName.js"

export const validators ={
    name : (input)=>validityName(input),
    message: (input) => validityMessage(input),
    email:(input)=>input,
    password: (input)=>input,
}
