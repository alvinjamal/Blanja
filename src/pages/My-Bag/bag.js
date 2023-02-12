/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar";

function MyBag() {
  const [data, setData] = useState([]);
  const [transaction_id, setTransactionId] = useState("");
  const [product_id, setProductId] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/transaction`, user)
      .then((res) => {
        console.log("Get data MyBag success");
        console.log(res.data);
        setData(res.data.data);
        setTransactionId(res.data.data[0].id_transaction);
        setProductId(res.data.data[0].product_id);
      })
      .catch((err) => {
        console.log("Get data MyBag fail");
        console.log(err);
      });
  }, []);

  const DeleteMyBag = (id_transaction) => {
    axios
      .delete(
        `${process.env.REACT_APP_API}/transaction/delete/${id_transaction}`
      )
      .then((res) => {
        console.log("Delete MyBag success");
        console.log(res.data);
        Swal.fire("Success", "Delete MyBag success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete MyBag failed");
        console.log(err);
        Swal.fire("Warning", "Delete MyBag failed", "error");
      });
  };

  const postData = async (e) => {
    e.preventDefault();
    let form = {
      transaction_id: transaction_id,
      product_id: product_id,
    };
    axios
      .post(`${process.env.REACT_APP_API}/checkout/post`, form, user)
      .then((res) => {
        console.log("Checkout success");
        console.log(res);
        Swal.fire({
          title: "Success",
          text: "Transaction success, Tap Ok To Checkout.",
          icon: "success",
        }).then(() => {
          navigate("/Checkout");
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
      <di className="body">
        <div className="container-fluid bg-new">
          <div className="container py-3">
            <h2 className="myfont text-title" style={{ fontWeight: "bold" }}>
              My Bag
            </h2>
            <div className="container col-12 row py-3">
              <div className="col col-8 row">
                <div className="container col-12 row">
                  {data ? (
                    data.map((item) => (
                      <div
                        className="col col-12 row container shadow py-3 align-items-center mb-3"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="col-1">
                          <img
                            src={item.photo}
                            style={{ height: "70px", width: "70px" }}
                            alt=""
                            className="product"
                          />
                        </div>
                        <div className="col-2 offset-1">
                          <h5 className="myfont">{item.name_product}</h5>

                          <div className="col-6">
                            <h6 className="myfont3 color-font">{item.brand}</h6>
                          </div>
                        </div>
                        <div className=" col-1 offset-1">
                          <span className="myfont3">{item.qty}</span>
                        </div>
                        <div className=" col-3 offset-1">
                          <h6 className="myfont">
                            Rp.{item.total.toLocaleString()}
                          </h6>
                        </div>
                        <div
                          className=" col-1 offset- text-danger btn "
                          key={item.id_transaction}
                          onClick={() => DeleteMyBag(item.id_transaction)}
                        >
                          <h6 className="myfont">Delete</h6>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h2>Please Wait...</h2>
                  )}
                </div>
              </div>
              <div className="container col-4">
                <div
                  className="col col-12 row container shadow py-3"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="col col-12">
                    <h6 className="myfont">Shopping Summary</h6>
                  </div>
                  {data ? (
                    data.map((item) => (
                      <div className="row py-3">
                        <div className="col-6">
                          <h6 className="myfont3" style={{ color: "#9B9B9B" }}>
                            Total price
                          </h6>
                        </div>
                        <div className="col-3 offset-3">
                          <h6 className="myfont">
                            {item.total.toLocaleString()}
                          </h6>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h2>Please Wait...</h2>
                  )}

                  <div className="row align-items-center py-3">
                    <div className="col-12">
                      {/* <Link to="/checkout" className="link"> */}
                      <button
                        className="btn btn-danger myfont"
                        onClick={postData}
                        style={{
                          height: "50px",
                          borderRadius: "40px",
                          width: "350px",
                        }}
                      >
                        <p className="myfont3" style={{ marginTop: "7px" }}>
                          Buy
                        </p>
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </di>
    </div>
  );
}

export default MyBag;
