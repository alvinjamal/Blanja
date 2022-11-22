import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import Toko from "../../img/toko.png";
import axios from "axios";
import Alert from "../../components/alert";

export default function Login() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(false);

  const handleLogin = (e) => {
    axios
      .post(
        `http://localhost:3500/users/login`,
        { email: inputData.email, password: inputData.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setMessage({
          title: "Success",
          text: "Login success",
          type: "success",
        });
        setTimeout(() => {
          setMessageShow(true);
        }, 500);
        setTimeout(() => {
          window.location = "/product";
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(message);
  return (
    <div>
      <div className="container column mt-5 d">
        <div className="d-flex mt-5 justify-content-center row mx-auto">
          <img
            src={Toko}
            alt="Logo"
            style={{ width: "60px", height: "50px" }}
          />
          <h1 className="text-danger text-center">Store.id</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h4 className="mb-4" style={{ fontWeight: "bold" }}>
          Please login with your account
        </h4>
      </div>
      <div
        className="d-flex mt-2 justify-content-center container"
        style={{ width: "30%" }}
      >
        <Button
          href="/loginCostumer"
          className="btn btn-light btn-block btn-lg"
          variant="outline-danger"
          style={{ borderRadius: "13px" }}
        >
          Customer
        </Button>

        <Button
          href="/loginSeller"
          className="btn1 btn-danger btn-lg"
          style={{ borderRadius: "13px", marginLeft: "10px" }}
        >
          {" "}
          Seller
        </Button>
      </div>
      <div
        className="d-flex justify-content-center container flex-column input-wrap"
        id="input-wrp"
      >
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
          aria-label="email"
          aria-describedby="basic=addon1"
        />
        <input
          type="password"
          className="form-control"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic=addon1"
          id="input-margin"
        />
        <a href="/reset" className="text-danger" id="text1">
          Forgot password?{" "}
        </a>
      </div>
      <div
        className="d-flex mt-2 justify-content-center container flex-column"
        id="container-login"
      >
        <Button
          className="btn3 btn-lg btn-round btn-danger text-light "
          onClick={handleLogin}
          style={{ borderRadius: "15px", height: 50 }}
        >
          Login
        </Button>
        <p className="d-flex justify-content-center text-dark" id="text-all">
          Don't have Store.id account?
          <a href="/register" className="text-danger">
            Register
          </a>
        </p>
      </div>
      {/* alert */}
      {messageShow && (
        <Alert title={message.title} text={message.text} type={message.type} />
      )}
    </div>
  );
}
