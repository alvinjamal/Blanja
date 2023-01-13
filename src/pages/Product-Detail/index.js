import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Button, Col, Card } from "react-bootstrap";
import "./style.css";
import Jas from "../../img/jas.png";
import Page from "../../img/page.png";
import Page1 from "../../img/page1.png";
import Page2 from "../../img/page2.png";
import Page3 from "../../img/page3.png";
import Page4 from "../../img/page4.png";
import Page5 from "../../img/page5.png";

export default function ProductDetail() {
  const { REACT_APP_API_PRODUCT } = process.env;
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let token = localStorage.getItem("token");
    console.log("my token", token);
    axios
      .get(process.env.REACT_APP_API_PRODUCT + `/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("get data success");
        setData(res.data.data);
        console.log(res.data, "data products");
        console.log(res.data.data[0].name, "res data");
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  };

  const [dataCard, setDataCard] = useState([]);
  console.log(process.env.REACT_APP_API_PRODUCT, "data");
  useEffect(() => {
    const getDataCard = async () => {
      try {
        let resultCard = await axios.get(
          `${process.env.REACT_APP_API_PRODUCT}?sortby=${sortBy}&sort=${sort}`
        );
        setDataCard(resultCard.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataCard();
  }, []);
  return (
    <div className="container-fluid bg-new">
      {/* {data.map((item, i) => { */}
      <div className="container py-3">
        <div className="row py-4">
          <div className="col-1">
            <Link to="/home" className="link-title-detail">
              <h6 className="color-font myfont3">Home</h6>
            </Link>
          </div>
          <div className="col-1">
            <h6 className="myfont3 color-font">
              <FaChevronRight />
              category
            </h6>
          </div>
          <div className="col-1">
            <h6 className="myfont3 color-font">
              <FaChevronRight />
              T-Shirt
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="col-md-12">
              <img src={Page} alt="" style={{ borderRadius: "15px" }} />
            </div>
            <div className="row ml-1">
              <div className="col-md-3 mt-2">
                <img
                  src={Page1}
                  alt=""
                  style={{ height: "60px", borderRadius: "15px" }}
                />
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={Page2}
                  alt=""
                  style={{ height: "60px", borderRadius: "15px" }}
                />
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={Page3}
                  alt=""
                  style={{ height: "60px", borderRadius: "15px" }}
                />
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={Page4}
                  alt=""
                  style={{ height: "60px", borderRadius: "15px" }}
                />
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={Page5}
                  alt=""
                  style={{ height: "60px", borderRadius: "15px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="ml-2">
              <h3 className="myfont">zalora</h3>
              <h6 className="myfont3 color-font">Zalora Cloth</h6>
              <h6 className="mb-5">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <span className="myfont3 color-font">(10)</span>
              </h6>
              <h6 className="color-font myfont3">Price</h6>
              <h3 className="myfont mb-5">$ 20.0</h3>
              <h6 className="myfont">Color</h6>
              <Button
                className="btn btn-dark button-color"
                style={{ borderRadius: "50px", width: "30px" }}
              ></Button>
              <Button
                className="btn btn-danger button-color"
                style={{
                  borderRadius: "50px",
                  width: "30px",
                  marginLeft: "10px",
                }}
              ></Button>
              <Button
                className="btn btn-primary button-color"
                style={{
                  borderRadius: "50px",
                  width: "30px",
                  marginLeft: "10px",
                }}
              ></Button>
              <Button
                className="btn btn-success Button-color"
                style={{
                  borderRadius: "50px",
                  width: "30px",
                  marginLeft: "10px",
                }}
              ></Button>

              <div className="row mt-5 mb-3">
                <div className="col-md-6">
                  <h6 className="text" style={{ marginLeft: "29px" }}>
                    Size
                  </h6>
                  <Button
                    className=" btn-min "
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginRight: "10px",
                      width: "30px",
                    }}
                  >
                    -
                  </Button>
                  <span className="myfont3">1</span>
                  <Button
                    className=" btn-plus shadow"
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginLeft: "10px",
                      width: "30px",
                    }}
                  >
                    +
                  </Button>
                </div>
                <div className="col-md-6">
                  <h6 className="text" style={{ marginLeft: "19px" }}>
                    Jumlah
                  </h6>
                  <Button
                    className=" btn-min "
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginRight: "10px",
                      width: "30px",
                    }}
                  >
                    -
                  </Button>
                  <span className="text1">1</span>
                  <Button
                    className=" btn-plus shadow"
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginLeft: "10px",
                      width: "30px",
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <Button
                    type="submit"
                    className="btn  btn-in-product rounded-pill"
                    variant="outline-secondary"
                  >
                    <h6
                      className="text-dark"
                      style={{
                        marginTop: "5px",
                      }}
                    >
                      Chat
                    </h6>
                  </Button>
                </div>
                <div className="col-md-3">
                  <Button
                    type="submit"
                    className="btn btn-in-product rounded-pill"
                    variant="outline-secondary"
                  >
                    <h6 className="text-dark" style={{ marginTop: "5px" }}>
                      Add bag
                    </h6>
                  </Button>
                </div>
                <div className="col-md-6">
                  <Button
                    type="submit"
                    className="btn btn-danger btn-in-product2 rounded-pill"
                    style={{ width: "20rem" }}
                  >
                    <h6 className="text-light" style={{ marginTop: "5px" }}>
                      Add bag
                    </h6>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text mt-5 mb-5">Informasi Produk</h3>
            <h4 className="text">Condition</h4>
            <h5 className="text text-danger mb-5">New</h5>
            <h4 className="text">Description</h4>
            <p className="font color-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font color-font">
              Donec non magna pellentesque augue eu, sagittis velit. Phasellus
              quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent sed enim vel
              turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique
              placerat. Pellentesque a consequat mauris, vel suscipit ipsum.{" "}
            </p>
            <p className="font color-font">
              Donec ac mauris vitae diam commodo vehicula. Donec quam elit,
              sollicitudin eu nisl at, ornare suscipit magna.
            </p>
            <p className="font color-font">
              Donec non magna rutrum, pellentesque augue eu, sagittis velit.
              Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent sed
              enim vel turpis blandit imperdiet ac ac felis.
            </p>
            <p className="font color-font">
              In ultricies rutrum tempus. Mauris vel molestie orci.
            </p>
            <h3 className="myfont mt-5 mb-5" style={{ fontWeight: "bold" }}>
              Product review
            </h3>
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
                <FaStar className="fastar" />
                <div>
                  <FaStar className="fastar" />
                </div>
                <div>
                  <FaStar className="fastar" />
                </div>
                <div>
                  <FaStar className="fastar" />
                </div>
                <div>
                  <FaStar className="fastar" />
                </div>
              </div>
              <div className="col-2">
                <p>
                  <div className="progress">
                    <div
                      className="progress-bar1"
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
                  <div className="progress">
                    <div
                      className="progress-bar1"
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
                  <div className="progress">
                    <div
                      className="progress-bar"
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
                  <div className="progress">
                    <div
                      className="progress-bar"
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
                  <div className="progress">
                    <div
                      className="progress-bar"
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
        <h3 className="myfont mt-5" style={{ fontWeight: "bold" }}>
          You can also like this
        </h3>
        <h6 className="myfont3 color-font">You’ve never seen it before!</h6>
        <div className="container">
          <div
            className="row row-cols-1 row-cols-md-5 g-4"
            style={{ marginTop: "8px" }}
          >
            {dataCard.map((item) => (
              <div className="col-2">
                <Col className="mb-2">
                  <Card
                    style={{
                      width: "18rem",
                      color: "#000000",
                      padding: " 5px",
                      textDecoration: "none",
                      marginBottom: "2rem",
                    }}
                    as={Link}
                    to={`Product-Detail/${item.id}`}
                  >
                    <Card.Img variant="top" src={item.photo} alt="" />
                    <p className="fs-4">{item.name}</p>
                    <p className="text-danger fs-4">
                      Rp. {item.price.toLocaleString()}
                    </p>
                    <p className="fs-6">(10)</p>
                  </Card>
                </Col>
              </div>
            ))}
          </div>
          <div
            className="row row-cols-1 row-cols-md-5 g-4"
            style={{ marginTop: "8px" }}
          >
            {dataCard.map((item) => (
              <div className="col-2">
                <Col className="mb-2">
                  <Card
                    style={{
                      width: "18rem",
                      color: "#000000",
                      padding: " 5px",
                      textDecoration: "none",
                      marginBottom: "2rem",
                    }}
                    as={Link}
                    to={`Product-Detail/${item.id}`}
                  >
                    <Card.Img variant="top" src={item.photo} alt="" />
                    <p className="fs-4">{item.name}</p>
                    <p className="text-danger fs-4">
                      Rp. {item.price.toLocaleString()}
                    </p>
                    <p className="fs-6">(10)</p>
                  </Card>
                </Col>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* // ))} */}
    </div>
  );
}
