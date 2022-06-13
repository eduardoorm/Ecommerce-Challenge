import { createProduct } from "../controllers/product.controller.js";

const containerProducts = document.querySelector("[data-product]");
const listProducts =()=> fetch(" http://localhost:3000/products").then((response)=>response.json());

listProducts(). 
    then((data)=>{
        data.forEach(({name,category,price,id,drescription})=>{
            const newProduct= createProduct(name,category,price,id,drescription);
            containerProducts.appendChild(newProduct)
        })
    })
    .catch((error)=> console.log(error))

const newProduct = (category,name,price,description)=>{
    return fetch("http://localhost:3000/products",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({category,name,price,id:uuid.v4(),description})
    })
}



const deleteProduct = (id)=>{
    return fetch(`http://localhost:3000/products/${id}`,{
        method:"DELETE",
    })
}

const detailProduct = (id) =>{
    return fetch(`http://localhost:3000/products/${id}`).then(response=> response.json())
}

const updateProduct = (category,name,price,description,id) =>{
    console.log("entra aquí");
    return fetch(`http://localhost:3000/products/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({category,name,price,description})
    })
      .then((response)=>response)
      .catch((err)=>console.log(err))
}

export const productServices ={
    listProducts,
    newProduct,
    deleteProduct,
    detailProduct,
    updateProduct
}