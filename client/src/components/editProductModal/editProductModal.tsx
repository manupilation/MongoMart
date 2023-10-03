import { useContext } from "react";
import EditProductForm from "../editProductForm/editProductForm";
import { editProductContext } from "../../context/editProductContext";

const EditProductModal = () => {
  const { isEditing } = useContext(editProductContext);

  if (isEditing)
  return (
    <div className="modalContainer">
      <div className="modalFormWrapper gr">
        <h3>Edite as informações do produto:</h3>
        <EditProductForm />

      </div>
    </div>
  );
}

export default EditProductModal;
