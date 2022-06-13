import { productServices } from "../services/product-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nameCategory = document.querySelector("[data-category]").value
    const nameProduct = document.querySelector("[data-product]").value
    const priceProduct = document.querySelector("[data-price]").value
    const descripProduct = document.querySelector("[data-description]").value
    const nameMayus =nameProduct[0].toUpperCase() + nameCategory.substring(1);
    productServices.newProduct(nameCategory,nameMayus,priceProduct,descripProduct).then(()=>{
        window.location.href="/products.html"
    }).catch(error=>console.log(error))
    
})
