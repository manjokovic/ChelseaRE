import React from "react";
import Drawer from "./elements/Sidebar/Drawer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Drawer />
      </BrowserRouter>
    </>
  );
}

export default App;
