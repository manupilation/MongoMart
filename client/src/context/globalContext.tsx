import React, { createContext, ReactNode, useState } from "react";
import { product, UserProduct } from "../types/product";

type GlobalContextTypes = {
  products: product[],
  userProducts: UserProduct[],
  isCreating: boolean,
  isEditing: boolean,
  isUser: boolean,
  setProducts: React.Dispatch<React.SetStateAction<product[]>>,
  setUserProducts: React.Dispatch<React.SetStateAction<UserProduct[]>>,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>,
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>,
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

  const globalValue = {
    products,
    isEditing,
    isCreating,
    isUser,
    userProducts,
    setProducts,
    setIsCreating,
    setIsEditing,
    setIsUser,
    setUserProducts,
  }

  return (
    <globalContext.Provider value={globalValue}>
      {props.children}
    </globalContext.Provider>
  )
}

export default GlobalContext;
