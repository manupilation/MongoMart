import React, { createContext, ReactNode, useState } from "react";
import { product } from "../types/product";

type EditProductContextTypes = {
  productShape: product,
  isEditing: boolean,
  setProductShape: React.Dispatch<React.SetStateAction<product>>,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
}

type EditProductProps = {
  children: ReactNode,
}

export const editProductContext = createContext<EditProductContextTypes>(null!);

const EditProductContext = (props: EditProductProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [productShape, setProductShape] = useState<product>({
    id: "",
    name: "",
    price: 0,
    image: "",
    date: "",
    discountRate: 0,
  });

  const editValue = {
    productShape,
    isEditing,
    setProductShape,
    setIsEditing,
  }

  return (
    <editProductContext.Provider value={editValue}>
      {props.children}
    </editProductContext.Provider>
  )
}

export default EditProductContext;
