export function ProductsIndex(props) {
  console.log(props.products)
  
  return (
    <div>
      <p>Hello from photos index</p>
      {props.products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
        ))}
    </div>
  )
}


  // accept props from content
  // show those props using a .map to the user