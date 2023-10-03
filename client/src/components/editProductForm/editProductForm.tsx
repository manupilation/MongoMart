import { useContext, useRef, useState } from "react";
import { editProductContext } from "../../context/editProductContext";
import useOutsideClickHandler from "../../hooks/UseCloseModal";
import isFormValid from "../../helper/isFormValid";
import useFetchPut from "../../hooks/UseFetchPut";

function EditProductForm() {
  const { setIsEditing, productShape } = useContext(editProductContext);
  const {name, price, discountRate, image, date, id} = productShape;
  const [err, setErr] = useState(false);

  const [editProduct, setEditProduct] = useState({
    id,
    name: name,
    price: price,
    image: image,
    discountRate: discountRate,
    date: date,
  });

  const editFormRef = useRef<HTMLFormElement | null>(null);

  useOutsideClickHandler(editFormRef, () => {
    setIsEditing(false);
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setEditProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  async function handleEditProduct() {
    await useFetchPut().request(editProduct);

    setIsEditing(false);
  }

  return (
    <form ref={editFormRef}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Nome do produto"
        />
      </label>

      <label htmlFor="price">
        <input
          type="text"
          name="price"
          id="price"
          value={price === 0 ? "" : price}
          onChange={handleChange}
          placeholder="Preço"
        />
      </label>

      <label htmlFor="image">
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleChange}
          placeholder="URL da imagem do produto"
        />
      </label>

      <label htmlFor="discountRate">
        <input
          type="text"
          name="discountRate"
          id="discountRate"
          value={discountRate === 0 ? "" : discountRate}
          onChange={handleChange}
          placeholder="% de desconto"
        />
      </label>

      <button
        type="button"
        onClick={() => {
          isFormValid(editProduct) ?
            handleEditProduct() : setErr(true);
        }}
      >
        ENVIAR
      </button>
      {err && <span className="error">Por favor, preencha os campos corretamente.</span>}
    </form>
  );
}

export default EditProductForm