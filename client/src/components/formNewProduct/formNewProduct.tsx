import { useContext, useEffect, useRef, useState } from "react";
import { globalContext } from "../../context/globalContext";
import "./formNewProduct.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

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

  const isFormValid = () => {
    const priceRegex = /^[0-9.,]+$/;
    const discountRateRegex = /^[0-9]+$/;
  
    const isPriceValid = priceRegex.test(String(newProduct.price));
    const isDiscountRateValid =
      !newProduct.discountRate || discountRateRegex.test(String(newProduct.discountRate));
    console.log(isDiscountRateValid, isPriceValid);
      
  
    return (
      newProduct.name.length > 3 &&
      isPriceValid &&
      newProduct.image.length > 8 &&
      isDiscountRateValid
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsCreating(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsCreating]);
  

  function handleNewProduct() {
    try {
      console.log(newProduct.name);
      
      fetch(backendUrl + "product", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newProduct.name,
          price: Number(`${newProduct.price}`.replace(",", ".")),
          image: newProduct.image,
          discountRate: Number(`${newProduct.discountRate}`.replace(",", ".")),
        }),
      });
    } catch(err) {
      console.error(err);
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
          isFormValid() ?
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
