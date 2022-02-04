import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import ProductLists from "./pages/product-lists";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductLists />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
