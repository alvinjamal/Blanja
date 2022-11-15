import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./style.css";
import Christian from "../../img/christian.png";
import Vector4 from "../../img/Vector(4).png";
import Vector5 from "../../img/Vector(5).png";
import Vector6 from "../../img/Vector(6).png";

export default function profile() {
  return (
    <header>
      <div class="container-fluid p-3 mb-2 bg-new">
        <div class="container">
          <div class="wrapper">
            <div class="sidebar">
              <section>
                <div class="container">
                  <div class="card-body p-4">
                    <div class="d-flex text-black">
                      <div class="flex-shrink-0">
                        <img
                          src={Christian}
                          alt=""
                          class="img-fluid"
                          style={{
                            verticalAlign: "middle",
                            width: "65px",
                            height: "65px",
                            borderRadius: "50%",
                            marginLeft: "20px",
                          }}
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5
                          class="mb-1"
                          style={{
                            marginLeft: "20px",
                            marginBottom: "10px",
                            marginTop: "5px",
                            color: "black",
                          }}
                        >
                          Johanes Mikael
                        </h5>
                        <p class="mb-2 pb-1" style={{ color: "#9b9b9b" }}>
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
                  <div class="card-body-1 p-4">
                    <div class="d-flex text-black">
                      <div class="flex-shrink-0">
                        <Button
                          class="btn clr-btn"
                          type="submit"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "#456bf3",
                          }}
                        >
                          <img src={Vector4} alt="vector" />
                        </Button>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5
                          class="mb-1"
                          style={{
                            marginLeft: "20px",
                            marginBottom: "10px",
                            marginTop: "5px",
                            color: "black",
                          }}
                        >
                          My account
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="card-body-1 p-4">
                    <div class="d-flex text-black">
                      <div class="flex-shrink-0">
                        <Button
                          class="btn clr-btn"
                          type="submit"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "#f36f45",
                          }}
                        >
                          <img src={Vector5} alt="vector" />
                        </Button>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5
                          class="mb-1"
                          style={{
                            marginLeft: "20px",
                            marginBottom: "10px",
                            marginTop: "5px",
                            color: "#9b9b9b",
                          }}
                        >
                          Shipping Adrress
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="card-body-1 p-4">
                    <div class="d-flex text-black">
                      <div class="flex-shrink-0">
                        <button
                          class="btn clr-btn"
                          type="submit"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "#f3456f",
                          }}
                        >
                          <img src={Vector6} alt="vector" />
                        </button>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5
                          class="mb-1"
                          style={{
                            marginLeft: "20px",
                            marginBottom: "10px",
                            marginTop: "10px",
                            color: "#9b9b9b",
                          }}
                        >
                          My order
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          class="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "890px",
            marginLeft: "440px",
            height: "549px",
          }}
        >
          <div
            class="container text-left"
            style={{ marginBottom: "40px", marginTop: "25px", width: "30rem" }}
          >
            <div class="row align-items-center">
              <div class="col">
                <h3>My Profile</h3>
                <h6 style={{ color: "#9b9b9b" }}>
                  Manage your profile information
                </h6>
                <hr />
                <div class="input-group mb-3">
                  <h6
                    style={{
                      color: "#9b9b9b",
                      marginTop: "8px",
                      marginRight: "135px",
                      marginLeft: "12px",
                    }}
                  >
                    Name
                  </h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Johanes Mikael"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <h6
                    style={{
                      color: "#9b9b9b",
                      marginTop: "8px",
                      marginRight: "135px",
                      marginLeft: "12px",
                    }}
                  >
                    Email
                  </h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="johanes@gmail.com"
                    aria-label="johanes@gmail.com"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <h6
                    style={{
                      color: "#9b9b9b",
                      marginTop: "8px",
                      marginRight: "70px",
                      marginLeft: "12px",
                    }}
                  >
                    Phone number
                  </h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="08901289012"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="col">
                  <div class="form-check">
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1"
                      style={{
                        marginTop: "16px",
                        marginRight: "112px",
                        color: "#9b9b9b",
                      }}
                    >
                      Gender
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1"
                      style={{
                        marginTop: "16px",
                        marginRight: "55px",
                        color: "#9b9b9b",
                      }}
                    >
                      Laki-laki
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1"
                      style={{ marginTop: "16px", color: "#9b9b9b" }}
                    >
                      Perempuan
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check">
                    <label
                      class="form-check-label"
                      for="flexRadioDefault1"
                      style={{
                        marginTop: "16px",
                        marginRight: "112px",
                        color: "#9b9b9b",
                      }}
                    >
                      Date of birth
                    </label>
                    <div class="btn-group">
                      <DropdownButton
                        as={ButtonGroup}
                        title="Date"
                        id="bg-vertical-dropdown-1"
                        variant="light"
                      >
                        <Dropdown.Item eventKey="1">1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3</Dropdown.Item>
                        <Dropdown.Item eventKey="4">4</Dropdown.Item>
                        <Dropdown.Item eventKey="5">5</Dropdown.Item>
                        <Dropdown.Item eventKey="6">6</Dropdown.Item>
                        <Dropdown.Item eventKey="7">7</Dropdown.Item>
                        <Dropdown.Item eventKey="8">8</Dropdown.Item>
                        <Dropdown.Item eventKey="9">9</Dropdown.Item>
                        <Dropdown.Item eventKey="10">10</Dropdown.Item>
                        <Dropdown.Item eventKey="11">11</Dropdown.Item>
                        <Dropdown.Item eventKey="12">12</Dropdown.Item>
                        <Dropdown.Item eventKey="13">13</Dropdown.Item>
                        <Dropdown.Item eventKey="14">14</Dropdown.Item>
                        <Dropdown.Item eventKey="15">15</Dropdown.Item>
                        <Dropdown.Item eventKey="16">16</Dropdown.Item>
                        <Dropdown.Item eventKey="17">17</Dropdown.Item>
                        <Dropdown.Item eventKey="18">18</Dropdown.Item>
                        <Dropdown.Item eventKey="19">19</Dropdown.Item>
                        <Dropdown.Item eventKey="20">20</Dropdown.Item>
                        <Dropdown.Item eventKey="21">21</Dropdown.Item>
                        <Dropdown.Item eventKey="22">22</Dropdown.Item>
                        <Dropdown.Item eventKey="23">23</Dropdown.Item>
                        <Dropdown.Item eventKey="24">24</Dropdown.Item>
                        <Dropdown.Item eventKey="25">25</Dropdown.Item>
                        <Dropdown.Item eventKey="26">26</Dropdown.Item>
                        <Dropdown.Item eventKey="27">27</Dropdown.Item>
                        <Dropdown.Item eventKey="28">28</Dropdown.Item>
                        <Dropdown.Item eventKey="29">29</Dropdown.Item>
                        <Dropdown.Item eventKey="30">30</Dropdown.Item>
                        <Dropdown.Item eventKey="31">31</Dropdown.Item>
                      </DropdownButton>
                    </div>

                    <div class="btn-group">
                      <DropdownButton
                        as={ButtonGroup}
                        title="month"
                        id="bg-vertical-dropdown-1"
                        variant="light"
                      >
                        <Dropdown.Item eventKey="1">January</Dropdown.Item>
                        <Dropdown.Item eventKey="2">February</Dropdown.Item>
                        <Dropdown.Item eventKey="3">March</Dropdown.Item>
                        <Dropdown.Item eventKey="4">April</Dropdown.Item>
                        <Dropdown.Item eventKey="5">May</Dropdown.Item>
                        <Dropdown.Item eventKey="6">June</Dropdown.Item>
                        <Dropdown.Item eventKey="7">July</Dropdown.Item>
                        <Dropdown.Item eventKey="8">August</Dropdown.Item>
                        <Dropdown.Item eventKey="9">September</Dropdown.Item>
                        <Dropdown.Item eventKey="10">October</Dropdown.Item>
                        <Dropdown.Item eventKey="11">November</Dropdown.Item>
                        <Dropdown.Item eventKey="12">December</Dropdown.Item>
                      </DropdownButton>
                    </div>

                    <div class="btn-group">
                      <DropdownButton
                        as={ButtonGroup}
                        title="Year"
                        id="bg-vertical-dropdown-1"
                        variant="light"
                      >
                        <Dropdown.Item eventKey="1">1996</Dropdown.Item>
                        <Dropdown.Item eventKey="2">1997</Dropdown.Item>
                        <Dropdown.Item eventKey="3">1998</Dropdown.Item>
                        <Dropdown.Item eventKey="4">1999</Dropdown.Item>
                        <Dropdown.Item eventKey="5">2000</Dropdown.Item>
                        <Dropdown.Item eventKey="6">2001</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <a href="/login" id="link">
                    <Button
                      class="btn-block btn-md"
                      id="button-save"
                      variant="danger"
                      style={{
                        marginTop: "23px",
                        height: "45px",
                        borderRadius: "40px",
                        marginLeft: "170px",
                      }}
                    >
                      Save
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
