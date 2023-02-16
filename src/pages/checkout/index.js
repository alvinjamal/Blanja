/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./checkout.module.css";
import { Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";
import Gopay from "../../img/gopay.png";
import Pos from "../../img/pos.png";
import Card from "../../img/card.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarComponent from "../../components/Navbar";

export default function Checkout() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [id_checkout, setIdCheckout] = useState("");
  const navigate = useNavigate();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/checkout/all`, user)
      .then((res) => {
        console.log("Get data checkout success");
        console.log(res.data);
        setData(res.data.data[0]);
        setIdCheckout(res.data.data[0].id_checkout);
      })
      .catch((err) => {
        console.log("Get data checkout failed");
        console.log(err);
      });
  }, []);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const postData = async (e) => {
    e.preventDefault();
    let form = {
      id_checkout: id_checkout,
    };
    axios
      .put(`${process.env.REACT_APP_API}/checkout/${id_checkout}`, form, user)
      .then((res) => {
        console.log("Checkout success");
        console.log(res);
        Swal.fire({
          title: "Success",
          text: "Checkout success, Wait, To Hystory.",
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/hystory");
        });
      })

      .catch((err) => {
        console.log("Checkout failed");
        console.log(err);
        Swal.fire("Warning", "Checkout failed", "error");
      });
  };
  return (
    <div>
      <NavbarComponent />
      <div className="container-fluid bg-new">
        <div className="container py-3">
          <h2 className="myfont text-title" style={{ fontWeight: "bold" }}>
            Checkout
          </h2>
          <h5 className="text-title myfont3">Shipping Adress</h5>
          <div className="container col-12 row py-3">
            <div className="col col-8 row">
              <div className="container col-12 row">
                <div
                  className="col col-12 row container shadow py-3 align-items-center"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="col-12">
                    <h6 className="myfont">{data?.name}</h6>
                  </div>
                  <div className="row py-4">
                    <div className="col-12">
                      <h6 className="myfont3">{data?.address}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container col-12 row py-3">
                <div
                  className="col col-12 row container shadow py-3 align-items-center"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="col-2">
                    <img
                      src={data?.photo}
                      style={{ height: "70px", width: "70px" }}
                      alt=""
                      className="bag-pruduct"
                    />
                  </div>
                  <div className="col-4">
                    <h4 className="myfont">{data?.name_product}</h4>
                    <h5 className="myfont3 color-font">{data?.brand}</h5>
                  </div>
                  <div className="col col-2">
                    <h5 className="myfont">Qty: {data?.qty}</h5>
                  </div>
                  <div className="col col-2 offset-">
                    <h5 className="myfont">
                      Rp. {data?.price?.toLocaleString()}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="container col-4">
              <div
                className="col col-12 row container shadow py-3"
                style={{ backgroundColor: "white" }}
              >
                <div className="col col-12">
                  <h6 className="myfont" style={{ color: "black" }}>
                    Shopping Summary
                  </h6>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col-4">
                    <img src={Gopay} alt="" />
                  </div>
                  <div className="col-4">
                    <h5 className="myfont3">Gopay</h5>
                  </div>
                  <div className="col-4">
                    <Checkbox
                      {...label}
                      sx={{
                        color: red[800],
                        "&.Mui-checked": { color: red[600] },
                      }}
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-4">
                    <img src={Pos} alt="" />
                  </div>
                  <div className="col-4">
                    <h5 className="myfont3">Pos Indonesia</h5>
                  </div>
                  <div className="col-4">
                    <Checkbox
                      {...label}
                      sx={{
                        color: red[800],
                        "&.Mui-checked": { color: red[600] },
                      }}
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-4">
                    <img
                      src={Card}
                      alt=""
                      style={{ width: "54px", height: "38px" }}
                    />
                  </div>
                  <div className="col-4">
                    <h5 className="myfont3">Mastercard</h5>
                  </div>
                  <div className="col-4">
                    <Checkbox
                      {...label}
                      sx={{
                        color: red[800],
                        "&.Mui-checked": { color: red[600] },
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6 className="myfont" style={{ color: "black" }}>
                      Shopping summary
                    </h6>
                  </div>
                  <div className="col-3 offset-3">
                    <h6 className="myfont text-danger">
                      Rp.{data?.total?.toLocaleString()}
                    </h6>
                  </div>
                </div>
                <div className="row align-items-center py-3">
                  <div className="col-12">
                    <button
                      class="btn btn-danger myfont3"
                      onClick={postData}
                      style={{
                        height: "50px",
                        borderRadius: "40px",
                        width: "350px",
                      }}
                    >
                      <h6 className="myfont3" style={{ marginTop: "9px" }}>
                        Buy
                      </h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
