import { 
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import UserHeader from "../components/header/UserHeader";
import UserBody from "../components/UserBody/UserBody";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import { globalContext } from "../context/globalContext";
import { useContext } from "react";
import UserProductPage from "../components/UserProductPage/UserProductPage";

function UserApp() {
  return (
    <main>
      <UserBody /> :
    </main>
  );
}

function AdmApp() {
  return (
    <main>
      <Body />
    </main>
  );
}

const AppRoute = () => {
  const { isUser } = useContext(globalContext);
  
  return (
    <BrowserRouter>
      {isUser ? <UserHeader /> : <Header/>}
      <Routes >
        <Route path="/" element={isUser ? <UserApp /> : <AdmApp />} />
        <Route path="/search/:product" element={<UserApp />} />
        <Route path="/list/:category" element={<UserApp />} />
        <Route path="/product/:id" element={<UserProductPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute;