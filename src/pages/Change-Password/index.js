import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../img/toko.png";
import { ChangePW } from "../../redux/actions/users";
import { Form } from "react-bootstrap";

export default function ChangePassword() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const postData = (e) => {
  //   e.preventDefault();
  //   let data = {
  //     email,
  //     password,
  //   };
  //   dispatch(ChangePW(data, navigate));
  // };
  return (
    <div>
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
      {/* <Form onSubmit={postData}> */}
      <div
        className="d-flex justify-content-center container flex-column input-wrap"
        style={{ marginTop: "40px" }}
      >
        <input
          type="email"
          className="form-control d-flex justify-content-center container flex-column input-wrap"
          placeholder="Email"
          // value={email}
          name="email"
          // onChange={(e) => setEmail(e.target.value)}
          aria-label="email"
          aria-describedby="basic-addon1"
          style={{ height: "48px", marginTop: "14px", width: "30rem" }}
        />

        <input
          type="password"
          className="form-control"
          // value={password}
          name="password"
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
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
          type="submit"
          className="btn3 btn-lg btn-round text-light"
          style={{ borderRadius: "15px", height: "50px", width: "31rem" }}
          variant="danger"
        >
          {" "}
          Confirmation
        </Button>
      </div>
      {/* </Form> */}
    </div>
  );
}
