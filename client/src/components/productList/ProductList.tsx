import data from "../../db/data.json";
import { product } from "../../types/product";
import Product from "../product/Product";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="productListWrapper">
      {
        new Array(...data).map(
          ({ date,id, image, name, price, discountRate }: product) => 
            <Product 
            date={date}
            id={id}
            key={id}
            name={name}
            price={price}
            discountRate={discountRate} 
            image={image}/>
          )
      }
    </div>
  );
}

export default ProductList;

