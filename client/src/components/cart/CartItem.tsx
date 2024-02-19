import { useContext, useEffect, useState } from 'react';
import { UserProduct } from '../../types/product';
import { globalContext } from '../../context/globalContext';
import './Cart.css';

const CartItem = (props: Partial<UserProduct>) => {
  const { setBuyProducts, buyProducts } = useContext(globalContext);
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

  useEffect(() => {
    if (id && title && price) {
      const newProduct = {
        id,
        name: title,
        price,
        quantity,
      };

      const existingProductIndex = buyProducts.findIndex(product => product.id === id);

      if (existingProductIndex !== -1) {
        const updatedProducts = [...buyProducts];
        updatedProducts[existingProductIndex].quantity = quantity;
        setBuyProducts(updatedProducts);
      } else {
        setBuyProducts(prevProducts => [...prevProducts, newProduct]);
      }
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
    </div>
  );
};

export default CartItem;
