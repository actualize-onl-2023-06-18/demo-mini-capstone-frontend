import { useParams } from "react-router-dom";
import {useEffect, useState} from "react"
import axios from "axios"


export function ProductsShow() {
  const params = useParams();
  const [product, setProduct] = useState({})

  const handleShowProduct = () => {
    console.log('handle show product')
    axios.get(`http://localhost:3000/products/${params.id}.json`).then(response => {
      console.log(response.data);
      setProduct(response.data)
    })
  }

  const handleAddToCart =  (event) => {
    event.preventDefault()
    const params = new FormData(event.target);

    console.log('adding to cart')
    axios.post("http://localhost:3000/carted_products.json", params).then(response => {
      console.log(response.data)
      window.location.href = '/carted_products'
    })
  }

  useEffect(handleShowProduct, [])
  
  return (
    <div>
      Products Show
      <p>{product.name}</p>
      <p>id: {product.id}</p>
      <p>name: {product.name}</p>
      <p>price: {product.price}</p>
      <p>description: {product.description}</p>
      <p>is_discounted: {product.is_discounted}</p>
      <p>tax: {product.tax}</p>
      <p>total: {product.total}</p>
      <form onSubmit={handleAddToCart}>
        <div>
          quantity: <input name="quantity" type="number" />
        </div>
        <div>
          <input name="product_id" type="hidden" defaultValue={params.id} />
        </div>
     
        <button>Add to cart</button>  
      </form>
          
      
      
    </div>
  )
}