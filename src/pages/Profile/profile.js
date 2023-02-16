/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "./profile.module.css";
import Part from "../../img/user.png";
import Order from "../../img/user1.png";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import NavbarComponent from "../../components/Navbar";
import ModalEdit from "../../components/Modal/editProfile";
import { Button } from "react-bootstrap";

export default function ProfileSeller() {
  const token = localStorage.getItem("token");
  // const navigate = useNavigate();
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
        console.log("get data success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);

  const [updateData, setUpdateData] = useState({
    store: data?.store,
    email: data?.email,
    phone: data?.phone,
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
      .put(`${process.env.REACT_APP_API}/users/seller`, formData, user, {
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
                style={{ height: "140px", width: "140px" }}
              />
              <div className="d-flex flex-column h-50 mt-3 ms-2">
                <h5 style={{ fontWeight: "bold" }} className="myfont ms-3">
                  {data?.name}
                </h5>
                <ModalEdit />
              </div>
            </div>
          </div>
          <div className="w-50 justify-content-center d-flex flex-column mt-5 ms-5">
            <Link to="/Product">
              <button className="myfont3 btn">
                <div
                  className="btn mx-2"
                  style={{
                    backgroundColor: "#F36F45",
                    borderRadius: "50px",
                    width: "40px",
                  }}
                >
                  <img src={Part} alt="" />
                </div>
                Product
              </button>
            </Link>
            <Link to="/Order">
              <button className="myfont3 btn">
                <div
                  className="btn mx-2"
                  style={{
                    backgroundColor: "#F3456F",
                    borderRadius: "50px",
                    width: "40px",
                  }}
                >
                  <img src={Order} alt="" />
                </div>
                Order
              </button>
            </Link>
          </div>
        </div>
        <div className="container p-5 border">
          <h2 className="myfont3" style={{ fontWeight: "bold" }}>
            My Profile
          </h2>
          <h5 className="myfont3 color-font mb-3">
            Manage your profile information
          </h5>
          <div className={Style.line}></div>

          <div className="container col-12 row">
            <div className="col col-8 row">
              {/* form */}
              <div className="col col-12 row ">
                <div className="col col-3 myfont3">Name Store</div>
                <div className="col col-9">
                  <input
                    type="text"
                    className="form-control mb-3 myfont3"
                    name="store"
                    placeholder={data?.store}
                    onChange={(e) => handleChange(e)}
                    value={updateData.store}
                  />
                </div>
              </div>
              <div className="col col-12 row ">
                <div className="col col-3 myfont3">Email</div>
                <div className="col col-9">
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
              <div className="col col-12 row ">
                <div className="col col-3 myfont3">Phone Number</div>
                <div className="col col-9">
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
              <img
                src={data?.photo}
                className={Style.img}
                alt="PhotoNotFound"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
