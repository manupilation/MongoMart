import { category } from "../../types/product";
import { useNavigate } from "react-router-dom";

const HeaderCategory = (props: category) => {
  const {id, name} = props;
  const navigate = useNavigate();


  function handleClickProduct() {
    return navigate(`/list/${id}`);
  };

  return (
    <li onClick={handleClickProduct}>
      <a>{name}</a>
    </li>
  );
}

export default HeaderCategory;
