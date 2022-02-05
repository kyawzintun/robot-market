import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar } from "./components/navbar";
import { ProductLists } from "./pages/product-lists";
import { NotFound } from "./pages/404";
import "react-toastify/dist/ReactToastify.css";

const ShowNavBar = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route element={<ShowNavBar />}>
          <Route path="/" element={<ProductLists />} />
        </Route>
        <Route element={<ShowNavBar />}>
          <Route path="/products" element={<ProductLists />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
