import React from "react";
import axios from "axios";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

class ProductsApi extends React.Component {
  state = {
    products: [],
    skip: 0,
    drpCategories: [],
    categoryValue: "Select Category",
  };

  async componentDidMount() {
    debugger;
    let skipCount = this.state.skip;
    await axios
      .get("https://dummyjson.com/products?limit=10&skip=" + skipCount)
      .then((response) => this.setState({ products: response.data.products }));

    await axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => this.setState({ drpCategories: response.data }));

    console.log(this.state.products);
  }

  buyProduct = (product) => {
    debugger;
    console.log(product);
  };

  updateProducts = () => {
    //const previousProducts = this.state.products;
    /*const navigate = useNavigate();
    navigate('/sign-up');*/
    const newProducts = [];
    let skipCount = this.state.skip + 10;
    let oldProducts = this.state.products;
    let fetchProductUrl =
      "https://dummyjson.com/products?limit=10&skip=" + skipCount;
    axios.get(fetchProductUrl).then((response) => {
      debugger;
      let newPro = response.data.products;
      newProducts.push(...newPro);

      this.setState({
        products: [...oldProducts, ...newProducts],
        skip: skipCount,
      });
    });
  };

  handleCategoryChanged = (e) => {
    debugger;
    console.log(e.target.value);
    /*this.setState({
      categoryValue : e.target.value
    })*/
    let fetchProductUrl =
      "https://dummyjson.com/products/category/" + e.target.value;
    //setFruit(e.target.value)
    axios.get(fetchProductUrl).then((response) => {
      debugger;
      this.setState({
        products: response.data.products,
        skipCount: 0,
        categoryValue: e.target.value,
      });
    });
  };

  render() {
    let products = null;
    const dropdownStyle = {
      padding: "10px",
      borderRadius: "5px",
      color: "white",
      background: "#007bff",
    };
    products = this.state.products.map((product, index) => {
      return (
        <Products
          key={index}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          stock={product.stock}
          brand={product.brand}
          category={product.category}
          thumbnail={product.thumbnail}
          buyProduct={() => {
            this.buyProduct(product);
          }}
        />
      );
    });

    return (
      <div>
        <span className="me-4">
          Products Count : {this.state.products.length}{" "}
        </span>
        <button
          type="button"
          className="btn btn-primary mt-3 mb-3 me-3"
          onClick={this.updateProducts}
        >
          Update Records
        </button>
        <span className="me-4">Filter Category</span>
        <select style={dropdownStyle} onChange={this.handleCategoryChanged}>
          <option value={this.state.categoryValue}>Select Category</option>
          {this.state.drpCategories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <div className="row">
          <div className="col-sm-12 main_content">
            <div className="table-wrap">
              <table className="table">
                <thead className="thead-primary">
                  <tr>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Brand</th>
                    <th>In Stock</th>
                    <th>Category</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                {products}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsApi;
