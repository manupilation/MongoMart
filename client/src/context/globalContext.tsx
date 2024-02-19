import React, { createContext, ReactNode, useState } from "react";
import { category, product, UserProduct, UserProductBuy } from "../types/product";

type GlobalContextTypes = {
  products: product[],
  userProducts: UserProduct[],
  isCreating: boolean,
  isEditing: boolean,
  isUser: boolean,
  categories: category[],
  cart: UserProduct[],
  cartItens: string[],
  buyProducts: UserProductBuy[],
  setProducts: React.Dispatch<React.SetStateAction<product[]>>,
  setUserProducts: React.Dispatch<React.SetStateAction<UserProduct[]>>,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>,
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>,
  setCategories: React.Dispatch<React.SetStateAction<category[]>>,
  setCart: React.Dispatch<React.SetStateAction<UserProduct[]>>,
  setCartItens: React.Dispatch<React.SetStateAction<string[]>>,
  setBuyProducts: React.Dispatch<React.SetStateAction<UserProductBuy[]>>,
}

type GlobalProps = {
  children: ReactNode,
}

export const globalContext = createContext<GlobalContextTypes>(null!);

const GlobalContext = (props: GlobalProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [products, setProducts] = useState<product[]>([]);
  const [userProducts, setUserProducts] = useState<UserProduct[]>([]);
  const [isUser, setIsUser] = useState<boolean>(true);
  const [categories, setCategories] = useState<category[]>([]);
  const [cartItens, setCartItens] = useState<string[]>([]);
  const [buyProducts, setBuyProducts] = useState<UserProductBuy[]>([]);
  const [cart, setCart] = useState<UserProduct[]>([]);

  const globalValue = {
    products,
    isEditing,
    isCreating,
    isUser,
    userProducts,
    categories,
    cart,
    cartItens,
    buyProducts,
    setProducts,
    setIsCreating,
    setIsEditing,
    setIsUser,
    setUserProducts,
    setCategories,
    setCart,
    setCartItens,
    setBuyProducts
  }

  return (
    <globalContext.Provider value={globalValue}>
      {props.children}
    </globalContext.Provider>
  )
}

export default GlobalContext;
