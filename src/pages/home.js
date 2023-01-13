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
import Jas from "../img/jas.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [data, setData] = useState([]);

  console.log(process.env.REACT_APP_API_PRODUCT, "data");

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
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={5}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
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
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Jas} alt="Jas" />
                  </Card>
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
              <Col md={3} className="mb-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Jas} alt="Jas" />
                  <Card.Body>
                    <Card.Title>Men's formal suit - Black & White</Card.Title>
                    <Card.Text>$ 40.0</Card.Text>
                    <Figure>
                      <Figure.Caption>Zalora Cloth</Figure.Caption>
                    </Figure>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
