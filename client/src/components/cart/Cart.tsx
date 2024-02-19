import { useContext, useEffect, useState } from "react";
import { globalContext } from "../../context/globalContext";
import { url } from "../../config/url";
import { UserProduct } from "../../types/product";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItens, buyProducts } = useContext(globalContext);
  const [cart, setCart] = useState<UserProduct[]>([]);
  const [buyAction, setBuyAction] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCartItems() {
      const allItems: Promise<Response>[] = [];
      cartItens.forEach((itemId) => {
        allItems.push(fetch(url.backend + "ml/product/item/" + itemId));
      });
      const consultItems = await Promise.all(allItems);
      const items = await Promise.all(consultItems.map((item) => item.json()));
      const reducedItems = items.reduce((acc, curr) => {
        return [...acc, curr.product];
      }, []);

      setCart(reducedItems);
    }

    fetchCartItems();
  }, []);

  const calcTotalValue = () => {
    return Math.abs(
      buyProducts.reduce((total, product) => {
        return total + product.quantity * product.price;
      }, 0)
    )
      .toFixed(2)
      .replace(".", ",");
  };

  const cancelBuy = () => {
    setBuyAction(false);
  };

  const activeBuy = () => {
    setBuyAction(true);
  };

  const efetuarCompra = async () => {
    const filterProducts = buyProducts.filter((product) => product.quantity > 0);

    await fetch(url.backend + "acquiredProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: "userManu",
        products: filterProducts.map((product) => ({
          name: product.name,
          quantity: product.quantity,
          price: product.price,
          id: product.id,
        })),
      }),
    });

    navigate("/confirmBuy");
  };

  return (
    <div className="cart">
      <div className="calcTotalPrice">
        <h3>R$ {calcTotalValue()}</h3>
      </div>

      <div className="confirm">
        <button
          className="confirmBuyBtn"
          disabled={!cartItens.length}
          onClick={activeBuy}
        >
          CONFIRMAR COMPRA
        </button>
      </div>

      {cart.length ? (
        cart.map((item, i) => {
          return (
            <CartItem
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              key={i}
              id={item.id}
            />
          );
        })
      ) : (
        <div className="cart">Você ainda não adicionou nenhum item no carrinho.</div>
      )}

      {buyAction ? (
        <div className="modalContainer">
          <div className="confirmBuyContainer">
            <h1>Deseja confirmar suas compras no valor de R$ {calcTotalValue()}?</h1>

            <div>
              <button onClick={cancelBuy}>CANCELAR</button>
              <button className="confirmBuyBtn" onClick={efetuarCompra}>
                CONFIRMAR COMPRA
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
