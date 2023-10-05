import Body from "./components/body/Body";
import Header from "./components/header/Header";
import GlobalContext from "./context/globalContext";

function App() {
  return (
    <GlobalContext>
      <Header />
      <Body />
    </GlobalContext>
  );
}

export default App;
