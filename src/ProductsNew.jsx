import {useEffect, useState} from "react"
import axios from "axios"

export function ProductsNew() {
  const [suppliers, setSuppliers] = useState([])
  const [images, setImages] = useState(["", ""])

  const handleSubmit = (event) => {
    event.preventDefault();    
    const params = new FormData(event.target);
    axios
      .post("/products.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })      
  };

  const getSuppliers = () => {
    axios.get('/suppliers.json').then(response => {
      console.log(response.data)
      setSuppliers(response.data)
    })
  }

  useEffect(getSuppliers, [])

  
  return (
    <div>
      <form onSubmit={handleSubmit}>      
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          price: <input name="price" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        Images: 
        {images.map(image => (
          <div>

            <input type="text" name="images[]" />
          </div>
          
        ))}
        
        <div>
          {/* supplier_id: <input name="supplier_id" type="text" /> */}
          <select name="supplier_id">
            {suppliers.map(supplier => (
              <option value={supplier.id}>{supplier.name}</option>
            ))}
            
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}