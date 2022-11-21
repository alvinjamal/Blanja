import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import Toko from "../../img/toko.png";

export default function login() {
  return (
    <header>
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
          href="/login"
          className="btn1 btn-danger btn-lg"
          style={{ borderRadius: "13px" }}
        >
          Customer
        </Button>

        <Button
          href="/login"
          className="btn btn-light btn-block btn-lg"
          id="button"
          variant="outline-danger"
          style={{ borderRadius: "13px" }}
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
          aria-label="email"
          aria-describedby="basic=addon1"
        />
        <input
          type="password"
          className="form-control"
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
    </header>
  );
}
