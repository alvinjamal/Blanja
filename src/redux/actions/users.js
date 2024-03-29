import axios from "axios";
import swal from "sweetalert";

export const loginUser = (data, navigate) => async (dispact) => {
  try {
    dispact({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API}/users/login`,
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
      timer: "2000",
      showConfirmButton: false,
    }).then(() => {
      if (user.role === "seller") {
        console.log("Seller");
        navigate("/Profile");
      } else {
        console.log("Customer");
        navigate("/home");
      }
    });
  } catch (err) {
    swal({
      title: "Please Try Again Login",
      text: `${err.response.data.message}`,
      icon: "error",
    });
  }
};

export const registerUserCustomer =
  (dataForm, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "USER_REGISTER_PENDING" });
      const result = await axios.post(
        `${process.env.REACT_APP_API}/users/register/customer`,
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
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/verif-otp");
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
      `${process.env.REACT_APP_API}/users/register/seller`,
      dataForm
    );
    const user = result.data.data;

    dispatch({ type: "USER_REGISTER_SELLER_SUCCESS", payload: user });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      navigate("/verif-otp");
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
      `${process.env.REACT_APP_API}/users/verification`,
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
      navigate("/login");
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

export const ForgotPw = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_FORGOT_PW_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API}/users/forgot`,
      data
    );
    const user = result.data.data;
    console.log(user);
    console.log(result.data.data);
    dispatch({ type: "CONFIRM_EMAIL_SUCCESS", payload: user });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      navigate("/change-password");
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "CONFIRM_EMAIL_ERROR" });
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};

export const ChangePW = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_CHANGE_PW_PENDING" });
    const token = localStorage.et("token");
    console.log(token);
    const result = await axios.post(
      `${process.env.REACT_APP_API}/users/forgot/${token}`,
      data
    );
    const user = result.data.data;
    console.log(user);
    console.log(result.data.data);
    dispatch({ type: "CHANGE_PW_SUCCESS", payload: user });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      navigate("/login");
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "CHANGE_PW_ERROR" });
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};
