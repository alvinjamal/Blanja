import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import { registerUserSeller } from "../../redux/actions/users";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../img/toko.png";
import { Form } from "react-bootstrap";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [store, setStore] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      phone,
      password,
      store,
    };
    dispatch(registerUserSeller(data, navigate));
  };
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
          Please sign up with your account
        </h4>
      </div>
      <div className="d-flex mt-3 justify-content-center container ">
        <Button
          href="/Register-Customer"
          className="btn-light btn-block btn-lg"
          variant="outline-danger"
          id="cust"
          style={{ marginRight: "10px", borderRadius: "13px" }}
        >
          Customer
        </Button>
        <Button
          className="btn btn-danger btn-block btn-lg "
          style={{ borderRadius: "13px", width: "8rem" }}
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
            name="name"
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
            name="email"
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
            type="store"
            name="store"
            className="form-control"
            value={store}
            onChange={(e) => setStore(e.target.value)}
            placeholder="Store Name"
            aria-label="store name"
            aria-describedby="basic-addon1"
            style={{ height: "48px", marginTop: "14px", width: "30rem" }}
          />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            className="btn3 btn-lg btn-round text-light mb-3"
            // onClick={handleLogin}
            style={{
              borderRadius: "15px",
              height: "50px",
              width: "31rem",
              marginLeft: "10%",
            }}
            variant="danger"
          >
            Register
          </Button>
        </div>
      </Form>
      <p className="text-dark text-center" style={{ margin: "26px" }}>
        Already have a Store.id account?
        <a href="/login" className="text2 text-danger">
          {" "}
          Login{" "}
        </a>
      </p>
    </header>
  );
}
