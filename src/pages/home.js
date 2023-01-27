import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Figure,
  Carousel,
  Stack,
} from "react-bootstrap";
import NavbarComponent from "../Components/Navbar";
import Trend2 from "../img/trend2.png";
import Trend3 from "../img/trend3.png";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [data, setData] = useState([]);
  // const id_product = useParams;

  const navigate = useNavigate;

  // console.log(process.env.REACT_APP_API, "data");

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await axios.get(
          `${process.env.REACT_APP_API_PRODUCT}?sortby=${sortBy}&sort=${sort}`
        );
        setData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/category`)
      .then((res) => {
        console.log("Get category success");
        console.log(res.data);
        res.data && setCategory(res.data.data);
      })
      .catch((err) => {
        console.log("Get category fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <NavbarComponent />
      <div className="p-3">
        <Container>
          <div className="mb-5">
            <Carousel interval={2000}>
              <Carousel.Item>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={5}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend3} alt="Trend" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend2} alt="Trend" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend3} alt="Trend" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend2} alt="Trend" />
                  </Card>
                </Stack>
              </Carousel.Item>
              <Carousel.Item>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={5}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend3} alt="Trend" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend2} alt="Trend" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend3} alt="Trend" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Trend2} alt="Trend" />
                  </Card>
                </Stack>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="mb-2">
            <h3 id="category">Category</h3>
            <Figure>
              <Figure.Caption>
                What are you currently looking for
              </Figure.Caption>
            </Figure>
          </div>
          <div className="mb-5">
            <Carousel interval={3000}>
              <Carousel.Item>
                <Row>
                  {category.map((item) => (
                    <Col>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={5}
                      >
                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={item.photo} alt="Jas" />
                          <p className="fs-4 p-2">{item.name}</p>
                        </Card>
                      </Stack>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={5}
                >
                  <Row>
                    {category.map((item) => (
                      <Col>
                        <Stack
                          direction="horizontal"
                          className="h-100 justify-content-center align-items-center"
                          gap={5}
                          // onClick={() =>
                          //   navigate(`/Product-Detail/${item.id_product}`)
                          // }
                        >
                          <Card style={{ width: "18rem" }}>
                            <Card.Img
                              variant="top"
                              src={item.photo}
                              alt="jas"
                            />
                            <p className="fs-4 p-2">{item.name}</p>
                            {/* <p className="fs-4 p-2">{item.id_category}</p> */}
                          </Card>
                        </Stack>
                      </Col>
                    ))}
                  </Row>
                </Stack>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="mb-2">
            <h3 id="category">New</h3>
            <Figure>
              <Figure.Caption>You’ve never seen it before!</Figure.Caption>
            </Figure>
          </div>
          <div>
            <Row>
              {data.map((item) => (
                <Col className="mb-2 p-1">
                  <Card
                    className="p-2"
                    style={{
                      width: "18rem",
                      color: "#000000",
                      padding: " 5px",
                      textDecoration: "none",
                      marginBottom: "2rem",
                    }}
                    onClick={() =>
                      navigate(`/Product-Detail/${item.id_product}`)
                    }
                  >
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to={`/Product-Detail/${item.id_product}`}
                    >
                      <Card.Img variant="top" src={item.photo} alt="" />
                      <p className="fs-5">{item.brand}</p>
                      <p className="fs-4">{item.name}</p>
                    </Link>
                    <p className="text-danger fs-4">
                      Rp. {item.price.toLocaleString()}
                    </p>
                    <p className="fs-6">{item.stock}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="mb-2">
            <h3 id="category">Populer</h3>
            <Figure>
              <Figure.Caption>You’ve never seen it before!</Figure.Caption>
            </Figure>
          </div>
          <div>
            <Row>
              {data.map((item) => (
                <Col className="mb-2 p-1">
                  <Card
                    className="p-2"
                    style={{
                      width: "18rem",
                      color: "#000000",
                      padding: " 5px",
                      textDecoration: "none",
                      marginBottom: "2rem",
                    }}
                    onClick={() =>
                      navigate(`/Product-Detail/${item.id_product}`)
                    }
                  >
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to={`/Product-Detail/${item.id_product}`}
                    >
                      <Card.Img variant="top" src={item.photo} alt="" />
                      <p className="fs-5">{item.brand}</p>
                      <p className="fs-4">{item.name}</p>
                    </Link>
                    <p className="text-danger fs-4">
                      Rp. {item.price.toLocaleString()}
                    </p>
                    <p className="fs-6">{item.stock}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
