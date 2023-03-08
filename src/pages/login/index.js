import React, { useState } from "react";
import "./login.module.css";
import { loginUser } from "../../redux/actions/users";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Toko from "../../img/toko.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };
  return (
    <div>
      <div className="container mt-5 d">
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
      <Form onSubmit={postData} className="input-wrap container mt-2 col-9">
        <div
          className="input-wrap d-flex justify-content-center container flex-column input-wrap"
          style={{ marginTop: "40px", width: "30rem" }}
        >
          <input
            type="email"
            name="email"
            className="input-wrap form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            aria-label="email"
            aria-describedby="basic-addon1"
            style={{ height: "48px", marginTop: "14px", width: "30rem" }}
          />
          <input
            type="password"
            name="password"
            className="input-wrap form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="password"
            aria-describedby="basic-addon1"
            style={{ height: "48px", marginTop: "14px", width: "30rem" }}
          />
          <Link to={"/Forgot"} className="text-danger text-end mt-3" id="text1" style={{ textDecoration: "none" }}>
            Forgot password?
          </Link>
        </div>
        <div className="input-wrap d-flex justify-content-center flex-column mt-3">
          <Button
            type="submit"
            className="input-wrap btn-lg text-center text-light"
            style={{
              borderRadius: "15px",
              marginLeft: "21rem",
              height: "50px",
              width: "30rem",
            }}
            variant="danger"
          >
            Login
          </Button>
          <h5
            className="input-wrap btn-lg text-center mt-3"
            style={{
              borderRadius: "15px",
              marginLeft: "24rem",
              height: "50px",
              width: "28rem",
            }}
          >
            Don't have a Store.id account?
            <Link to="/register-customer" className="text2 text-danger" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </h5>
        </div>
      </Form>
    </div>
  );
}
