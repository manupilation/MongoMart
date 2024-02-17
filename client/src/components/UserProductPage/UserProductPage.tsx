import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { url } from "../../config/url";
import { UserProduct } from "../../types/product";
import { globalContext } from "../../context/globalContext";

const UserProductPage = () => {
  const {id} = useParams();
  const {setCartItens, cartItens} = useContext(globalContext);
  const [userProduct, setProduct] = useState<UserProduct | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      const getProductResponse = await fetch(url.backend + `ml/product/item/${id}`);
      const {product} = await getProductResponse.json();

      setProduct(product);
    }

    fetchProduct();
  }, []);

  function addToCart() {
    if(id) {
      setCartItens((prev: string[]) => {
        const addToCart = new Set([...prev, id]);
        return [...addToCart];
      });
    }

    turnBack();
  }

  function turnBack() {
    navigate(-1);
  }

  function calcDiscountRate(price: number, original_price: number) {
    if(price && original_price) {
      const discountAmount = price - original_price;
      const discountRate = (discountAmount / original_price) * 100;

      return Math.abs(discountRate).toFixed(2);
    }
  }
  
  if(userProduct && userProduct.id)
  return (
    <div>
      <div>
        <img src={userProduct.thumbnail} alt="Product" />
      </div>
      <div>
        <h1>{userProduct.title}</h1>
        <div>
          <h3>R$ {userProduct.price}</h3>
          <h5 className="discountRate">
            {
              userProduct.price && userProduct.original_price  
              ? `${calcDiscountRate(userProduct.price, userProduct.original_price)}% OFF` 
              : null
            }
          </h5>
          <h5>
            {
              userProduct.installments 
              ? `em ${userProduct.installments.quantity} vezes de R$${userProduct.installments.amount} ${!userProduct.installments.rate ? "sem juros" : ""}` 
              : null
            }
          </h5>

          <button onClick={addToCart}>ADICIONAR AO CARRINHO</button>
        </div>
      </div>

      <a onClick={() => turnBack()}>VOLTAR</a>
    </div>
  )

  return (
    <div>Carregando...</div>
  )
}

export default UserProductPage