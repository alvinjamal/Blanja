import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import RegisterSeller from "./pages/Register/Seller";
import RegisterCustomer from "./pages/Register/Costumer";
import Login from "./pages/Login/index";
import Profile from "./pages/Profile/profile";
import MyBag from "./pages/My-Bag";
import ProductDetail from "./pages/Product-Detail/index";
import Checkout from "./pages/checkout/index";
import Selling from "./pages/Selling/index";
// import NavbarComponent from "./components/Navbar";
import Product from "./pages/Product/index";
import Forgot from "./pages/Reset/index";
import ConfirmationPassword from "./pages/Pass-Konfir/index";
import AuthChecker from "./Components/AuthChecker";
import VerifyOtp from "./pages/Verif-Otp";

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} replace="true" />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register-Seller" element={<RegisterSeller />} />
          <Route path="/Register-Customer" element={<RegisterCustomer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Product-Detail" element={<ProductDetail />} />
          <Route path="/Selling" element={<Selling />} />
          <Route path="/Reset" element={<Forgot />} />
          <Route path="/Reset-Pass" element={<ConfirmationPassword />} />
          <Route path="/Verif-Otp" element={<VerifyOtp />} />
          {
            <Route
              path="/My-Bag"
              element={
                <AuthChecker>
                  <MyBag />{" "}
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/Profile"
              element={
                <AuthChecker>
                  <Profile />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/Product"
              element={
                <AuthChecker>
                  <Product />
                </AuthChecker>
              }
            />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
