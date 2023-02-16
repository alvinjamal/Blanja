/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import NavbarComponent from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductDetail() {
  const [data, setData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [product_id, setProductId] = useState("");
  const [status, setStatus] = useState("1");
  const [total, setTotalTransaction] = useState("");
  const [qty, setQtyTransaction] = useState(1);
  const navigate = useNavigate();
  const { id_product } = useParams();
  const token = localStorage.getItem("token");

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const product = `${process.env.REACT_APP_API_PRODUCT}`;
  useEffect(() => {
    const getdata = async () => {
      try {
        let result = await axios.get(product);
        setData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/products/${id_product}`)
      .then((res) => {
        console.log("Get detail product success");
        console.log(res.data);
        setDataProduct(res.data.data[0]);
        setProductId(res.data.data[0].id_product);
        setTotalTransaction(res.data.data[0].price);
      })
      .catch((err) => {
        console.log("Get detail product fail");
        console.log(err);
      });
  }, []);
  const postData = async (e) => {
    e.preventDefault();
    let form = {
      product_id: product_id,
      total: total * qty,
      qty: qty,
      status: status * 1,
    };
    axios
      .post(`${process.env.REACT_APP_API}/transaction/add`, form, user)
      .then((res) => {
        console.log("Add product To Bag Success");
        console.log(res);
        Swal.fire({
          title: "Success",
          text: "Add product To My Bag success, Tap Ok To My Bag.",
          icon: "success",
        });
        navigate("/My-Bag");
      })
      .catch((err) => {
        console.log("Add product To My Bag failed");
        console.log(err);
        Swal.fire("Warning", "Add Product To Bag Failed", "error");
      });
  };

  // const [category, setCategory] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API}/category`)
  //     .then((res) => {
  //       console.log("Get category success");
  //       console.log(res.data);
  //       res.data && setCategory(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log("Get category fail");
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <NavbarComponent />
      <div className="container-fluid bg-new">
        <div className="container py-3">
          <div className="row py-4">
            <div className="col-1">
              <Link to="/Home" className="detail">
                <h6 className="color-font myfont3">Home</h6>
              </Link>
            </div>
            {/* <div className="col-1">
              <h6 className="myfont3 color-font">
                <FaChevronRight />
                category
              </h6>
            </div>
            <div className="col-1">
              {category.map((item) => (
                <h6 className="myfont3 color-font">
                  <FaChevronRight />
                  {item.name}
                </h6>
              ))}
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="col-md-12">
                <img
                  src={dataProduct.photo}
                  alt=""
                  style={{
                    borderRadius: "15px",
                    width: "24rem",
                    height: "500px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="ml-2" style={{ textDecoration: "none" }}>
                <h3 className="myfont text-dark">{dataProduct.name_product}</h3>
                <h6 className="myfont3 color-font">{dataProduct.brand}</h6>
                <h6 className="mb-5">
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <span className="myfont3 color-font">(10)</span>
                </h6>
                <h6 className="color-font myfont3">Price</h6>
                <h3 className="myfont mb-5">
                  Rp.{dataProduct.price?.toLocaleString()}
                </h3>
                <h6 className="myfont">Color</h6>
                <button
                  className="btn btn-dark button-color"
                  style={{ borderRadius: "50px" }}
                ></button>
                <button
                  className="btn btn-danger button-color"
                  style={{ borderRadius: "50px", marginLeft: "10px" }}
                ></button>
                <button
                  className="btn btn-primary button-color"
                  style={{ borderRadius: "50px", marginLeft: "10px" }}
                ></button>
                <button
                  className="btn btn-success button-color"
                  style={{ borderRadius: "50px", marginLeft: "10px" }}
                ></button>
                <div className="row mt-5 mb-3">
                  {/* <div className="col-md-6">
                    <h6 className="myfont" style={{ marginLeft: "29px" }}>
                      Size
                    </h6>
                    <button
                      className=" btn-min "
                      style={{ borderRadius: "50%", marginRight: "10px" }}
                    >
                      -
                    </button>
                    <span className="myfont3">1</span>
                    <button
                      className=" btn-plus shadow"
                      style={{ borderRadius: "50%", marginLeft: "10px" }}
                    >
                      +
                    </button>
                  </div> */}
                  <div className="col-md-6">
                    <h6 className="myfont" style={{ marginLeft: "7px" }}>
                      Jumlah
                    </h6>
                    <button
                      className=" btn-min "
                      onClick={() => setQtyTransaction(qty - 1)}
                      style={{ borderRadius: "50%", marginRight: "10px" }}
                    >
                      -
                    </button>
                    <span className="myfont3">{qty}</span>
                    <button
                      className=" btn-plus shadow"
                      onClick={() => setQtyTransaction(qty + 1)}
                      style={{ borderRadius: "50%", marginLeft: "10px" }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <button className="btn btn-outline-secondary btn-in-product rounded-pill">
                      <h6 className="myfont3" style={{ marginTop: "5px" }}>
                        Chat
                      </h6>
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button className="btn btn-outline-secondary btn-in-product rounded-pill">
                      <h6 className="myfont3" style={{ marginTop: "5px" }}>
                        Add bag
                      </h6>
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="submit"
                      onClick={postData}
                      className="btn btn-danger btn-in-product2 rounded-pill"
                    >
                      <h6 className="myfont3" style={{ marginTop: "5px" }}>
                        Buy Now
                      </h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="myfont mt-5 mb-5">Informasi Produk</h3>
              <h4 className="myfont3">Condition</h4>
              <h5 className="myfont3 text-danger mb-5">New</h5>
              <h4 className="myfont3">Description</h4>
              <h3 className="myfont mt-5 mb-5">Product review</h3>
              <div className="row">
                <div className="col-md-2">
                  <h1 className="myfont">5.0</h1>
                  <h4 className="mb-5">
                    <FaStar className="fastar" />
                    <FaStar className="fastar" />
                    <FaStar className="fastar" />
                    <FaStar className="fastar" />
                    <FaStar className="fastar" />
                  </h4>
                </div>
                <div className="col-1">
                  <p>5</p>
                  <p>4</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>
                </div>
                <div className="col-2">
                  <p>
                    <div className="progress-1">
                      <div
                        className="progress-bar-1"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{
                          width: "100%",
                          ariaValuenow: "100",
                          ariaValuemin: "0",
                          ariaValuemax: "100",
                        }}
                      ></div>
                    </div>
                  </p>
                  <p>
                    <div className="progress-2">
                      <div
                        className="progress-bar-1"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{
                          width: "100%",
                          ariaValuenow: "100",
                          ariaValuemin: "0",
                          ariaValuemax: "100",
                        }}
                      ></div>
                    </div>
                  </p>
                  <p>
                    <div className="progress-3">
                      <div
                        className="progress-bar-1"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{
                          width: "100%",
                          ariaValuenow: "100",
                          ariaValuemin: "0",
                          ariaValuemax: "100",
                        }}
                      ></div>
                    </div>
                  </p>
                  <p>
                    <div className="progress-4">
                      <div
                        className="progress-bar-1"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{
                          width: "100%",
                          ariaValuenow: "100",
                          ariaValuemin: "0",
                          ariaValuemax: "100",
                        }}
                      ></div>
                    </div>
                  </p>
                  <p>
                    <div className="progress-5">
                      <div
                        className="progress-bar-1"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{
                          width: "100%",
                          ariaValuenow: "100",
                          ariaValuemin: "0",
                          ariaValuemax: "100",
                        }}
                      ></div>
                    </div>
                  </p>
                </div>
                <div className="col-md-1 mb-3">
                  <p>5</p>
                  <p>4</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h3 className="myfont mt-5">You can also like this</h3>
          <h6 className="myfont3 color-font">You’ve never seen it before!</h6>
          <div className="container">
            <div
              className="row row-cols-1 row-cols-md-5 g-4"
              style={{ marginTop: "8px" }}
            >
              {data ? (
                data.map((item) => (
                  <div
                    className="col-2"
                    key={item.id}
                    onClick={() => window.location.reload(false)}
                  >
                    <div
                      className="card"
                      style={{ width: "210px" }}
                      onClick={() =>
                        navigate(`/Product-Detail/${item.id_product}`)
                      }
                    >
                      <img
                        src={item.photo}
                        style={{ height: "200px" }}
                        alt=""
                      />
                      <div
                        className="card-body"
                        style={{ textDecoration: "none" }}
                      >
                        <Link to="/Product-Detail" className="link">
                          <h3 className="text-dark">{item.name_product}</h3>
                        </Link>
                        <h4 className="text-price">
                          {item.price?.toLocaleString()}
                        </h4>
                        <h5 className="text-brand">Zalora Cloth</h5>
                        <h6>
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Please Wait...</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
