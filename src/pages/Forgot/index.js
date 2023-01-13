import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/toko.png";
import { ForgotPw } from "../../redux/actions/users";
import { Form } from "react-bootstrap";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      email,
    };
    dispatch(ForgotPw(data, navigate));
  };
  return (
    <div>
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
        <h4 style={{ fontWeight: "bold" }}>Forgot Password</h4>
      </div>
      <Form onSubmit={postData}>
        <div
          className="d-flex justify-content-center container flex-column input-wrap"
          style={{ marginTop: "40px" }}
        >
          <input
            type="email"
            className="form-control d-flex justify-content-center container flex-column input-wrap"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            aria-label="email"
            aria-describedby="basic-addon1"
            style={{ height: "48px", marginTop: "14px", width: "30rem" }}
          />
        </div>

        <div
          className="d-flex justify-content-center container flex-column"
          style={{ width: "30%", marginTop: "40px" }}
        >
          <Button
            type="submit"
            className="btn-lg"
            variant="danger"
            style={{
              borderRadius: "15px",
              height: "50px",
              width: "26rem",
              marginLeft: "5rem",
            }}
          >
            Send
          </Button>

          <Button
            className="btn-lg mt-3"
            variant="danger"
            href={"/Login"}
            style={{
              borderRadius: "15px",
              height: "50px",
              width: "12rem",
              marginLeft: "12rem",
            }}
          >
            Back To Login
          </Button>
        </div>
      </Form>
    </div>
  );
}
