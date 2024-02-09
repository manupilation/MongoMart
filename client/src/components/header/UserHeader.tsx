import { useContext, useState } from "react";
// import categories from "../../db/categories.json";
import HeaderCategory from "./HeaderCategories";
import { globalContext } from "../../context/globalContext";
import { url } from "../../config/url";
import "./UserHeader.css";

const UserHeader = () => {
  const {categories, setUserProducts} = useContext(globalContext);
  const [search, setSearch] = useState("");

  function handleSearchBar(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  async function searchProducts(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    const fetchProducts = await fetch(url.backend + `ml/product/${search}`);
    const {products} = await fetchProducts.json();
    
    setUserProducts(products);
  }

  function handleCategoriesOcult(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const categoriesOcult = document.querySelector('.categories');
    if (categoriesOcult)
    categoriesOcult.classList.toggle('visible');
  }

  return (
    <div className="">
      <nav>
        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/pt_logo_large_plus.webp"/>
        <div>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Buscar produtos, marcas e muito mais..."
            value={search}
            onChange={handleSearchBar}
          />
          <button type="submit" onClick={searchProducts}>AAA</button>
        </div>
        <img src="https://http2.mlstatic.com/D_NQ_717994-MLA73780157152_012024-OO.webp" alt="" />
      </nav>

      <div className="">
        <nav onClick={handleCategoriesOcult}>
          Categorias
        </nav>
        <ul className="categories">
          {
            categories.length ? categories.map(
                ({ id, name }, i) => 
                <HeaderCategory 
                  id={id}
                  key={i}
                  name={name} />
              ) :
              null
          }
        </ul>
      </div>
    </div>
  );
}

export default UserHeader;
