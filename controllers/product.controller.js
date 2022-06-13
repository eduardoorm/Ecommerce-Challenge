import { productServices } from "../services/product-service.js";

export const createProduct = (name,category,price,id,description) =>{
    const containerItem = document.createElement("div");
    containerItem.classList.add("container__products__galery__item")
    const content = `
        <div>
            <img class="container__products__galery__item__image" 
            src="${"https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80"}">      
        </div>
        <p class="container__products__galery__item__title">${name}</p>
        <p class="container__products__galery__item__price">Precio: $${price}</p>
        <div class="container__products__galery__item__buttons">     
            <button class="btnImages-Gallery btn-delete" id=${id}><img class="" src="../images/trash.png"></button>
            <a href="../screens/edit_client.html?id=${id}">
                <button class="btnImages-Gallery btn-edit"><img class="" src="../images/edit.png"</button>
            </a>
        </div>
        `
    containerItem.innerHTML= content;
    const btn = containerItem.querySelector(".btn-delete")
    btn.addEventListener("click",()=>{
        const id = btn.id;
        productServices.deleteProduct(id).then(response=>{
            console.log(response);
        }).catch(error=>alert("ocurrio un error"))
    })
    return containerItem
}



