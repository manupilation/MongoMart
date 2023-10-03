import { useContext, useRef, useState } from "react";
import { globalContext } from "../../context/globalContext";
import "./formNewProduct.css";
import isFormValid from "../../helper/isFormValid";
import UseFetchPost from "../../hooks/UseFetchPost";
import useOutsideClickHandler from "../../hooks/UseCloseModal";

const FormNewProduct = () => {
  const {setIsCreating} = useContext(globalContext);
  const [err, setErr] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: "",
    discountRate: 0,
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  useOutsideClickHandler(formRef, () => {
    setIsCreating(false);
  });

  async function handleNewProduct() {
    try {
      await UseFetchPost().request(newProduct);
    } catch(err) {
      console.error(err);
    } finally {
      setIsCreating(false);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  return (
    <form ref={formRef} className="newProductForm">
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Nome do produto"
        />
      </label>

      <label htmlFor="price">
        <input
          type="text"
          name="price"
          id="price"
          value={newProduct.price === 0 ? "" : newProduct.price}
          onChange={handleChange}
          placeholder="Preço"
        />
      </label>

      <label htmlFor="image">
        <input
          type="text"
          name="image"
          id="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="URL da imagem do produto"
        />
      </label>

      <label htmlFor="discountRate">
        <input
          type="text"
          name="discountRate"
          id="discountRate"
          value={newProduct.discountRate === 0 ? "" : newProduct.discountRate}
          onChange={handleChange}
          placeholder="% de desconto"
        />
      </label>

      <button
        type="button"
        onClick={() => {
          isFormValid(newProduct) ?
            handleNewProduct() : setErr(true);
        }}
      >
        ENVIAR
      </button>

      {err && <span className="error">Por favor, preencha os campos corretamente.</span>}
    </form>
  );
};

export default FormNewProduct;
