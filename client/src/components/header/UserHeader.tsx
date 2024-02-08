import { useContext } from "react";
// import categories from "../../db/categories.json";
import HeaderCategory from "./HeaderCategories";
import { globalContext } from "../../context/globalContext";

const UserHeader = () => {
  const {categories} = useContext(globalContext);

  return (
    <div className="">
      <nav>
        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/pt_logo_large_plus.webp"/>
        <div>
          <input type="text" name="" id="" placeholder="Buscar produtos, marcas e muito mais..."/>
        </div>
        <img src="https://http2.mlstatic.com/D_NQ_717994-MLA73780157152_012024-OO.webp" alt="" />
      </nav>

      <div className="categories">
        Categorias
        <ul>
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
