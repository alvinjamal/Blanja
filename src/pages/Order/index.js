/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import NavbarComponent from "../../Components/Navbar";

function Order() {
  const [data, setData] = useState([]);
  const [dataDelivery, setDataDelivery] = useState([]);
  const token = localStorage.getItem("token");
  const [id_checkout, setIdCheckout] = useState();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    search: "",
  });
  useEffect(() => {
    getData();
  }, [inputData.search]);
  useEffect(() => {
    getData();
  }, []);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let users = `${process.env.REACT_APP_API}/checkout/all?search=${inputData.search}`;
  const getData = () => {
    axios
      .get(users, user)
      .then((res) => {
        console.log(res.data.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get Data Fail");
        console.log(err);
        setData([]);
      });
  };
  useEffect(() => {
    getDelivery();
  }, [inputData.search]);
  useEffect(() => {
    getDelivery();
  }, []);
  let archived = `${process.env.REACT_APP_API}/checkout/delivery?search=${inputData.search}`;
  const getDelivery = () => {
    axios
      .get(archived, user)
      .then((res) => {
        console.log(res.data.data);
        res.data && setDataDelivery(res.data.data);
      })
      .catch((err) => {
        console.log("Get Data Fail");
        console.log(err);
        setDataDelivery([]);
      });
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const DeliveryData = (id_checkout) => {
    axios
      .put(`${process.env.REACT_APP_API}/checkout/${id_checkout}`, user)
      .then((res) => {
        console.log("Delivered Checkout success");
        console.log(res);
        Swal.fire("Success", "Delivered Checkout success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delivered Checkout failed");
        console.log(err);
        Swal.fire("Warning", "Delivered Checkout failed", "error");
      });
  };
  const [key, setKey] = useState("active");
  return (
    <div>
      <NavbarComponent />
      <div className="container mt-2 p-2 rounded container mt-4 p-2 border border-3">
        <div className="row align-items-center">
          <div className="col-2">
            <h4
              className="text-secondary pt-4 mb-4 ms-3"
              style={{ fontWeight: "bold" }}
            >
              My Order
            </h4>
          </div>
        </div>
        <div className="row rounded-3">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="active" title="Active">
              <div className="bg-white">
                <div className="container mt-2 p-2 rounded ">
                  <h4 className="myfont3" style={{ fontWeight: "bold" }}>
                    Filter
                  </h4>
                  <div className="container d-flex flex-row">
                    <div className="row">
                      <div className="col-5">
                        <div className="search">
                          <input
                            type="text"
                            className="form-control myfont3 rounded-3 mb-3"
                            value={inputData.search}
                            name="search"
                            onChange={handleChange}
                            placeholder="Search"
                            style={{ marginLeft: "4rem", width: "25rem" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="table table-striped table-hover container"
                  style={{ color: "black" }}
                >
                  <thead>
                    <tr>
                      <th className="myfont3">Name Product</th>
                      <th className="myfont3">Status</th>
                      <th className="myfont3">Price Total</th>
                      <th className="myfont3">QTY</th>
                      <th className="myfont3">Action</th>
                      <th className="myfont3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {data.map((item, index) => (
                      <tr key={index + 1}>
                        <td className="myfont3">{item?.name}</td>
                        <td className="myfont3">{item?.name}</td>
                        <td className="myfont3">
                          Rp.{item?.total?.toLocaleString()}
                        </td>
                        <td className="myfont3">{item?.qty}</td>
                        <td>
                          <button
                            className="btn btn-danger text-white"
                            key={item.id_checkout}
                            onClick={() =>
                              navigate(`/Detail-Order/${item.id_checkout}`)
                            }
                          >
                            Detail Order
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-warning text-white"
                            key={item.id_checkout}
                            onClick={() => DeliveryData(item.id_checkout)}
                          >
                            Change Status
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="delivered" title="Delivered">
              <div className="bg-white">
                <div className="container  mt-2 p-2 rounded ">
                  <h6 className="myfont3">Filter</h6>
                  <div className="container d-flex flex-row">
                    <div className="row">
                      <div className="col-5">
                        <div className="search ">
                          <input
                            type="text"
                            className="form-control myfont3 rounded-3 "
                            value={inputData.search}
                            name="search"
                            onChange={handleChange}
                            placeholder="Search"
                            style={{ width: "530px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="table table-striped table-hover container "
                  style={{ color: "black" }}
                >
                  <thead>
                    <tr>
                      <th className="myfont3">Name Product</th>
                      <th className="myfont3">Status</th>
                      <th className="myfont3">Price Total</th>
                      <th className="myfont3">QTY</th>
                      <th className="myfont3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {dataDelivery.map((item, index) => (
                      <tr key={index + 1}>
                        <td className="myfont3">{item?.name}</td>
                        <td className="myfont3">{item?.name}</td>
                        <td className="myfont3">
                          Rp.{item?.total?.toLocaleString()}
                        </td>
                        <td className="myfont3">{item?.qty}</td>
                        <td>
                          <button
                            className="btn btn-danger text-white"
                            key={item.id_checkout}
                            onClick={() =>
                              navigate(`/detail-order/${item.id_checkout}`)
                            }
                          >
                            Detail Order
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Order;
