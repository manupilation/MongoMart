import { useContext, useEffect, useState } from "react";
import { globalContext } from "../../context/globalContext";
import { url } from "../../config/url";
import { UserProduct } from "../../types/product";
import CartItem from "./CartItem";
import "./Cart.css"

const Cart = () => {
  const {cartItens} = useContext(globalContext);
  const [cart, setCart] = useState<UserProduct[]>([]);
  
  useEffect(() => {
    async function fetchCartItens() {
      const allItens: Promise<Response>[] = [];
      cartItens.forEach((itemId) => {
        allItens.push(fetch(url.backend + "ml/product/item/" + itemId));
      });
      const consultItens = await Promise.all(allItens)
      const itens = await Promise.all(consultItens.map((item) => item.json()));
      const reduceItens = itens.reduce((acc, curr) => {
        return [...acc, curr.product]
      }, []);

      setCart(reduceItens);
    }    

    fetchCartItens();
  }, []);

  return (
    <div className="cart">
      {
        cart.length
        ? cart.map((item) => {
          return <CartItem
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price}
          />
        })
        : null
      }
    </div>
  );
}

export default Cart;
