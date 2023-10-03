import SearchBar from "../searchBar/SearchBar";
import "./Header.css"

const Header = () => {
  return (
    <div className="headerContainer">
      <header className="headerWrapper">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>

        <SearchBar/>
      </header>
    </div>
  );
}

export default Header;
