import React from "react";
import "../css/style.css";

const Products = (props) => {
  return (
    <tbody>
      <tr className="alert" role="alert">
        {/* <td>1</td> */}
        <td>
          <div>
            <img alt="description" className="img" src={props.thumbnail} />
          </div>
        </td>
        <td>
          <div className="email">
            <span>{props.title}</span>
            <span>{props.description}</span>
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
  );
};

export default Products;
