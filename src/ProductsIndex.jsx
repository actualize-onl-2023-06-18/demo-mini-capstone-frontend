export function ProductsIndex(props) {
  console.log(props.products)
  
  return (
    <div>
      <p>Hello from products index</p>
      {[].concat(props.products).sort((a,b) => a.price > b.price ? 1 : -1).map(product => (
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