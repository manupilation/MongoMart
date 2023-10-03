import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/addProduct";
import ModalForm from "../modalForm/modalForm";
import EditProductContext from "../../context/editProductContext";
import EditProductModal from "../editProductModal/editProductModal";
import "./Body.css";
import { useContext, useEffect } from "react";
import { globalContext } from "../../context/globalContext";
import useProductThreatment from "../../hooks/UseProductThreatment";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Body = () => {
  const {setProducts} = useContext(globalContext);

  useEffect(() => {
    async function fetchProducts() {
      const data = await fetch(backendUrl + "products");
      const {products} = await data.json();

      const threatmentProducts = useProductThreatment(products);
      setProducts(threatmentProducts);
    }

    fetchProducts();
  }, [setProducts]);

  return (
    <EditProductContext>
      <div className="bodyWrapper">
        <ModalForm />
        <EditProductModal />
        <h1>Sistema de gerenciamento de produtos</h1>
        <ProductList />
        <AddProduct />
      </div>
    </EditProductContext>
  );
}

export default Body;
