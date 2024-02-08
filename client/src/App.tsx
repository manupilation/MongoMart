import { useContext } from "react";
import UserBody from "./components/UserBody/UserBody";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import { globalContext } from "./context/globalContext";
import UserHeader from "./components/header/UserHeader";

function App() {
  const { isUser } = useContext(globalContext);

  if (!isUser) {
    return (
      <AdmApp />
    )
  }

  return (
    <UserApp />
  );
}

function UserApp() {
  return (
    <main>
      <UserHeader />
      <UserBody /> :
    </main>
  );
}

function AdmApp() {
  return (
    <main>
      <Header />
      <Body />
    </main>
  );
}

export default App;
