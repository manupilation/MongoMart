import React, { createContext, ReactNode, useState } from "react";
import { product } from "../types/product";

type GlobalContextTypes = {
  products: product[],
  isCreating: boolean,
  isEditing: boolean,
  setProducts: React.Dispatch<React.SetStateAction<product[]>>,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>,
}

type GlobalProps = {
  children: ReactNode,
}

export const globalContext = createContext<GlobalContextTypes>(null!);

const GlobalContext = (props: GlobalProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [products, setProducts] = useState<product[]>([]);

  const globalValue = {
    products,
    isEditing,
    isCreating,
    setProducts,
    setIsCreating,
    setIsEditing,
  }

  return (
    <globalContext.Provider value={globalValue}>
      {props.children}
    </globalContext.Provider>
  )
}

export default GlobalContext;
