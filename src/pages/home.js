import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Figure,
  Carousel,
  Stack,
} from "react-bootstrap";
// import "./style.css";
// import Trend1 from "../img/trend1.png";
import Trend2 from "../img/trend2.png";
import Trend3 from "../img/trend3.png";
// import Trend4 from "../img/trend4.png";
import Jas from "../img/jas.png";
// import Page1 from "../img/baju.png";
// import Page2 from "../img/celana.png";
// import Page3 from "../img/jaket.png";
// import Page4 from "../img/jeans.png";
// import Page5 from "../img/sepatu.png";

export default function home() {
  return (
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
          <h3>Category</h3>
          <Figure>
            <Figure.Caption>What are you currently looking for</Figure.Caption>
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
      {/* <div class="container p-5 mb-2 bg-new">
        <div class="row">
          <div class="col-3">
            <div
              class="carousel-item row-cols-1 row-cols-md-2 active col-md-4"
              style={{ marginLeft: "21rem" }}
            >
              <img
                src="/src/img/trend1.png.png"
                class="d-block w-100 slide"
                alt="..."
              />
              <div class="carousel-caption d-none d-md col-4">
                <h3 style={{ marginBottom: "40px" }}>Trends in 2022</h3>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="carousel-item active">
              <img src="/src/img/trend2.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{ marginBottom: "40px" }}>Black Edition</h3>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="carousel-item active">
              <img src="/src/img/trend3.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{ marginBottom: "40px" }}>Top Shoes</h3>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="carousel-item active d-md col-4">
              <img src="/src/img/trend4.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{ marginBottom: "40px" }}>Trend In 2022</h3>
              </div>
            </div>
          </div>
        </div>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        <div
          class="container"
          style={{ marginTop: "35px", marginLeft: "220px" }}
        >
          <h3 id="category">Category</h3>
          <h6 style={{ color: "#000" }}>What are you currently looking for</h6>
        </div>
        <div class="container" style={{ marginBottom: "30px" }}>
          <div class="carousel slide" id="carousel">
            <div class="cell">
              <div class="carousel-item active">
                <div
                  class="box-wrapper justify-content-center d-flex"
                  style={{ marginTop: "20px" }}
                >
                  <div class="box1">
                    <img src="/src/img/baju.png" id="img -1" alt="..." />
                    <h4 class="carousel-caption">T-Shirt</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="cell">
              <div class="carousel-item active">
                <div
                  class="box-wrapper justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <div class="box2">
                    <img src="/src/img/celana.png" id="img -2" alt="..." />
                    <h4 class="carousel-caption">Shorts</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="cell">
              <div class="carousel-item active">
                <div
                  class="box-wrapper justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <div class="box3">
                    <img src="/src/img/jaket.png" id="img -3" alt="..." />
                    <h4 class="carousel-caption">Jacket</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="cell">
              <div class="carousel-item active">
                <div
                  class="box-wrapper justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <div class="box4">
                    <img src="/src/img/jeans.png" id="img -4" alt="..." />
                    <h4 class="carousel-caption">Pants</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="cell">
              <div class="carousel-item active">
                <div
                  class="box-wrapper justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <div class="box5">
                    <img src="/src/img/sepatu.png" id="img -5" alt="..." />
                    <h4 class="carousel-caption">Shoes</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: "35px", marginLeft: "220px" }}>
        <h3 id="category">New</h3>
        <h6 style={{ color: "#9b9b9b" }}>You’ve never seen it before!</h6>
      </div>
      <div class="container" style={{ marginTop: "20px" }}>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: "20px" }}>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: "20px" }}>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: "35px", marginLeft: "220px" }}>
        <h3 id="category">Popular</h3>
        <h6 style={{ color: "#9b9b9b" }}>
          Find clothes that are trending recently
        </h6>
      </div>
      <div class="container" style={{ marginTop: "20px" }}>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="/src/img/jas.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Men's formal suit - Black & White</h5>
                <h5 class="card-text">$ 40.0</h5>
                <h6 class="card-text-zalora">Zalora Cloth</h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="rating">(10)</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
