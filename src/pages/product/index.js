import React from "react";
import { Container, Card, Row, Col, Figure } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Jas from "../../img/jas.png";
import Page from "../../img/page.png";
import Page1 from "../../img/page1.png";
import Page2 from "../../img/page2.png";
import Page3 from "../../img/page3.png";
import Page4 from "../../img/page4.png";
import Page5 from "../../img/page5.png";

export default function product() {
  return (
    <header>
      <div class="container-fluid p-3 mb-2 bg-new" />
      <div class="container" />
      <div>
        <h6
          style={{ color: "#9b9b9b", marginTop: "30px", marginBottom: "30px" }}
        >
          Home category T-Shirt
        </h6>
      </div>
      <div>
        <div class="card-new2 mb-3" style={{ maxidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={Page}
                class="img-fluid rounded-start card-top"
                alt="..."
              />
              <div>
                <img src={Page1} alt="Page1" class="card-bottom" />
                <img src={Page2} alt="Page2" class="card-bottom" />
                <img src={Page3} alt="Page3" class="card-bottom" />
                <img src={Page4} alt="Page4" class="card-bottom" />
                <img src={Page5} alt="Page5" class="card-bottom" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Baju Muslim Pria</h3>
                  <p class="card-text" style={{ color: "#9b9b9b" }}>
                    Zalora Cloth
                  </p>
                  {/* <p class="card-text">
                    <small class="text-muted">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="rating">(10)</span>
                    </small>
                  </p> */}
                  <p style={{ color: "#9b9b9b" }}>Price</p>
                  <h4>$ 20.0</h4>
                  <p style={{ color: "#9b9b9b" }}>Color</p>
                  <div class="row">
                    <Button
                      class="btn-dark clr-btn"
                      type="submit"
                      style={{ borderRadius: "50%" }}
                    />
                    <Button
                      class="btn-danger clr-btn"
                      type="submit"
                      style={{ borderRadius: "50%" }}
                    />
                    <Button
                      class="btn-primary clr-btn"
                      type="submit"
                      style={{ borderRadius: "50%" }}
                    />
                    <Button
                      class="btn-success clr-btn"
                      type="submit"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div class="row" style={{ marginTop: "20px" }}>
                    <h4 style={{ marginRight: "150px", marginLeft: "30px" }}>
                      Size
                    </h4>
                    <h4>Jumlah</h4>
                  </div>
                  <div class="row" style={{ marginTop: "20px" }}>
                    <div class="counter1" style={{ marginRight: "108px" }}>
                      <div class="btn-1">-</div>
                      <div class="count1">28</div>
                      <div class="btn-2">
                        <img src="/img/tokoe.png" alt="..." />
                      </div>
                      <div class="counter1">
                        <div class="btn-1">-</div>
                        <div class="count1">1</div>
                        <div class="btn-2">
                          <img src="/img/tokoe.png" alt="..." />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <a href="http//" id="link">
                        <Button
                          class="btn btn-outline-dark btn-block btn-md"
                          id="button-cust-2"
                          style={{
                            marginTop: "23px",
                            height: "45px",
                            borderRadius: "40px",
                            marginRight: "30px",
                          }}
                        >
                          Chat
                        </Button>
                      </a>
                      <div class="row">
                        <a href="http//" id="link">
                          <Button
                            class="btn btn-outline-dark btn-block btn-md"
                            id="button-cust-2"
                            style={{
                              marginTop: "23px",
                              height: "45px",
                              borderRadius: "40px",
                              marginRight: "30px",
                            }}
                          >
                            Add bag
                          </Button>
                        </a>
                      </div>
                      <div class="row">
                        <a href="http//" id="link">
                          <Button
                            class="btn btn-danger btn-block btn-md"
                            id="button-cust-2"
                            style={{
                              marginTop: "23px",
                              height: "45px",
                              borderRadius: "40px",
                              marginLeft: "20px",
                              width: "350px",
                            }}
                          >
                            Buy Now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <div>
            <Container>
              <div className="mb-2"></div>

              <div className="mb-2">
                <h3>You can also like this</h3>
                <Figure>
                  <Figure.Caption>You’ve never seen it before! </Figure.Caption>
                </Figure>
              </div>
              <div>
                <Row>
                  <Col md={3} className="mb-2">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Jas} alt="Jas" />
                      <Card.Body>
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
                        <Card.Title>
                          Men's formal suit - Black & White
                        </Card.Title>
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
      </div>
    </header>
  );
}
