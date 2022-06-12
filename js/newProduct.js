const inputFile = document.querySelector(".input-file");
const textDescriptionProduct = document.querySelector("#descriptionProduct");

inputFile.addEventListener("change",(e)=>{
    const containerUrlImg = document.querySelector(".url-file");
    let urlImg = inputFile.files[0].name;
    containerUrlImg.textContent= urlImg;
})
textDescriptionProduct.addEventListener("blur",(input)=>{
    validity(input.target)
})