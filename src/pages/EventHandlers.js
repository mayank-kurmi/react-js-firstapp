import React from "react";
import Products from "./Products";



class EventHandlers extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 main_content">

          <Products id="1" title="iPhone X" description="Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip" price="899" rating="4.69" stock="56" brand="Apple" category="smartphones" thumbnail="https://i.dummyjson.com/data/products/2/1.jpg"/>

          <Products id="2" title="Samsung Universe 9" description="Samsung's new variant which goes beyond Galaxy to the Universe" price="749" rating="4.23" stock="87" brand="Samsung" category="smartphones" thumbnail="https://i.dummyjson.com/data/products/3/thumbnail.jpg"/>

          <Products id="3" title="Huawei P30" description="Huawei re-badged P30 Pro New Edition was officially unveiled " price="699" rating="4.09" stock="65" brand="Huawei" category="smartphones" thumbnail="https://i.dummyjson.com/data/products/5/thumbnail.jpg"/>

        </div>
      </div>
    );
  }
}

export default EventHandlers;
