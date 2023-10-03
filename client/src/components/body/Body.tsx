import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/addProduct";
import ModalForm from "../modalForm/modalForm";
import EditProductContext from "../../context/editProductContext";
import EditProductModal from "../editProductModal/editProductModal";
import "./Body.css";

const Body = () => {
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
