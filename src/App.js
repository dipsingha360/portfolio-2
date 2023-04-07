import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
