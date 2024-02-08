import UserProductList from "../UserProductList/UserProductlist";

const UserBody = () => {

  return (
    <div className="bodyWrapper">
      <h3>Mais vendidos da semana</h3>

      <UserProductList />
    </div>
  );
}

export default UserBody;
