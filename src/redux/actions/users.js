import axios from "axios";
import swal from "sweetalert";

export const loginUser = (data, navigate) => async (dispact) => {
  try {
    dispact({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(`http://localhost:3500/users/login`, data);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      if (user.role === "seller") {
        console.log("Seller");
      } else {
        console.log("Customer");
      }
      navigate("/Home");
    });
    console.log("User Login Success");
  } catch (err) {
    console.log("User Login Err");
    console.log(err);
  }
};

export const registerUserCustomer =
  (dataForm, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "USER_REGISTER_PENDING" });
      const result = await axios.post(
        `http://localhost:3500/users/register/customer`,
        dataForm
      );
      const user = result.data.data;
      console.log(user);
      console.log(result.data.data);
      dispatch({ type: "USER_REGISTER_CUSTOMER_SUCCESS", payload: user });
      swal({
        title: "Good job!",
        text: `${result.data.message}`,
        icon: "success",
      }).then(() => {
        navigate("/Verif-Otp");
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "USER_REGISTER_CUSTOMER_ERROR" });
      swal({
        title: "Oops!",
        text: `${error.response.data.message}`,
        icon: "error",
      });
    }
  };

export const registerUserSeller = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `http://localhost:3500/users/register/seller`,
      dataForm
    );
    const user = result.data.data;

    dispatch({ type: "USER_REGISTER_SELLER_SUCCESS", payload: user });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      navigate("/Verif-Otp");
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "USER_REGISTER_SELLER_ERROR" });
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};

export const VerifOtp = (data, navigate) => async (dispacth) => {
  try {
    const result = await axios.post(
      `http://localhost:3500/users/verification`,
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispacth({ type: "USER_VERIFICATION_SUCCESS", payload: user });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      navigate("/Login");
    });
    console.log("User Verification Success");
  } catch (err) {
    swal({
      title: "Oops!",
      text: `${err.response.data.message}`,
      icon: "error",
    });
    console.log("User verificatin Fail");
    console.log(err);
  }
};
