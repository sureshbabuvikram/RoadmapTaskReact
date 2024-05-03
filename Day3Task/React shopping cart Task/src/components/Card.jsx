import React,{useState} from 'react'

function Card({cart,setCart,product}) {
    let [outCart,setOutCart]=useState(true)
    
  return <div className="col mb-5">
  <div className="card h-100">
      {product.sale?(<><div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div></>):("")}
      <img className="card-img-top" src={product.image} alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">{product.name}</h5>
              {product.reviews?(<><div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div>
              </>):("")}
              {product.original ? (
  <div>
    <span className="text-muted text-decoration-line-through">{product.originalPrice}</span>
      {product.price}
  </div>
) : (
  product.price
)}

          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        outCart?<button className="btn btn-outline-success mt-auto" href="#" onClick={()=>{
                                            setCart(cart+1);
                                            setOutCart(false);
                                        }}>Add to Cart</button>:
                                        <button className="btn btn-outline-danger mt-auto" href="#" onClick={()=>{
                                            setCart(cart-1);
                                            setOutCart(true);
                                        }}>Remove from cart</button>
                                    }
                                </div>
                            </div>
    </div>
</div>      

}

export default Card

