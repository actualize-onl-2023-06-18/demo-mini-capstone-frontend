import axios from "axios"

export function ProductsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();    
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })      
  };

  
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
        <div>
          supplier_id: <input name="supplier_id" type="text" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}