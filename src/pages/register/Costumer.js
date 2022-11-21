import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Logo from "../../img/toko.png";

export default function Register() {
  return (
    <header>
      <div className="container column mt-5 d">
        <div className="d-flex mt-5 justify-content-center row mx-auto">
          <img
            src={Logo}
            alt=""
            className="logo"
            style={{ width: "60px", height: "50px" }}
          />
          <h1 className="d-flex mt-2 justify-content-center row mx-auto text-danger">
            Store.Id
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h4 className="mb-4" style={{ fontWeight: "bold" }}>
          Please login with your account
        </h4>
      </div>
      <div className="d-flex mt-3 justify-content-center container">
        <Button
          className="btn btn-danger btn-block btn-lg "
          style={{ borderRadius: "13px" }}
        >
          Customer
        </Button>
        <Button
          href="/registerSeller"
          className="btn-light btn-block btn-lg"
          variant="outline-danger"
          id="cust"
          style={{ marginLeft: "10px", borderRadius: "13px" }}
        >
          Seller
        </Button>
      </div>
      <div
        className="d-flex justify-content-center container flex-column mb-3 input-wrap"
        id="input-wrp"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          aria-label="name"
          aria-describedby="basic=addon1"
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="email"
          aria-describedby="basic=addon1"
          id="input-margin"
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic=addon1"
          id="input-margin"
        />
      </div>
      <div
        className="d-flex justify-content-center container flex-column"
        style={{ width: "30%", marginTop: "40px" }}
      >
        <Button
          href="/loginCostumer"
          className="btn3 btn-lg btn-round text-light"
          style={{ borderRadius: "15px", height: "50px", width: "31rem" }}
          variant="danger"
        >
          Register
        </Button>
        <p className="text-dark text-center" style={{ margin: "26px" }}>
          Already have a Store.id account?
          <a href="/loginCostumer" className="text2 text-danger">
            {" "}
            Login{" "}
          </a>
        </p>
      </div>
    </header>
  );
}
