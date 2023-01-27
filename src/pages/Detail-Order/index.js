/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar";

export default function DetailOrder() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const { id_checkout } = useParams();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/checkout/${id_checkout}`, user)
      .then((res) => {
        console.log("Get data checkout success");
        console.log(res.data);
        setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get data checkout fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <NavbarComponent />
      <div
        className="container mt-5 shadow"
        style={{ width: "500px", height: "430px" }}
      >
        <h4 className="myfont3 my-4 py-4">Detail Order</h4>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">Name Product : {data?.name}</h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">Qty : {data?.qty}</h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Total Price : {data?.total.toLocaleString()}
          </h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">Status : {data?.name}</h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Order : {data?.name} - {data?.address}
          </h6>
        </div>
      </div>
    </div>
  );
}
