import { validity } from "./js/validity.js";
const inputName = document.querySelector("#name");
const textMessage = document.querySelector('#inputMessage');
textMessage.addEventListener("blur",(input)=>{
    validity(input.target)
})

inputName.addEventListener("blur",(input)=>{
    validity(input.target)
})

const search = document.querySelector("[data-search]");
search.addEventListener("submit",(e)=>{
    window.location =`index.html?id=${search.value}`
    const url = new URL (window.location);
    const id = url.searchParams.get("id");  
})
console.log(search);