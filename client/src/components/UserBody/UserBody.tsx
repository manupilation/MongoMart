import { useContext, useEffect } from "react";
import UserProductList from "../UserProductList/UserProductlist";
import { globalContext } from "../../context/globalContext";
import { url } from "../../config/url";

const UserBody = () => {
  const {setUserProducts} = useContext(globalContext);
  
  useEffect(() => {
    async function fetchProducts() {
      const data = await fetch(url.backend + "ml/product/tecnologia");
      const {products} = await data.json();
      
      setUserProducts(products);
    }

    fetchProducts();
  }, [setUserProducts]);

  return (
    <div className="bodyWrapper">
      <h3>Mais vendidos da semana</h3>

      <UserProductList />
    </div>
  );
}

export default UserBody;
