import { useContext } from "react";
import { editProductContext } from "../../context/editProductContext";
import editSvg from "../../assets/edit_note_FILL0_wght400_GRAD0_opsz24.svg";
import "./editProduct.css";
import { product } from "../../types/product";

const EditProduct = (props: product) => {
  const {setIsEditing, setProductShape} = useContext(editProductContext);

  function handleIsEditing(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();

    setIsEditing(true);
    setProductShape(props);
  }

  return (
    <div className="editWrapper" onClick={(e) => handleIsEditing(e)}>
      <img src={editSvg} alt="" />
    </div>
  )
}

export default EditProduct;
