import { validity } from "./validity.js";

const inputFile = document.querySelector(".input-file");
const textDescriptionProduct = document.querySelector("#descriptionProduct");
const inputLogin = document.querySelectorAll(".container__forms__input");
inputLogin.forEach(input=>{
    input.addEventListener("blur",(input)=>{
        validity(input.target);
    })
})

inputFile.addEventListener("change",(e)=>{
    const containerUrlImg = document.querySelector(".url-file");
    let urlImg = inputFile.files[0].name;
    containerUrlImg.textContent= urlImg;
})

textDescriptionProduct.addEventListener("blur",(input)=>{
    validity(input.target)
})