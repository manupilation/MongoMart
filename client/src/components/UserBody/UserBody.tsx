import { useContext, useEffect } from "react";
import UserProductList from "../UserProductList/UserProductlist";
import { globalContext } from "../../context/globalContext";
import { url } from "../../config/url";
import { useParams } from "react-router-dom";
import "./UserBody.css";

const UserBody = () => {
  const {setUserProducts, setCategories} = useContext(globalContext);
  const {product, category} = useParams();
  
  useEffect(() => {
    async function fetchProductsByCategory() {
      const [fetchProducts, fetchCategories] = await Promise.all([
        fetch(url.backend + `ml/product/category/${category}`),
        fetch(url.backend + "ml/categories"),
      ]);
      const [{products}, {categories}] = await Promise.all([
        fetchProducts.json(),
        fetchCategories.json(),
      ])
      
      setUserProducts(products);
      setCategories(categories);
    }

    async function fetchProducts() {
      const [fetchProducts, fetchCategories] = await Promise.all([
        fetch(url.backend + `ml/product/${product || "tecnologia"}`),
        fetch(url.backend + "ml/categories"),
      ]);
      const [{products}, {categories}] = await Promise.all([
        fetchProducts.json(),
        fetchCategories.json(),
      ])
      
      setUserProducts(products);
      setCategories(categories);
    }

    if(category) {
      fetchProductsByCategory();
      return; 
    }
    fetchProducts();
  }, [setUserProducts, product]);

  return (
    <div className="bodyWrapper">
      <h3 className="categorytitle">Mais vendidos da semana</h3>

      <UserProductList />
    </div>
  );
}

export default UserBody;
