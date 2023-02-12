import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import RegisterSeller from "./pages/Register/Seller";
import RegisterCustomer from "./pages/Register-Customer/Costumer";
import Login from "./pages/Login/index";
import Profile from "./pages/Profile/profile";
import ProfileCust from "./pages/Profile-Cust/index";
import MyBag from "./pages/My-Bag/bag";
import ProductDetail from "./pages/Product-Detail/index";
import Checkout from "./pages/Checkout/index";
import Selling from "./pages/Selling/index";
import Product from "./pages/Product/index";
import Forgot from "./pages/Forgot/index";
import ChangePassword from "./pages/Change-Password/index";
import AuthChecker from "./Components/AuthChecker";
import VerifyOtp from "./pages/Verif-Otp";
import Order from "./pages/Order";
import DetailOrder from "./pages/Detail-Order";
import Hystory from "./pages/Hystory";
import EditCategory from "./pages/Category/edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} replace="true" />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register-Seller" element={<RegisterSeller />} />
          <Route path="/Register-Customer" element={<RegisterCustomer />} />
          <Route path="/Category/:id_category" element={<EditCategory />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Selling" element={<Selling />} />
          <Route path="/Verif-Otp" element={<VerifyOtp />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Change-Password/:token" element={<ChangePassword />} />
          {
            <Route
              path="/Order"
              element={
                <AuthChecker>
                  <Order />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/Product-Detail/:id_product"
              element={
                <AuthChecker>
                  <ProductDetail />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/Detail-Order/:id_checkout"
              element={
                <AuthChecker>
                  <DetailOrder />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/Hystory"
              element={
                <AuthChecker>
                  <Hystory />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/Checkout"
              element={
                <AuthChecker>
                  <Checkout />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/My-Bag"
              element={
                <AuthChecker>
                  <MyBag />
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
              path="/Profile-Cust"
              element={
                <AuthChecker>
                  <ProfileCust />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/Profile-Cust"
              element={
                <AuthChecker>
                  <ProfileCust />
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
          {
            <Route
              path="/Edit-Category"
              element={
                <AuthChecker>
                  <EditCategory />
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
