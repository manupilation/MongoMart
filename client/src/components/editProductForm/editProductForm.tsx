import { useContext, useRef, useState } from "react";
import { editProductContext } from "../../context/editProductContext";
import useOutsideClickHandler from "../../hooks/UseCloseModal";
import isFormValid from "../../helper/isFormValid";
import "./editProductForm.css";
import { productToClean } from "../../types/product";
import { globalContext } from "../../context/globalContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function EditProductForm() {
  const { setIsEditing, productShape } = useContext(editProductContext);
  const { setProducts } = useContext(globalContext);
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
    setEditProduct((prevProduct) => ({...prevProduct,[name]: value}));
  }

  async function handleEditProduct() {
    const response = await (await fetch(backendUrl + "product", {
      method: "PUT",
      mode: "cors",
      cache: "force-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editProduct.id,
        body: {
          ...editProduct,
          price: Number(`${editProduct.price}`.replace(",", ".")),
          discountRate: Number(`${editProduct.discountRate}`.replace(",", ".")),
        }
      })
    })).json() as {product: productToClean};
    const clean = {...response.product, price: +response.product.price.$numberDecimal};

    setProducts((prev) => {
      const index = prev.findIndex(((item) => item.id === clean.id));
      if(index !== -1) {
        prev[index] = clean;
      }
      return [...prev];
    });

    setIsEditing(false);
  }

  async function handleDeleteProduct() {
     await fetch(backendUrl + "product", {
      method: "DELETE",
      mode: "cors",
      cache: "force-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editProduct.id,
        }
      )
    });
    setProducts((prev) => [...prev].filter((a) => !(a.id === editProduct.id)));
    setIsEditing(false);
  }

  return (
    <form ref={editFormRef} className="newProductForm">
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          value={editProduct.name}
          onChange={handleChange}
          placeholder="Nome do produto"
        />
      </label>

      <label htmlFor="price">
        <input
          type="text"
          name="price"
          id="price"
          value={editProduct.price === 0 ? "" : editProduct.price}
          onChange={handleChange}
          placeholder="Preço"
        />
      </label>

      <label htmlFor="image">
        <input
          type="text"
          name="image"
          id="image"
          value={editProduct.image}
          onChange={handleChange}
          placeholder="URL da imagem do produto"
        />
      </label>

      <label htmlFor="discountRate">
        <input
          type="text"
          name="discountRate"
          id="discountRate"
          value={editProduct.discountRate === 0 ? "" : editProduct.discountRate}
          onChange={handleChange}
          placeholder="% de desconto"
        />
      </label>

      <div className="manageButtons">
        <button
          type="button"
          className="excludeButton"
          onClick={() => handleDeleteProduct()}
        >
          EXCLUIR
        </button>

        <button
          type="button"
          className="editBtn"
          onClick={() => {
            isFormValid(editProduct) ?
              handleEditProduct() : setErr(true);
          }}
        >
          ENVIAR
        </button>
      </div>
      {err && <span className="error">Por favor, preencha os campos corretamente.</span>}
    </form>
  );
}

export default EditProductForm