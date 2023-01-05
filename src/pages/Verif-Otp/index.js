import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form, Dropdown } from "react-bootstrap";
import { VerifOtp } from "../../redux/actions/users";
import Toko from "../../img/toko.png";

const VerifyOtp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(otp);
    let data = {
      email,
      otp,
    };
    dispatch(VerifOtp(data, navigate));
  };
  return (
    <div>
      {/* <Container> */}
      <div className="input-wrap container column mt-5 d justify-items-end">
        <div className="input-wrap row d-flex mt-5 justify-content-center row mx-auto">
          <img
            src={Toko}
            alt="Logo"
            style={{ width: "60px", height: "50px" }}
          />
          <h1 className="input-wrap text-danger text-center">Store.id</h1>
        </div>
      </div>
      <div className="d-flex container justify-content-center mt-5">
        <h4 className="mb-4" style={{ fontWeight: "bold" }}>
          Please verification with your account
        </h4>
      </div>
      <Form onSubmit={postData} className="input-wrap container mt-5 col-3">
        <div
          className="d-flex justify-content-center container flex-column input-wrap"
          id="input-wrp"
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
            type="number"
            name="number"
            className="input-wrap form-control"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Otp"
            aria-label="number"
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
            className="input-wrap btn3 btn-lg text-light "
            style={{
              borderRadius: "15px",
              height: "50px",
              width: "31rem",
            }}
            variant="danger"
          >
            Verification
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default VerifyOtp;
