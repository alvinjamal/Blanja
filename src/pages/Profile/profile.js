import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Chris from "../../img/mask.png";
import axios from "axios";
import Swal from "sweetalert";
import "./style.css";
import User from "../../img/user.png";
import Prod from "../../img/prod.png";
import Clip from "../../img/user2.png";
import { Row, Col, Form } from "react-bootstrap";
import NavbarComponent from "../../Components/Navbar";

export default function Profile() {
  // const user = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const [data, setData] = useState(null);
  let users = "http://localhost:3500/users/profile";
  useEffect(() => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  // const [photo, setPhotoUser] = useState(null);
  const [updateData, setUpdateData] = useState({
    store: data?.store,
    email: data?.email,
    phone: data?.phone,
    store_description: data?.store_description,
  });

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("store", updateData.store);
    formData.append("email", updateData.email);
    formData.append("phone", updateData.phone);
    console.log(formData);
    axios
      .put(`http://localhost:3500/users/edit-profile-seller`, formData, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log("Update profile succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update profile success", "success");
      })
      .catch((err) => {
        console.log("Update data profile failed");
        console.log(err);
        Swal.fire("Warning", "Update profile failed", "error");
      });
  };

  return (
    <div className="container-fluid mb-2 bg-secondary">
      <NavbarComponent />
      <Row xs={6} md={8} lg={1}>
        <Col>
          <div className="container">
            <div className="wrapper">
              <div className="sidebar">
                <section>
                  <div className="container">
                    <div className="card-body p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <img
                            src={Chris}
                            alt=""
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
                              color: "black",
                            }}
                          >
                            Johanes Mikael
                          </h5>
                          <p className="mb-2 pb-1" style={{ color: "#9b9b9b" }}>
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
                            }}
                          >
                            <img src={Prod} alt="vector" />
                          </Button>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5
                            className="mb-1"
                            style={{
                              marginLeft: "20px",
                              marginBottom: "10px",
                              marginTop: "5px",
                              color: "black",
                            }}
                          >
                            Product
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card-body-1 p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <button
                            className="btn clr-btn"
                            type="submit"
                            style={{
                              borderRadius: "50%",
                              backgroundColor: "#f3456f",
                            }}
                          >
                            <img src={Clip} alt="vector" />
                          </button>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5
                            className="mb-1"
                            style={{
                              marginLeft: "20px",
                              marginBottom: "10px",
                              marginTop: "10px",
                              color: "#9b9b9b",
                            }}
                          >
                            Order
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div
            className="container-left shadow p-3 mb-5 mt-5 bg-body rounded"
            style={{
              backgroundColor: "black",
              width: "58rem",
              marginLeft: "26rem",
              height: "549px",
            }}
          >
            <div
              className="container text-left"
              style={{
                marginBottom: "40px",
                marginTop: "25px",
                width: "70rem",
              }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <h3>My Profile</h3>
                  <h6 style={{ color: "#9b9b9b" }}>
                    Manage your profile information
                  </h6>
                  <hr />
                  <div className="input-group mb-3">
                    <h6
                      style={{
                        color: "#9b9b9b",
                        marginTop: "8px",
                        marginRight: "134px",
                        marginLeft: "12px",
                      }}
                    >
                      Name
                    </h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Johanes Mikael"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <h6
                      style={{
                        color: "#9b9b9b",
                        marginTop: "8px",
                        marginRight: "139px",
                        marginLeft: "12px",
                      }}
                    >
                      Email
                    </h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="@gmail.com"
                      aria-label="@gmail.com"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <h6
                      style={{
                        color: "#9b9b9b",
                        marginTop: "8px",
                        marginRight: "71px",
                        marginLeft: "12px",
                      }}
                    >
                      Phone number
                    </h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="08901289012"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col">
                    <div className="form-check text-left">
                      <label
                        className="input-group"
                        for="flexRadioDefault1"
                        style={{
                          marginTop: "16px",
                          marginRight: "112px",
                          color: "#9b9b9b",
                        }}
                      >
                        Gender
                      </label>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        type="radio"
                        style={{
                          marginTop: "16px",
                          marginRight: "55px",
                          color: "#9b9b9b",
                        }}
                      >
                        Male
                      </label>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{ marginTop: "16px", color: "#9b9b9b" }}
                      >
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        style={{
                          marginTop: "16px",
                          marginRight: "2rem",
                          color: "#9b9b9b",
                        }}
                      >
                        Date of birth
                      </label>
                      <div className="btn-group">
                        <Form.Select
                          aria-label="Default select example"
                          style={{ width: "10rem" }}
                        >
                          <option value={0}>Dates</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </Form.Select>
                        <Form.Select
                          aria-label="Default select example"
                          style={{
                            width: "6rem",
                            marginLeft: "12px",
                            marginRight: "7px",
                          }}
                        >
                          <option value={0}>Months</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </Form.Select>
                        <Form.Select
                          aria-label="Default select example"
                          style={{ width: "10rem" }}
                        >
                          <option value={0}>Years</option>
                          <option value="1">2008</option>
                          <option value="2">2007</option>
                          <option value="3">2006</option>
                          <option value="4">2005</option>
                          <option value="5">2004</option>
                          <option value="6">2003</option>
                          <option value="7">2002</option>
                          <option value="8">2001</option>
                          <option value="9">1999</option>
                          <option value="10">1998</option>
                          <option value="11">1997</option>
                          <option value="12">1996</option>
                          <option value="13">1995</option>
                          <option value="14">1994</option>
                        </Form.Select>
                      </div>
                    </div>
                    <a href="/" id="link">
                      <Button
                        className="btn-block btn-md"
                        id="button-save"
                        variant="danger"
                        style={{
                          marginTop: "23px",
                          height: "45px",
                          width: "10rem",
                          borderRadius: "40px",
                          marginLeft: "170px",
                        }}
                      >
                        Save
                      </Button>
                    </a>
                  </div>
                </div>
                <Col>
                  <div style={{ marginTop: "7rem", marginLeft: "8rem" }}>
                    <img src={Chris} alt="" width={100} />
                  </div>
                  <Button
                    className="btn btn-gray btn-block btn-md"
                    id="button-cust-3"
                    variant="outline-danger"
                    style={{
                      marginTop: "23px",
                      height: "40px",
                      width: "13rem",
                      borderRadius: "40px",
                      border: "1px solid",
                      marginLeft: "4rem",
                      color: "#9b9b9b",
                    }}
                  >
                    Select Image
                  </Button>
                </Col>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
