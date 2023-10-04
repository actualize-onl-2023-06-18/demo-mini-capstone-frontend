import {useState} from "react"

export function ProductsIndex(props) {
  console.log(props.products)
  const [sortOrder, setSortOrder] = useState(1)
  const toggleSortOrder = () => {
    setSortOrder(sortOrder * -1)
  }
  
  return (
    <div>
      <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="..." /></div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>Shoreline</h4>
                        <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                    </div>
                </div>
            </div>
            {props.products.map(product => (
              <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                  <div class="col-lg-6"><img class="img-fluid" src={product.images.length > 0 && product.images[0].url} alt="..." /></div>
                  <div class="col-lg-6">
                      <div class="bg-black text-center h-100 project">
                          <div class="d-flex h-100">
                              <div class="project-text w-100 my-auto text-center text-lg-left">
                                  <h4 class="text-white">{product.name}</h4>
                                  <p class="mb-0 text-white-50">{product.description}.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

            ))}
        </div>
      </section>
      <p>Hello from products index</p>   
      <button onClick={toggleSortOrder}>Toggle sort order</button>   
      {[].concat(props.products)
      .sort((a, b) => parseInt(a.price, 10) > parseInt(b.price, 10) ? sortOrder : -sortOrder)
      .map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          {product.images.map(image => (
            <img src={image.url} width="50px"/>
          ))}
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