import { useContext } from "react";
import "./addProduct.css";
import { globalContext } from "../../context/globalContext";

const AddProduct = () => {
  const {setIsCreating} = useContext(globalContext);

  function handleIsEditing(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    setIsCreating(true);
  }

  return (
    <div className="addButtonWrapper">
      <button 
        type="button" 
        className="addButton"
        onClick={(e) => handleIsEditing(e)}
      >+</button>
    </div>
  )
}

export default AddProduct;
