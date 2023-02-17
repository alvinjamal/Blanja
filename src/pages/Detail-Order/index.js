/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarComponent from "../../components/Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        style={{ width: "500px", height: "49rem" }}
      >
        <Link to="/hystory">
          <Button className=" offset-7 btn btn-danger">
            <h5>Back To Hystory</h5>
          </Button>
        </Link>
        <h4 className="myfont3 my-2 py-4" style={{ fontWeight: "bold" }}>
          Detail Order
        </h4>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Name Product : {data?.name_product}
          </h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">Qty : {data?.qty}</h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Price : {data?.price?.toLocaleString()}
          </h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Total Price : {data?.total?.toLocaleString()}
          </h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">Status : {data?.name_status}</h6>
        </div>
        <div className="btn border mb-3" style={{ width: "470px" }}>
          <h6 className="text-start pt-1">
            Order : {data?.name} - {data?.address}
          </h6>
        </div>
        <div
          className="btn shadow mb-3 p-2 offset-1"
          style={{ width: "400px" }}
        >
          <img
            src={data?.photo}
            alt=""
            style={{
              borderRadius: "15px",
              width: "20rem",
              height: "13rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
