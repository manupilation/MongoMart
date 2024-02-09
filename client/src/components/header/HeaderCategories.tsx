import { useContext } from "react";
import { category } from "../../types/product";
import { globalContext } from "../../context/globalContext";
import { url } from "../../config/url";

const HeaderCategory = (props: category) => {
  const {id, name} = props;
  const {setUserProducts} = useContext(globalContext);

  const handleSearchByCategory = async (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();
    const fetchProducts = await fetch(url.backend + `ml/product/category/${id}`);
    const {products} = await fetchProducts.json();
    
    setUserProducts([]);
    setUserProducts(products);
  }

  return (
    <li onClick={(event) => handleSearchByCategory(event)}>
      <a>{name}</a>
    </li>
  );
}

export default HeaderCategory;
