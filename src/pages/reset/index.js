import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import Logo from "../../img/toko.png";

export default function reset() {
  return (
    <header>
      <div className="container column mt-5">
        <div className="d-flex mt-5 justify-content-center row mx-auto text-danger">
          <img
            src={Logo}
            alt=""
            className="logo"
            style={{ width: "60px", height: "50px" }}
          />
          <h1 className="text-center">Store.id</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h4 style={{ fontWeight: "bold" }}>Reset Password</h4>
      </div>
      <div
        className="d-flex justify-content-center container flex-column input-wrap"
        style={{ marginTop: "40px" }}
      >
        <input
          type="email"
          className="form-control d-flex justify-content-center container flex-column input-wrap"
          placeholder="Email"
          aria-label="email"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />
        <a href="/reset" className="text-danger" id="text1">
          Forgot password?{" "}
        </a>
      </div>

      <div
        className="d-flex justify-content-center container flex-column"
        style={{ width: "30%", marginTop: "40px" }}
      >
        <Button
          className="btn3 btn-lg btn-round"
          variant="danger"
          style={{ borderRadius: "15px", height: "50px", width: "31rem" }}
        >
          Confirmation
        </Button>
        <p className="text-dark text-center" style={{ margin: "26px" }}>
          Don't have a Store.id account?
          <a href="/registerCostumer" className="text-ean">
            {" "}
            Register{" "}
            <div>
              <a href="/loginCostumer">Login</a>
            </div>
          </a>
        </p>
      </div>
    </header>
  );
}
