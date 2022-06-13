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
    const containerImg = document.querySelector(".url-image");
    const url = URL.createObjectURL(e.target.files[0]);
	containerImg.src= url;
})

textDescriptionProduct.addEventListener("blur",(input)=>{
    validity(input.target)
})