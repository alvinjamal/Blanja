/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import Filter from "../img/vector.png";
import Troli from "../img/troli.png";
import Logo from "../img/toko.png";
import Bell from "../img/bell.png";
import Img from "../img/cris.png";
import Mail from "../img/mail.png";
import User from "../img/mask.png";
import axios from "axios";
import { Container, Dropdown, Navbar } from "react-bootstrap";
// import ProfileImage from "./Profile/profile";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

function NavbarComponent() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const logout = () => {
    Swal.fire({
      title: "Logout Success",
      text: `Tap To Login`,
      icon: "success",
    }).then(() => {
      navigate("/Login");
    });
    localStorage.clear();
  };

  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(true);
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    brand: "",
    category_id: "",
    search: "",
  });
  const [selected, setSelected] = useState(null);
  const messageTime = () => {
    setTimeout(() => setMessageShow(false), 3000);
  };

  let users = `${process.env.REACT_APP_API_PRODUCT}?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
  const getData = () => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
        !selected && setMessageShow(true);
        !selected &&
          setMessage({
            title: "success",
            text: "get data success",
            type: "success",
          });
        !selected && messageTime();
        setSelected(null);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
        setData([]);
        setMessageShow(true);
        setMessage({ title: "fail", text: "get data fail", type: "danger" });
        messageTime();
      });
  };
  useEffect(() => {
    getData();
  }, [inputData.search]);
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="container-fluid p-3"
      id="responsive-navbar-nav"
      style={{ justifyContent: "end" }}
    >
      <Container fluid>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "30px", marginRight: "10px" }}
        />
        <Navbar.Brand href="/home">Store.id</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "end" }}
        >
          <Form
            className=" "
            id="responsive-navbar-nav"
            style={{ justifyContent: "left", marginRight: "15rem" }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              name="search"
              className="me-2"
              value={inputData.search}
              aria-label="Search"
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                height: "40px",
                width: "25rem",
                marginLeft: "rem",
              }}
            />
          </Form>
          {token ? (
            <>
              <Button variant="light">
                <img
                  src={Filter}
                  alt=""
                  className="nav-1"
                  style={{ marginLeft: "3px" }}
                />
              </Button>
              <Button variant="light" href="/My-Bag">
                <img
                  src={Troli}
                  alt=""
                  className="nav-1"
                  style={{ marginLeft: "3px" }}
                />
              </Button>
              <Button variant="light">
                <img
                  src={Bell}
                  alt=""
                  className="nav-1"
                  style={{ marginLeft: "3px" }}
                />
              </Button>
              <Button variant="light" href={"/Product"}>
                <img
                  src={Mail}
                  alt=""
                  className="nav-1"
                  style={{ marginLeft: "3px" }}
                />
              </Button>
              <>
                {data.role === "Seller" ? (
                  <Link to="/Profile">
                    <Avatar alt="Remy Sharp" src={User} />
                  </Link>
                ) : (
                  <Link to="/Profile-Cust">
                    <Avatar alt="Remy Sharp" src={User} />
                  </Link>
                )}
                <div className="col-1" style={{ marginLeft: "8px" }}>
                  <Button
                    className="btn btn-danger btn-small"
                    onClick={() => logout()}
                  >
                    Logout
                  </Button>
                </div>
              </>
            </>
          ) : (
            <>
              <Button
                href="/Login"
                id="responsive-navbar-nav"
                style={{
                  justifyContent: "end",
                  borderRadius: "7px",
                  marginLeft: "14rem",
                  marginRight: "3px",
                  height: "36px",
                }}
                className="btn-1"
                variant="danger"
                size="sm"
              >
                Login
              </Button>
              <Dropdown
                style={{
                  marginleft: "10rem",
                  borderRadius: "7px",
                }}
              >
                <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                  Register
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/Register-Seller">Seller</Dropdown.Item>
                  <Dropdown.Item href="Register-Customer">
                    Customer
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
