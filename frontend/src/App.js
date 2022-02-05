import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar } from "./components/navbar";
import ProductLists from "./pages/product-lists";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
