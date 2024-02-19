import { useContext, useState } from "react";
// import categories from "../../db/categories.json";
import HeaderCategory from "./HeaderCategories";
import { globalContext } from "../../context/globalContext";
import { Link, useNavigate } from "react-router-dom";
import lupa from "../../assets/lupa.svg";
import cart from "../../assets/cart.png";
import "./UserHeader.css";

const UserHeader = () => {
  const {categories, cartItens} = useContext(globalContext);
  const [search, setSearch] = useState("");
  const navigateTo = useNavigate();

  function handleSearchBar(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleCategoriesOcult() {
    const categoriesOcult = document.querySelector('.categories');
    if (categoriesOcult)
    categoriesOcult.classList.toggle('visible');
  }

  function redirectToMain(url?: string) {
    if(url) {
      navigateTo("/" + url);
      return
    }

    navigateTo("/");
  };

  return (
    <div className="header-container">
      <nav>
        <img className="logo" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/pt_logo_large_plus.webp" onClick={() => redirectToMain()}/>
        <div className="searchInput">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Buscar produtos, marcas e muito mais..."
            value={search}
            onChange={handleSearchBar}
          />
          <Link to={"search/" + search} className="searchBtn"><img src={lupa}/></Link>
        </div>
        <img src="https://http2.mlstatic.com/D_NQ_856833-MLA74547382581_022024-OO.webp" alt="" className="banner"/>
      </nav>

      <span className="separator"></span>

      <div className="options-container">
        <nav onClick={handleCategoriesOcult} className="categories-list">
          Categorias
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
        </nav>

        <div className="cartContainer" onClick={() => redirectToMain("cart")}>
          <img src={cart} alt="" className="cartIcon"/>
          <span className="cartLength">{cartItens.length}</span>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
