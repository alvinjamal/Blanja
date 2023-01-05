import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/esm/DropdownItem";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import "./style.css";
import Christian from "../../img/christian.png";
import Bell from "../../img/page3.png";

export default function Selling() {
  return (
    <header>
      <div className="container-fluid p-3 mb-2 bg-new">
        <div className="container">
          <div className="wrapper">
            <div className="sidebar">
              <div className="container">
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img
                        src={Christian}
                        alt="Christian"
                        className="img-fluid"
                        style={{
                          verticalAlign: "middle",
                          width: "65px",
                          height: "65px",
                          borderRadius: "50%",
                          marginLeft: "20px",
                        }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5
                        className="mb-1"
                        style={{
                          marginLeft: "20px",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      >
                        Johanes Mikael
                      </h5>
                      <p className="mb-2 pb-1 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{
                            width: "19px",
                            height: "19px",
                            marginLeft: "20px",
                            color: "#9b9b9b",
                          }}
                        >
                          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                        </svg>
                        Ubah profile
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body-1 p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <Button
                        className="btn clr-btn"
                        type="submit"
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "#456bf3",
                          width: "50px",
                        }}
                      >
                        <img src={Bell} alt="vector" />
                      </Button>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="btn-group">
                        <Dropdown as={ButtonGroup}>
                          <Button variant="success">Store</Button>

                          <Dropdown.Toggle
                            split
                            variant="success"
                            id="dropdown-split-basic"
                          />

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body-1 p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <Button
                      className="btn clr-btn"
                      type="submit"
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                      }}
                    >
                      <img src={Bell} alt="vector" />
                    </Button>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="btn-group">
                      <Button
                        type="Button"
                        className="btn dropdown-toggle text-light"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{}}
                      >
                        Product
                      </Button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Button
                          className="dropdown-item"
                          type="Button"
                          style={{ color: "#9b9b9b" }}
                        >
                          My products
                        </Button>
                        <Button className="dropdown-item" type="Button">
                          Selling products
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body-1 p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <Button
                      className="btn clr-btn"
                      type="submit"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#f3456f",
                        width: "50px",
                      }}
                    >
                      <img src={Bell} alt="vector" />
                    </Button>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="btn-group">
                      <Button
                        type="Button"
                        className="btn dropdown-toggle text-light"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{}}
                      >
                        Order
                      </Button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Button
                          className="dropdown-item"
                          type="Button"
                          style={{ color: "#9b9b9b" }}
                        >
                          Order1
                        </Button>
                        <Button className="dropdown-item" type="Button">
                          Order2
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "890px",
            marginLeft: "440px",
          }}
        >
          <div className="container text-left" style={{ marginBottom: "10px" }}>
            <div className="row align-items-center">
              <div className="col">
                <h3>Inventory</h3>
                <hr />
                <h6
                  style={{
                    color: "#9b9b9b",
                    marginTop: "11px",
                    marginRight: "135px",
                    marginLeft: "12px",
                  }}
                >
                  Name of goods
                </h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{
                    marginLeft: "11px",
                    marginBottom: "10px",
                    width: "390px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "890px",
            marginLeft: "440px",
          }}
        >
          <div className="container text-left" style={{ marginBottom: "10px" }}>
            <div className="row align-items-center">
              <div className="col">
                <h3>Item details</h3>
                <hr />
                <h6
                  style={{
                    color: "#9b9b9b",
                    marginTop: "11px",
                    marginRight: "135px",
                    marginLeft: "12px",
                  }}
                >
                  Unit price
                </h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{
                    marginLeft: "11px",
                    marginBottom: "10px",
                    width: "390px",
                  }}
                />
                <h6
                  style={{
                    color: "#9b9b9b",
                    marginTop: "11px",
                    marginRight: "135px",
                    marginLeft: "12px",
                  }}
                >
                  Stock
                </h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{
                    marginLeft: "11px",
                    marginBottom: "10px",
                    width: "390px",
                  }}
                />
                <h6
                  style={{
                    color: "#9b9b9b",
                    marginTop: "11px",
                    marginRight: "100px",
                    marginLeft: "12px",
                  }}
                >
                  Stock
                </h6>
                <div className="col">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    for="flexRadioDefault1"
                    style={{
                      marginTop: "20px",
                      marginRight: "50px",
                      color: "#9b9b9b",
                    }}
                  >
                    Baru
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginTop: "16px", color: "#9b9b9b" }}
                  >
                    Bekas
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "890px",
            marginLeft: "440px",
            marginTop: "10px",
          }}
        >
          <div
            className="container text-left"
            style={{ marginBottom: "10px", marginLeft: "10px" }}
          >
            <div className="row align-items-center">
              <div className="col">
                <h3>Photo of goods</h3>
                <hr />
                <div className="col" style={{ borderStyle: "dashed" }}>
                  <Button
                    className="btn-img width: auto; height: 120px"
                    style={{ backgroundColor: "#9b9b9b", marginTop: "30px" }}
                  >
                    <img
                      src="/img/Vector(11).png"
                      alt=""
                      style={{ margin: "60px" }}
                    />
                  </Button>
                  <Button
                    className="btn-img"
                    style={{ backgroundColor: "#9b9b9b" }}
                  >
                    <img
                      src="/img/Vector(11).png"
                      alt=""
                      style={{ margin: "20px" }}
                    />
                  </Button>
                  <Button
                    className="btn-img"
                    style={{ backgroundColor: "#9b9b9b" }}
                  >
                    <img
                      src="/img/Vector(11).png"
                      alt=""
                      style={{ margin: "20px" }}
                    />
                  </Button>
                  <Button
                    className="btn-img"
                    style={{ backgroundColor: "#9b9b9b" }}
                  >
                    <img
                      src="/img/Vector(11).png"
                      alt=""
                      style={{ margin: "20px" }}
                    />
                  </Button>
                  <Button
                    className="btn-img"
                    style={{ backgroundColor: "#9b9b9b" }}
                  >
                    <img
                      src="/img/Vector(11).png"
                      alt=""
                      style={{ margin: "20px" }}
                    />
                  </Button>
                  <hr style={{ marginTop: "30px" }} />
                  <a href="loginCustommer.html" id="link">
                    <Button
                      className="text-dark btn-block "
                      id="Button-save"
                      variant="outline-light"
                      style={{
                        marginTop: "23px",
                        height: "45px",
                        border: "1px solid",
                        borderRadius: "40px",
                        marginLeft: "290px",
                        width: "170px",
                        marginBottom: "20px",
                      }}
                    >
                      Upload foto
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "890px",
            marginLeft: "440px",
            marginTop: "10px",
          }}
        >
          <div className="container text-left" style={{ marginBottom: "10px" }}>
            <div className="row align-items-center">
              <div className="col">
                <h3>Description</h3>
                <div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
