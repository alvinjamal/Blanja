import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import Filter from "../img/vector.png";
import Troli from "../img/troli.png";
import Logo from "../img/toko.png";
import Bell from "../img/bell.png";
import Img from "../img/cris.png";
import Mail from "../img/mail.png";
import { Container, Dropdown, Navbar } from "react-bootstrap";

function NavbarComponent() {
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="p-4"
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
              className="me-2"
              aria-label="Search"
              style={{
                borderRadius: "10px",
                height: "40px",
                width: "25rem",
                marginLeft: "10rem",
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
              <Button variant="light" href="/Profile">
                <img
                  src={Img}
                  alt=""
                  className="nav-1"
                  style={{ marginLeft: "3px" }}
                />
              </Button>
              <div className="col-1" style={{ marginLeft: "5px" }}>
                <Button
                  className="btn btn-danger btn-small"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
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
