import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Logo from "../../img/toko.png";

export default function Register() {
  return (
    <header>
      <div className="container column mt-5">
        <div className="d-flex mt-5 justify-content-center row mx-auto">
          <img
            src={Logo}
            alt="logo"
            className="logo"
            style={{ width: "60px", height: "50px" }}
          />
          <h1 className="d-flex justify-content-center row mx-auto text-danger">
            Store.id
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
          href="/registerCostumer"
          className="btn-light btn-block btn-lg"
          variant="outline-danger"
          id="cust"
          style={{ marginRight: "10px", borderRadius: "13px" }}
        >
          Customer
        </Button>
        <Button
          className="btn btn-danger btn-block btn-lg "
          style={{ borderRadius: "13px" }}
        >
          Seller
        </Button>
      </div>

      <div
        className="d-flex justify-content-center container flex-column input-wrap"
        style={{ marginTop: "40px", width: "30rem" }}
      >
        <input
          type="name"
          className="form-control"
          placeholder="Name"
          aria-label="name"
          aria-describedby="basic-addon1"
          style={{ height: "48px", width: "30rem" }}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="email"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <input
          type="phone number"
          className="form-control"
          placeholder="Phone Number"
          aria-label="phone number"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <input
          type="store name"
          className="form-control"
          placeholder="Store Name"
          aria-label="store name"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <a
          href="http://"
          className="text-danger text-right"
          style={{ margin: "26px", textAlign: "right", width: "25rem" }}
        >
          Forgot Password?
        </a>
      </div>

      <div
        className="d-flex justify-content-center container flex-column"
        style={{ width: "30%", marginTop: "40px" }}
      >
        <Button
          href="loginSeller"
          className="btn3 btn-lg btn-round text-light"
          style={{ borderRadius: "15px", height: "50px", width: "31rem" }}
          variant="danger"
        >
          Register
        </Button>
        <p className="text-dark text-center" style={{ margin: "26px" }}>
          Already have a Store.id account?
          <a href="/login" className="text2 text-danger">
            {" "}
            Login{" "}
          </a>
        </p>
      </div>
    </header>
  );
}
