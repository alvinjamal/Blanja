import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Logo from "../../img/toko.png";

export default function Register() {
  return (
    <header>
      <div class="container column mt-5">
        <div class="d-flex mt-5 justify-content-center row mx-auto">
          <img
            src={Logo}
            alt="logo"
            class="logo"
            style={{ width: "60px", height: "50px", marginRight: "10px" }}
          />
          <h1 class="text-center text-danger">Store.id</h1>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <h4>Please login with your account</h4>
      </div>
      <div class="d-flex mt-2 justify-content-center container">
        <Button
          href="/register"
          className="btn-light btn-block btn-lg"
          variant="outline-danger"
          id="cust"
          style={{ marginRight: "10px" }}
        >
          Customer
        </Button>
        <Button
          className="btn btn-danger btn-block btn-lg text-light"
          id="button3"
        >
          Seller
        </Button>
      </div>

      <div
        class="d-flex justify-content-center container flex-column input-wrap"
        style={{ marginTop: "40px", width: "30rem" }}
      >
        <input
          type="name"
          class="form-control"
          placeholder="Name"
          aria-label="name"
          aria-describedby="basic-addon1"
          style={{ height: "48px", width: "30rem" }}
        />
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="email"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <input
          type="phone number"
          class="form-control"
          placeholder="Phone Number"
          aria-label="phone number"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <input
          type="store name"
          class="form-control"
          placeholder="Store Name"
          aria-label="store name"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <a
          href="http://"
          class="text-danger text-right"
          style={{ margin: "26px", textAlign: "right", width: "25rem" }}
        >
          Forgot Password?
        </a>
      </div>

      <div
        class="d-flex justify-content-center container flex-column"
        style={{ width: "30%", marginTop: "40px" }}
      >
        <Button
          class="btn3 btn-lg btn-round text-light"
          style={{ borderRadius: "15px", height: "50px", width: "33rem" }}
          variant="danger"
        >
          Register
        </Button>
        <p class="text-dark text-center" style={{ margin: "26px" }}>
          Already have a Store.id account?
          <a href="/login" class="text2 text-danger">
            {" "}
            Login{" "}
          </a>
        </p>
      </div>
    </header>
  );
}
