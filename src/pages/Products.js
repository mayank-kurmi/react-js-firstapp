import React from "react";
import "../css/style.css";

const Products = (props) => {
  return (
    
    <div >
    <button type='button' className='btn btn-primary mt-3 mb-3 me-3' >Show Products</button>
    <button type='button' className='btn btn-primary mt-3 mb-3 me-3' >Update Records </button>
    
      <div className="row">
        <div className="col-md-12">
          {/* <h3 className="h5 mb-4 text-center">Products Details</h3> */}
          <div className="table-wrap">
            <table className="table">
              <thead className="thead-primary">
                <tr>
                  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Brand</th>
                  {/* <th>Category</th> */}
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert" role="alert">
                  {/* <td>1</td> */}
                  <td>
                    <div>
                      <img
                        alt="description"
                        className="img"
                        src={props.thumbnail}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="email">
                      <span>{props.title}</span>
                      <span>
                      {props.description}
                      </span>
                    </div>
                  </td>
                  <td>${props.price}</td>
                  <td className="quantity">
                    <div className="input-group">
                      <span>{props.rating}</span>
                    </div>
                  </td>
                  <td>{props.brand}</td>
                  {/* <td>SmartPhones</td> */}
                  <td>
                    <button type="button" className="btn btn-primary btn-sm">
                      Buy Now
                    </button>
                  </td>
                   <td>
                    <button type="button" className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
