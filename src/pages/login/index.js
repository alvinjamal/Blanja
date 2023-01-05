import React, { useState } from "react";
import "./login.module.css";
import { loginUser } from "../../redux/actions/users";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form, Container } from "react-bootstrap";
import Toko from "../../img/toko.png";
// import Navbar from "../components/Navbar/NavbarBefore";

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
      {/* <Container> */}
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
        </div>
        <div
          className="input-wrap d-flex justify-content-center flex-column"
          style={{ width: "30%", marginTop: "40px" }}
        >
          <Button
            type="submit"
            className="input-wrap btn3 btn-lg text-light"
            style={{
              borderRadius: "15px",
              marginLeft: "29rem",
              height: "50px",
              width: "25rem",
            }}
            variant="danger"
          >
            Login
          </Button>
          <p
            className="text-dark text-center mt-2"
            style={{
              borderRadius: "15px",
              marginLeft: "29rem",
              height: "50px",
              width: "25rem",
            }}
          >
            Done have a Store.id account?
            <a href="/Login" className="text2 text-danger">
              Register
            </a>
          </p>
        </div>
      </Form>
      {/* </Container> */}
    </div>
  );
}
