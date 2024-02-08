import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalContext from "./context/globalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
)
