import React from "react";
import Products from "./Products";

class EventHandlers extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg",
        ],
      },
    ]
  };
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary mt-3 mb-3 me-3">
          Show Products
        </button>
        <button type="button" className="btn btn-primary mt-3 mb-3 me-3">
          Update Records{" "}
        </button>
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
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <Products
                  id="1"
                  title="iPhone X"
                  description="Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip"
                  price="899"
                  rating="4.69"
                  stock="56"
                  brand="Apple"
                  category="smartphones"
                  thumbnail="https://i.dummyjson.com/data/products/2/1.jpg"
                />

                <Products
                  id="2"
                  title="Samsung Universe 9"
                  description="Samsung's new variant which goes beyond Galaxy to the Universe"
                  price="749"
                  rating="4.23"
                  stock="87"
                  brand="Samsung"
                  category="smartphones"
                  thumbnail="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
                />

                <Products
                  id="3"
                  title="Huawei P30"
                  description="Huawei re-badged P30 Pro New Edition was officially unveiled "
                  price="699"
                  rating="4.09"
                  stock="65"
                  brand="Huawei"
                  category="smartphones"
                  thumbnail="https://i.dummyjson.com/data/products/5/thumbnail.jpg"
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventHandlers;
