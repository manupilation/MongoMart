import { useContext } from "react";
// import data from "../../db/data.json";
import { product } from "../../types/product";
import Product from "../product/Product";
import "./ProductList.css";
import { globalContext } from "../../context/globalContext";

const ProductList = () => {
  const {products} = useContext(globalContext);

  if(products)
  return (
    <div className="productListWrapper">
      {/* {
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
      } */}

      {
          products.map(
          ({ date,id, image, name, price, discountRate }: product, i: number) => 
            <Product
            date={date}
            id={id}
            key={i}
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

