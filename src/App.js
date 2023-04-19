import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/index";
import Cart from "./pages/cart";
import Header from "./components/common/header";
const App =() => {
  return <div>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>

  </div>
}

export default App;