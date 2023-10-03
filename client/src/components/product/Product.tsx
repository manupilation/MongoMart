import { product } from "../../types/product";
import EditProduct from "../editProduct/editProduct";
import "./Product.css";

const Product = (props: product) => {
  const {discountRate, image, name, price} = props;

  function calcPrice() {

    if(discountRate) {
      return (price - ((discountRate / 100) * price)).toFixed(2).replace(".", ",");
    }

    return price;
  }

  return (
    <div className={`productWrapper ${discountRate ? "withDiscount" : ""}`}>
      <div className="productImage">
        <img src={image} alt="Product" />
      </div>

      <section className="productPriceSection">
        {discountRate && <p className="productOriginalPrice">{`$${price.toFixed(2).replace(".", ",")}`}</p>}
        <div>
          <h3 className="price">{`R$ ${calcPrice()}`}</h3>
          <h5 className="discountRate">{discountRate ? `${discountRate}% OFF` : null}</h5>
        </div>
      </section>

      <h5>{name}</h5>

      <EditProduct {...props}/>
    </div>
  );
}

export default Product;
