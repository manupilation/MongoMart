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
  
      return Math.abs(discountRate).toFixed(2);
    }
  }

  function handleClickProduct() {
    return navigate(`/product/${id}`);
  };

  function calcTitleLength(title: string | undefined) {
    if(title)
    return title.length > 35 ? title.substring(0, 35) + "..." : title;
  }
  
  return (
    <div className={`userProduct`} onClick={() => handleClickProduct()}>
      <div className="portata">
        <img src={thumbnail} alt="Product" />
      </div>

      <section className="productPriceSection">
        <h5 className="productTitle">{calcTitleLength(title)}</h5>  
        {original_price && <p className="productOriginalPrice">{`R$${original_price?.toFixed(2).replace(".", ",")}`}</p>}
        <div>
          <h3 className="price">{`R$ ${price}`}</h3>
          <h5 className="discountRate">{price && original_price  ? `${calcDiscountRate()}% OFF` : null}</h5>
          <h5>
            {
              installments 
              ? `em ${installments.quantity} vezes de R$ ${installments.amount} ${!installments.rate ? "sem juros" : ""}` 
              : null}</h5>
        </div>

        <div>
          {shipping?.free_shipping ? <p>Frete grátis</p> : null}
        </div>
      </section>

    </div>
  );
}

export default UserProduct;
