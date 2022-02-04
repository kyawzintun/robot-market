import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
