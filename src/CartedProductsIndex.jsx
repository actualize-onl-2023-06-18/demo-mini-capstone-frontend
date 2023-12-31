import { useEffect, useState } from "react"
import axios from "axios"

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])

  const getCartedProducts = () => {
    console.log('getting carted products')
    axios.get('/carted_products.json').then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }

  useEffect(getCartedProducts, [])

  const buy = () => {
    console.log('buy')
    axios.post("/orders.json").then(response => {
      console.log(response.data)
      window.location.href = "/carted_products"
    })
  }
  
  return (
    <div>
      Carted PRoducts index
      {cartedProducts.map(cartedProduct => (
        <div>
          <div>quantity: {cartedProduct.quantity}</div>
          <div>name: {cartedProduct.product.name}</div>
          <div>price: {cartedProduct.product.price}</div>
          < hr />
        </div>
      ))}
      <button onClick={buy}>Buy</button>
    </div>
  )
}