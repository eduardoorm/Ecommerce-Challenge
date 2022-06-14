import { productServices } from "../services/product-service.js";
const form = document.querySelector("[data-form]");

const getInformation = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");  
    if(id==null){
        window.location.href="/screens/error.html"
    }
    const category = document.querySelector("[data-category]");
    const name = document.querySelector("[data-product]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]")
    productServices.detailProduct(id).then(product => {
        category.value = product.category;
        name.value = product.name;
        price.value = product.price;
        description.value= product.description;
    })
};



getInformation();

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");  
    const category = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-product]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    
    productServices.updateProduct(category,name,price,description,id).then(()=>{
        window.location.href="/screens/update_success.html"
    })
})