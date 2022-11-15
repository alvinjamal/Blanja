// import { useState } from "react";
// import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import MyBag from "./pages/mybag";
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Profile from "./pages/profile/profile";
import Product from "./pages/product/index";
import Checkout from "./pages/checkout/index";
import Selling from "./pages/selling/index";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        {/* <nav>
          <Link to="/home">Home</Link>

          <Link to="/register">Register</Link>

          <Link to="/login">Login</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/mybag">MyBag</Link>

          <Link to="/checkout">Checkout</Link>

          <Link to="/selling">Selling</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} replace="true" />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mybag" element={<MyBag />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/selling" element={<Selling />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
