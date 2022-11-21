// import { useState } from "react";
// import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import MyBag from "./pages/mybag";
import LoginCostumer from "./pages/login/Costumer";
import LoginSeller from "./pages/login/Seller";
import RegisterSeller from "./pages/register/Seller";
import ProfileDetail from "./pages/profileDetail/profile";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/productDetail/index";
import Checkout from "./pages/checkout/index";
import Selling from "./pages/selling/index";
import NavbarComponent from "./components/Navbar";
import Product from "./pages/product/index";
import RegisterCustomer from "./pages/register/Costumer";
import Reset from "./pages/reset/index";
import ConfirmationPassword from "./pages/passKonfir/index";
import Login from "./pages/login";
// import AuthChecker from "./components/AuthChecker";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        {/* <nav style={{ height: "50px" }}>
          <Link to="/home">Home</Link>

          <Link to="/product">Product</Link>

          <Link to="/productDetail">Product Detail</Link>

          <Link to="/loginSeller">Login Seller</Link>

          <Link to="/registerSeller">Register Seller</Link>

          <Link to="/loginCostumer">Login Costumer</Link>

          <Link to="/registerCostumer">Register Costumer</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/profileDetail">Profile Detail</Link>

          <Link to="/reset">Reset Password</Link>

          <Link to="/confirmationPassword">Confirmation Password</Link>

          <Link to="/myBag">My Bag</Link>

          <Link to="/checkout">Checkout</Link>

          <Link to="/selling">Selling</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} replace="true" />
          <Route path="/home" element={<Home />} />
          <Route path="/registerSeller" element={<RegisterSeller />} />
          <Route path="/registerCostumer" element={<RegisterCustomer />} />
          <Route path="/loginCostumer" element={<LoginCostumer />} />
          <Route path="/loginSeller" element={<LoginSeller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mybag" element={<MyBag />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profileDetail" element={<ProfileDetail />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/product" element={<Product />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/confirmationPassword"
            element={<ConfirmationPassword />}
          />
          <Route path="/profile" element={<Profile />} />
          {/* { <Route
            path="/product"
            element={
              <AuthChecker>
                <Product />
              </AuthChecker>
            }
          /> } */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
