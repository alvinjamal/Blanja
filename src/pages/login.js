import React, { useState } from "react";
import { loginUser } from "../redux/actions/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };
  return (
    <div>
      <Navbar />

      <form onSubmit={postData} className="container mt-5 col-3">
        <input
          type="email"
          className="form-control mb-2"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          className="form-control mb-2"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" className="btn btn-danger">
          login
        </button>
      </form>
    </div>
  );
}
