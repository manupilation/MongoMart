import SearchBar from "../searchBar/SearchBar";
import MongoMartLogo from "../../../public/mongomart.png";
import "./Header.css"

const Header = () => {
  return (
    <div className="headerContainer">
      <header className="headerWrapper">
        <div className="logo">
          <img src={MongoMartLogo} alt="Logo" />
        </div>

        <SearchBar/>
      </header>
    </div>
  );
}

export default Header;
