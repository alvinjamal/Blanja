import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import RegisterSeller from "./pages/register/index";
import RegisterCustomer from "./pages/Register-Customer/index";
import Login from "./pages/login/index";
import Profile from "./pages/Profile/profile";
import ProfileCust from "./pages/Profile-Cust/index";
import MyBag from "./pages/My-Bag/bag";
import ProductDetail from "./pages/Product-Detail/index";
import Checkout from "./pages/checkout/index";
import Product from "./pages/product/index";
import Forgot from "./pages/Forgot/index";
import ChangePassword from "./pages/Change-Password/index";
import AuthChecker from "./components/AuthChecker";
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
          <Route path="/" element={<Navigate to="/home" />} replace="true" />
          <Route path="/home" element={<Home />} />
          <Route path="/register-seller" element={<RegisterSeller />} />
          <Route path="/register-customer" element={<RegisterCustomer />} />
          <Route path="/category/:id_category" element={<EditCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verif-Otp" element={<VerifyOtp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/change-password/:token" element={<ChangePassword />} />
          {
            <Route
              path="/order"
              element={
                <AuthChecker>
                  <Order />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/product-detail/:id_product"
              element={
                <AuthChecker>
                  <ProductDetail />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/detail-order/:id_checkout"
              element={
                <AuthChecker>
                  <DetailOrder />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/hystory"
              element={
                <AuthChecker>
                  <Hystory />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/checkout"
              element={
                <AuthChecker>
                  <Checkout />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/my-bag"
              element={
                <AuthChecker>
                  <MyBag />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/profile"
              element={
                <AuthChecker>
                  <Profile />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/profile-cust"
              element={
                <AuthChecker>
                  <ProfileCust />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/product"
              element={
                <AuthChecker>
                  <Product />
                </AuthChecker>
              }
            />
          }
          {
            <Route
              path="/edit-category"
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
