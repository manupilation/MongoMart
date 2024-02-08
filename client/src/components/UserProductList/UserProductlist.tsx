import { useContext } from "react";
import { globalContext } from "../../context/globalContext";
// import data from "../../db/product.json";
import UserProduct from "../UserProduct/UserProduct";

const UserProductList = () => {
  const {userProducts} = useContext(globalContext);

  return (
    <div className="productListWrapper">
      {
        userProducts.length && userProducts.map(
          ({ id, thumbnail, title, price, shipping, original_price, installments }, i) => 
            <UserProduct
            shipping={shipping}
            thumbnail={thumbnail}
            id={id}
            key={i}
            title={title}
            price={price}
            installments={installments}
            original_price={original_price} />
        )
      }
    </div>
  );
}

export default UserProductList;

