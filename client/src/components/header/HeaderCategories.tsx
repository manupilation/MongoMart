import { category } from "../../types/product";

const HeaderCategory = (props: category) => {
  const {id, name} = props;

  return (
    <li>
      {name}
    </li>
  );
}

export default HeaderCategory;
