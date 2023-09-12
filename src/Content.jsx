import axios from "axios";
import { useState, useEffect } from "react"
import { ProductsIndex } from './ProductsIndex'
import { CartedProductsIndex } from './CartedProductsIndex'
import { Login } from './Login'
import { Signup } from './Signup'
import { ProductsShow } from './ProductsShow'
import { LogoutLink } from './LogoutLink'
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [products, setProducts] = useState([])  

  const getProducts = () => {
    console.log('hello getting products');
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data);
      setProducts(response.data);
    })
  }

  useEffect(getProducts, [])
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Routes>
        <Route path="/products" element={<ProductsIndex products={products} />}/>
        <Route path="/products/:id" element={<ProductsShow />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/carted_products" element={<CartedProductsIndex />} />
      </Routes>
      
    </div>
  )
}

  // make a react variable
  // make a web request to rails (in a function) to get the right data
  // call the function to make the web request
// reassign the variable to the data that comes back from rails
  // pass that data into productsIndex to render that data
  // fix linter issue