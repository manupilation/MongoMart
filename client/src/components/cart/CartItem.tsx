import { useContext, useEffect, useState } from 'react';
import { UserProduct } from '../../types/product';
import { globalContext } from '../../context/globalContext';
import lixeira from "../../assets/lixeira.png";
import './Cart.css';

const CartItem = (props: Partial<UserProduct>) => {
  const { setBuyProducts, setCartItens, setCart } = useContext(globalContext);
  const { title, price, thumbnail, id } = props;
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeFromCart = () => {
    setCart(prevProducts => [...prevProducts.filter(product => product.id !== id)]);
    setCartItens(prevCartItems => [...prevCartItems.filter(item => item !== id)]);
    setBuyProducts(prevProducts => [...prevProducts.filter(product => product.id !== id)]);
  };

  useEffect(() => {
    if (id && title && price) {
      const newProduct = {
        id,
        name: title,
        price,
        quantity,
      };

      setBuyProducts(prevProducts => {
        const existingProductIndex = prevProducts.findIndex(product => product.id === id);
        if (existingProductIndex !== -1) {
          const updatedProducts = [...prevProducts];
          updatedProducts[existingProductIndex].quantity = quantity;
          return updatedProducts;
        } else {
          return [...prevProducts, newProduct];
        }
      });
    }
  }, [quantity]);

  return (
    <div className='userProduct'>
      <div className='portata'>
        <img src={thumbnail} alt='' />
      </div>
      <div className='productPriceSection'>
        <h1>{title}</h1>
        <h3>R$ {price}</h3>
      </div>
      <div className='quantityControl'>
        <span onClick={decreaseQuantity} className='decrease'>{"-"}</span>
        <input type='number' value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 0)} />
        <span onClick={increaseQuantity} className='increase'>{"+"}</span>
      </div>

      <img className="remove" src={lixeira} alt="" onClick={removeFromCart}/>
    </div>
  );
};

export default CartItem;
