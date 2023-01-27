import React, { useState } from "react";
import "./style.css";
import { Button, Form } from "react-bootstrap";
import Logo from "../../img/toko.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserCustomer } from "../../redux/actions/users";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      password,
    };
    dispatch(registerUserCustomer(data, navigate));
  };
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
          Please sign up with your account
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
          href="/Register-Seller"
          className="btn-light btn-block btn-lg"
          variant="outline-danger"
          id="cust"
          style={{ marginLeft: "10px", borderRadius: "13px" }}
        >
          Seller
        </Button>
      </div>
      <Form onSubmit={postData}>
        <div
          className="d-flex justify-content-center container flex-column input-wrap"
          style={{ marginTop: "40px", width: "30rem" }}
        >
          <input
            type="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            aria-label="name"
            aria-describedby="basic-addon1"
            style={{ height: "48px", width: "30rem" }}
          />
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            aria-label="email"
            aria-describedby="basic-addon1"
            style={{ height: "48px", marginTop: "14px", width: "30rem" }}
          />
          <input
            type="phone"
            name="phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            aria-label="phone number"
            aria-describedby="basic-addon1"
            style={{ height: "48px", marginTop: "14px", width: "30rem" }}
          />
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="password"
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
            className="btn3 btn-lg btn-round text-light mb-1"
            // onClick={handleLogin}
            style={{
              borderRadius: "15px",
              height: "50px",
              width: "26rem",
              marginLeft: "13%",
            }}
            variant="danger"
          >
            Register
          </Button>

          <p className="text-dark text-center" style={{ margin: "26px" }}>
            Already have a Store.id account?
            <a href="/Login" className="text2 text-danger">
              Login
            </a>
          </p>
        </div>
      </Form>
    </header>
  );
}
