import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import Logo from "../../img/toko.png";

export default function ChangePassword() {
  return (
    <header>
      <div className="container column mt-5">
        <div className="d-flex mt-5 justify-content-center row mx-auto">
          <img
            src={Logo}
            alt=""
            className="logo"
            style={{ width: "60px", height: "50px" }}
          />
          <h1 className="text-center text-danger">Store.id</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h4 style={{ fontWeight: "bold" }}>Reset Password</h4>
      </div>
      <p
        className="text-secondary d-flex justify-content-center text-danger"
        style={{ marginTop: "5px" }}
      >
        You need to change your password to activate your account
      </p>
      <div
        className="d-flex justify-content-center container flex-column input-wrap"
        id="input-wrp"
      >
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
          {" "}
          Confirmation
        </Button>
      </div>
    </header>
  );
}
