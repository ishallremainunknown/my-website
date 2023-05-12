import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop/Shop";

import "./App.css";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <div></div>
    </>
  );
}

export default App;
