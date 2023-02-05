/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import Style from "./profileCust.module.css";
import { useNavigate } from "react-router-dom";
import Part from "../../img/troli.png";
import Order from "../../img/user1.png";
import Swal from "sweetalert2";
import NavbarComponent from "../../Components/Navbar";
import ModalEdit from "../../Components/Modal/edit";

export default function ProfileCustommer() {
  const token = localStorage.getItem("token");
  // const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [data, setData] = useState(null);
  let users = `${process.env.REACT_APP_API}/users/user`;
  useEffect(() => {
    axios
      .get(users, user)
      .then((res) => {
        console.log("Get data success");
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
    name: data?.name,
    email: data?.email,
    phone: data?.phone,
    gender: data?.gender,
    date: data?.date,
    address: data?.address,
  });

  // const handlePhotoChange = (e) => {
  //   setPhoto(e.target.files[0]);
  //   console.log(e.target.files[0]);
  // };

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
    formData.append("name", updateData.name);
    formData.append("email", updateData.email);
    formData.append("phone", updateData.phone);
    formData.append("gender", updateData.gender);
    formData.append("date", updateData.date);
    formData.append("address", updateData.address);
    console.log(formData);
    axios
      .put(`${process.env.REACT_APP_API}/users/profile`, formData, user, {
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
    <div>
      <NavbarComponent />
      <div className="bg-light w-100 h-100 d-flex flex-row">
        <div
          className="col-3 d-flex flex-column pt-5 "
          style={{ height: "90vh", backgroundColor: "white" }}
        >
          <div className="justify-content-center d-flex flex-row ">
            <div className="d-flex flex-row h-25 justify-content-center ">
              <img
                src={data?.photo}
                alt=""
                className="img rounded-pill"
                style={{ height: "110px", width: "110px" }}
              />
              <div className="d-flex flex-column h-50 mt-3 ms-2">
                <h4 className="myfont ms-3" style={{ fontWeight: "bold" }}>
                  {data?.name}
                </h4>
                <ModalEdit />
              </div>
            </div>
          </div>

          <div className="w-50 justify-content-center d-flex flex-column mt-5 ms-5">
            <Link to="/history">
              <button className="myfont3 btn">
                <div
                  className="btn mx-2"
                  style={{
                    backgroundColor: "#F36F45",
                    borderRadius: "50px",
                    width: "40px",
                  }}
                >
                  <img src={Order} alt="" />
                </div>
                History
              </button>
            </Link>
            <Link to="/mybag">
              <button className="myfont3 btn mb-5">
                <div
                  className="btn mx-2"
                  style={{
                    backgroundColor: "#F3456F",
                    borderRadius: "50px",
                    width: "40px",
                  }}
                >
                  <img src={Part} alt="" />
                </div>
                My Bag
              </button>
            </Link>
          </div>
        </div>
        <div className="container p-5">
          <h2 className="myfont3" style={{ fontWeight: "bold" }}>
            My Profile
          </h2>
          <h5 className="myfont3 color-font mb-3">
            Manage your profile information
          </h5>
          {/* <div className={styles.line}></div> */}

          <div className="container col-12 row">
            <div className="col col-8 row">
              <div className="col-12 row ">
                <div className="col-3 myfont3">Name</div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control mb-3 myfont3"
                    name="name"
                    placeholder={data?.name}
                    onChange={(e) => handleChange(e)}
                    value={updateData.name}
                  />
                </div>
              </div>
              <div className="col-12 row ">
                <div className="col-3 myfont3">Email</div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control  mb-3 myfont3"
                    name="email"
                    placeholder={data?.email}
                    onChange={(e) => handleChange(e)}
                    value={updateData.email}
                  />
                </div>
              </div>
              <div className="col-12 row ">
                <div className="col-3 myfont3">Address</div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control  mb-3 myfont3"
                    name="address"
                    placeholder={data?.address}
                    onChange={(e) => handleChange(e)}
                    value={updateData.address}
                  />
                </div>
              </div>
              <div className="col-12 row ">
                <div className="col-3 myfont3">Phone Number</div>
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control  mb-3 myfont3"
                    name="phone"
                    placeholder={data?.phone}
                    onChange={(e) => handleChange(e)}
                    value={updateData.phone}
                  />
                </div>
              </div>
              <div className="col-12 row ">
                <div className="col-3 myfont3">Gender</div>
                <div className="col-9 row mb-1">
                  <input
                    type="text"
                    className="form-control  mb-2 myfont3 ms-2"
                    name="gender"
                    placeholder={data?.gender}
                    onChange={(e) => handleChange(e)}
                    value={updateData.gender}
                  />
                </div>
                <div className="col-12 row  mt-3">
                  <div className=" col-3 myfont3">Date of birth</div>
                  <div className=" col-9">
                    <input
                      type="text"
                      className="form-control  mb-3 myfont3"
                      name="date"
                      placeholder={data?.date}
                      onChange={(e) => handleChange(e)}
                      value={updateData.date}
                    />
                  </div>
                </div>
              </div>
              <div className="col col-12 row mb-3 mt-2">
                <Button
                  className="col col-3 btn-danger rounded-pill"
                  style={{ marginLeft: "10rem", width: "14rem" }}
                  onClick={(e) => handleData(e)}
                >
                  <h6 className="myfont3 mt-1">Save</h6>
                </Button>
              </div>
            </div>
            <div className="col col-4">
              <img src={data?.photo} className={Style.img} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
