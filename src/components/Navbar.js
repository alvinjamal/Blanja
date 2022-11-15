import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import Logo from "../img/toko.png";
import Filter from "../img/vector.png";
import Roll from "../img/Vector(1).png";

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
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: "10px", height: "40px" }}
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
          <img
            href="/mybag"
            src={Roll}
            alt="Roll"
            style={{ marginLeft: "40px" }}
          />
          <Button href="/login" className="btn-1" variant="danger" size="sm">
            Login
          </Button>
          <Button
            href="/register"
            className="btn-1"
            variant="outline-danger"
            size="sm"
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
