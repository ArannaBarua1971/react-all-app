import { useState } from "react";
import "./index.css";

import Nav from "./components/Nav";
import SortItem from "./components/SortItem";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Nav />
      <div className="flex">
        <SortItem />
        <Home />
      </div>
    </>
  );
}

export default App;
