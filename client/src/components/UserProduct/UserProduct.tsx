import { useNavigate  } from "react-router-dom";
import { UserProduct as UserProductType } from "../../types/product";
import "./UserProduct.css";

const UserProduct = (props: Partial<UserProductType>) => {
  const {price, thumbnail, title, shipping, original_price, installments, id } = props;
  const navigate = useNavigate();

  function calcDiscountRate() {
    if(price && original_price) {
      const discountAmount = price - original_price;
      const discountRate = (discountAmount / original_price) * 100;
  
      return Math.round(Math.abs(discountRate));
    }
  }

  function handleClickProduct() {
    return navigate(`/product/${id}`);
  };

  function calcTitleLength(title: string | undefined) {
    if(title)
    return title.length > 40 ? title.substring(0, 40) + "..." : title;
  }

  function clearPrice(price: number | undefined | null) {
    if(price)
    return price.toFixed(2).replace(".", ",");
  }

  function mountPrice(price: number | undefined) {
    if (price) {
      const [amount, cents] = price.toFixed(2).split(".");
      return (
        <h3 className="price">R$ {amount} <span className="cents">{cents === "00" ? cents : null}</span></h3>
      );
    }
  }
  
  return (
    <div className={`userProduct`} onClick={() => handleClickProduct()}>
      <div className="portata">
        <img src={thumbnail} alt="Product" />
      </div>

      <section className="productPriceSection">
        <h5 className="productTitle">{calcTitleLength(title)}</h5>  
        {original_price && <p className="productOriginalPrice">{`R$${clearPrice(original_price)}`}</p>}
        <div>
          <div className="currentPriceContainer">
            {mountPrice(price)}
            <h5 className="discountRate">{price && original_price  ? `${calcDiscountRate()}% OFF` : null}</h5>
          </div>
          <h5 className="promotion">
            {
              installments 
              ? `em ${installments.quantity} vezes de R$ ${clearPrice(installments.amount)} ${!installments.rate ? "sem juros" : ""}` 
              : null}</h5>
        </div>

        <div className="shipping">
          {shipping?.free_shipping ? <p>Frete grátis</p> : null}
        </div>
      </section>

    </div>
  );
}

export default UserProduct;
