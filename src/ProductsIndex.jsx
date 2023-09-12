import {useState} from "react"

export function ProductsIndex(props) {
  console.log(props.products)
  const [sortOrder, setSortOrder] = useState(1)
  const toggleSortOrder = () => {
    setSortOrder(sortOrder * -1)
  }
  
  return (
    <div>
      <p>Hello from products index</p>   
      <button onClick={toggleSortOrder}>Toggle sort order</button>   
      {[].concat(props.products)
      .sort((a, b) => parseInt(a.price, 10) > parseInt(b.price, 10) ? sortOrder : -sortOrder)
      .map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price }</p>
          <a href={`/products/${product.id}`}>Go to show page</a>
          < hr />  
        </div>
        ))}
    </div>
  )
}


  // accept props from content
  // show those props using a .map to the user