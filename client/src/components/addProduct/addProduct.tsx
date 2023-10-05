import { useContext } from "react";
import "./addProduct.css";
import { globalContext } from "../../context/globalContext";

const AddProduct = () => {
  const {setIsCreating} = useContext(globalContext);

  function handleIsCreating(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    setIsCreating(true);
  }

  return (
    <div className="addButtonWrapper">
      <button 
        type="button" 
        className="addButton"
        onClick={(e) => handleIsCreating(e)}
      >+</button>
    </div>
  )
}

export default AddProduct;
