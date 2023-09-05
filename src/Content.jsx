import { useState } from "react"
import { ProductsIndex } from './ProductsIndex'

export function Content() {
  const [products, setProducts] = useState([
    {
      "id": 8,
      "name": "water bottleeeeee",
      "price": "10.0",
      "description": "holds water",
      "is_discounted?": true,
      "tax": "0.9",
      "total": "10.9",
      "supplier": null,
      "images": [],
      "categories": []
    },
    {
      "id": 9,
      "name": "sunglasses",
      "price": "10.0",
      "description": "holds water",
      "is_discounted?": true,
      "tax": "0.9",
      "total": "10.9",
      "supplier": null,
      "images": [],
      "categories": [
        {
          "id": 1,
          "name": "beach",
          "created_at": "2023-08-11T16:25:09.370Z",
          "updated_at": "2023-08-11T16:25:09.370Z"
        },
        {
          "id": 3,
          "name": "home",
          "created_at": "2023-08-11T16:25:57.468Z",
          "updated_at": "2023-08-11T16:25:57.468Z"
        }
      ]
    }
  ])
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} />
    </div>
  )
}

// make a react variable
// make a web request to rails (in a function) to get the right data
// call the function to make the web request
// reassign the variable to the data that comes back from rails
// pass that data into productsIndex to render that data