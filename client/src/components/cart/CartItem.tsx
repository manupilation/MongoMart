import React from 'react'
import { UserProduct } from '../../types/product'
import "./Cart.css"

const CartItem = (props: Partial<UserProduct>) => {
  const {title, price, thumbnail} = props;
  return (
    <div className='userProduct'>
      <div className='portata'>
        <img src={thumbnail} alt="" />
      </div>
      <div className='productPriceSection'>
        <h1>{title}</h1>
        <h3>R$ {price}</h3>
      </div>
    </div>
  )
}

export default CartItem