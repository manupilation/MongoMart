import ProductList from "../productList/ProductList";
import AddProduct from "../addProduct/addProduct";
import "./Body.css";

const Body = () => {
  return (
    <div className="bodyWrapper">
      <h1 className="text-3xl font-bold underline">Sistema de gerenciamento de produtos</h1>
      <ProductList />
      <AddProduct />
    </div>
  );
}

export default Body;
