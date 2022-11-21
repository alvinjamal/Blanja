import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import Logo from "../img/toko.png";
import Filter from "../img/vector.png";
import Roll from "../img/Vector(1).png";
// import ButtonLogin from "./components/ButtonLogin";
// import MyButtonSignUp from "./components/MyButtonSignUp";
// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
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
          <Nav className="me-auto">
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="./product">Product</Nav.Link>
            <Nav.Link href="./loginSeller">Login Seller</Nav.Link>
            <Nav.Link href="./login">Login</Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: "13px", height: "40px" }}
            />
          </Form>
          <Button
            variant="light"
            style={{ width: "40px", marginRight: "10px" }}
          >
            <img
              src={Filter}
              alt="Filter"
              style={{
                width: "25px",
                height: "20px",
                marginRight: "20px",
                paddingRight: "8px",
              }}
            />
          </Button>
          <Button variant="light">
            <img
              href="/myBag"
              src={Roll}
              alt="Roll"
              style={{ marginLeft: "30px" }}
            />
          </Button>
          <Button
            href="/login"
            className="btn-1"
            variant="danger"
            size="sm"
            style={{ borderRadius: "13px" }}
          >
            Login
          </Button>
          <Button
            href="/register"
            className="btn-1"
            variant="outline-danger"
            size="sm"
            style={{ borderRadius: "13px" }}
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
